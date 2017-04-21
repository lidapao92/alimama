define('app/view', [
    'jquery',
    'underscore',
    'handlebars',
    'magix',
    'pat',
    'brix/loader',
    'app/models/manager',
    'app/util/dialog/index',
    'app/util/lazyload/index',
    'app/filters'
], function ($, _, Handlebars, Magix, Pat, Loader, Manager, DialogHelper, Lazyload, filters) {
    // 扩展Handlebars
    // if等于判断
    Handlebars.registerHelper('ifCond', function (v1, v2, options) {
        return (v1 === v2) ? options.fn(this) : options.inverse(this)
    })
    // checkbox checked 判断
    Handlebars.registerHelper('checked', function (v1, v2, options) {
        return (v1 === v2) ? ' checked="checked"' : ''
    })

    var VfTagName = Magix.config('tagName');
    var Now = $.now();

    var ProcessImage = function (node) {
        var img = new Image()
        img.src = node.attr('data-src')
        img.onload = function () {
            node.attr('src', node.attr('data-src'))
            node.removeAttr('data-src')
            var wrapper = node.closest('.img-loading')
            wrapper.removeClass('img-loading').addClass('img-loaded')
        }
    }


    var destroyProcess = function (me, targets) {
        if (!targets) return

        me.undelegateEvents && me.undelegateEvents($(targets))

        Loader.destroy(false, targets)
        _.each(targets, function (target) {
            if (target.nodeType == 1) {
                me.owner.unmountZoneVframes && me.owner.unmountZoneVframes(target)
            }
        })
    }

    var bootProcess = function (me, targets) {
        if (!targets) return

        me.delegateEvents && me.delegateEvents($(targets))

        _.each(targets, function (target) {
            //Loader.boot(target)
            if (target.nodeType == 1) {
                if (target.tagName.toLowerCase() == VfTagName && target.getAttribute('mx-vframe')) {
                    if (!target.id) {
                        target.id = 'mx_n_' + Now++
                    }
                    me.owner.mountVframe(target.id, target.getAttribute('mx-view'))
                } else {
                    me.owner.mountZoneVframes(target)
                }

            }

        })
    }

    //删除掉注释节点
    var normalizeNodes = function (targets) {
        var nodes = []
        if (!targets) return []

        _.isArray(targets) && _.each(targets, function (target) {

            if (target.nodeType !== 8) {
                nodes.push(target)
            }

        })
        return nodes

    }

    var webpTester = document.createElement('canvas')
    if (webpTester.getContext && webpTester.getContext('2d')) {
        var Webp = webpTester.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }

    return Magix.View.mixin({
        /**
         * 占位图
         * @type {String}
         */
        PIMG: '//img.alicdn.com/tps/i1/TB1FNjaIXXXXXcKXVXXS57yVXXX-1200-580.jpg',

        request: function () {
            return Manager.createRequest(this)
        },
        wrapModel: function (Model) {
            return new Model(this)
        },
        /**
         * 更新view
         * @param  {function} firstCallback 第一次渲染view会调用
         * @param  {function} otherCallback 除第一次渲染其他时候的render会调用
         * @return {promise} promise对象  可以接then,所有渲染都会调用
         */
        setView: function (firstCallback, otherCallback) {
            var me = this
            var defer = $.Deferred()
            var sign = me.sign
            var wrapper = $('#' + me.id)
            var n = me.$(me.id)

            var data = me.data
            if (!data) {
                data = {
                    pvid: Magix.local('pvid')
                }
            } else {
                _.extend(data, {
                    pvid: Magix.local('pvid')
                })
            }

            var options
            if (!me.rendered) {
                me.beginUpdate(me.id)
                if (sign > 0) {
                    if (n) {
                        me.undelegateEvents(n)

                        me._data = me.data
                        options = {
                            el: wrapper[0],
                            data: me._data,
                            template: me.tmpl,
                            dataCheckType: 'dirtyCheck'
                        }

                        me.filters = me.filters || {}
                        options.filters = _.defaults(me.filters, filters)
                        _.each(me.filters, function (filter, key) {
                            me.filters[key] = _.bind(filter, me)
                        })

                        me.__pat = new Pat(options)

                        //删除时需要destroy brix组件
                        me.__pat.on('beforeDeleteBlock', function (targets) {
                            destroyProcess(me, normalizeNodes(targets))
                        })
                        //属性变更时有些特殊场景需要处理
                        me.__pat.on('afterUpdateAttribute', function (targets, attribute, value) {
                            //brix组件需要重新boot
                            var target = _.isArray(targets) ? targets[0] : targets
                            if (target.hasAttribute('bx-name')) {
                                Loader.destroy(false, target)
                            }

                            // view需要重新mount
                            if (target.hasAttribute('mx-vframe')) {
                                if (!target.id) {
                                    target.id = 'mx_n_' + Now++
                                }
                                me.owner.mountVframe(target.id, target.getAttribute('mx-view'))
                            }
                        })

                        //添加时需要boot brix组件
                        me.__pat.on('afterAddBlock', function (targets) {
                            bootProcess(me, normalizeNodes(targets))
                        })

                        me.delegateEvents(n)
                    }
                }

                Loader.boot(wrapper[0], function () {
                    me.endUpdate(me.id)
                    //me.delegateEvents(n)
                    if (sign == me.sign) {
                        firstCallback && firstCallback.call(me)
                        defer.resolve(Loader)
                    }
                })

                me.on('destroy', function () {
                    Loader.destroy(false, wrapper[0])
                    if (me.__pat) me.__pat.$destroy()
                })

            } else {

                if (data != me._data) {
                    _.extend(me._data, me.data)
                }
                me.undelegateEvents(n)
                me.__pat.$apply()
                me.delegateEvents(n)
                //整体boot，brix会根据clientid来差异化init
                Loader.boot(wrapper[0], function () {
                    if (sign == me.sign) {
                        otherCallback && otherCallback()
                        defer.resolve(Loader)
                    }
                })
            }

            return defer.promise()
        },
        setViewHTML: function (data) {
            var me = this
            var defer = $.Deferred()
            var promise = defer.promise()
            var $wrapper = $('#' + me.id)
            var sign = me.sign

            data = data || me.data
            if (!data) {
                data = {
                    pvid: Magix.local('pvid')
                }
            } else {
                _.extend(data, {
                    pvid: Magix.local('pvid')
                })
            }

            me.data = data

            if (!me.__tmplFn__) {
                me.__tmplFn__ = Handlebars.compile(me.tmpl)
            }
            Loader.destroy($wrapper[0])
            //加上renderer处理
            if (me.renderers) {
                me.registerRenderers(me.renderers)
            }
            me.setHTML(me.id, me.__tmplFn__(data))
            //me.delegateEvents(me.$(me.id))
            Loader.boot($wrapper[0], function () {

                if (sign == me.sign) {
                    defer.resolve(Loader)
                }
            })

            me.on('destroy', function () {
                Loader.destroy($wrapper[0])
            })

            return promise
        },
        /**
         * 注册模板帮助方法
         * @param {object} data 包含方法的对象
         **/
        registerRenderers: function (data) {
            data = data || {}
            var me = this
            var ret = {}
            for (var group in data) {
                var groups = data[group]
                for (var n in groups) {
                    ret[group + '_' + n] = (function (f) {
                        return function () {
                            return f.call(this, me)
                        }
                    }(groups[n]))
                }
            }

            return $.extend(me.data, ret)
        },
        /**
         * 登陆判断
         * 如果没有登陆则唤起吊顶登陆框
         */
        checkLogin: function () {
            if (!Magix.local('isLogin')) {
                Magix.toLogin()
            }
        },
        /**
         * 加载进度动画效果
         */
        animateLoading: function () {
            var uxloading = $('.block-switch-loading')
            uxloading.css({
                opacity: 1,
                width: 0
            })
            uxloading.stop().animate({
                width: '100%'
            }, 200, 'linear', function () {
                var _this = this
                setTimeout(function () {
                    uxloading.stop().animate({
                        opacity: 0
                    }, 250)
                }, 250)
            })
        },
        /**
         * 适配图片
         * @param  {String} url 图片地址
         * @param  {String} size 类似'320x320'形式的字符串，支持'320x320xc'裁切
         * @param  {Integer} q 质量
         * @return {String} 适配后的图片地址
         */
        adaptImg: function (url, size, q) {
            //url=url.replace(/_\d+x\d+/g,'')
            //(_(\d+x\d+)(q\d+).jpg)?(_.webp)?
            var tail = ''
            if (size || q) {
                tail += '_'
                if (size) tail += size
                if (q) tail += 'q' + q
                //tail += '.jpg'
            }
            if (Webp) {
                tail += '_.webp'
            }
            return url + tail
        },
        /**
         * 图片懒加载
         * @param {String} zoneId 区域id
         * @param {Integer} threshold 阈值
         */
        lazyload: function (zoneId, threshold) {
            var zone = $('#' + zoneId)
            var imgs = zone.find('img[data-src]')
            Lazyload.add(zoneId, imgs, threshold, ProcessImage)
            Lazyload.load(zoneId)
        },
        /**
         * 获取代码公用方法
         */
        getCode: function (opts) {
            var me = this
            var dialogConfig = {
                width: 500,
                height: 450,
                closable: false
            }
            var viewName = 'app/views/promo/common/zone/' + (opts.zone || 'self')
            var viewOptions = _.extend({
                code: 'item',
                triggerView: me,
                codeDialogWidth: 600,
                codeDialogHeight: 305
            }, opts)
            DialogHelper.show(dialogConfig, viewName, viewOptions)
        }
    })
})