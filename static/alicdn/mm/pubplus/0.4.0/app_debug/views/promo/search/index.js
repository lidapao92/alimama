define(
    'app/views/promo/search/index',
    [
        'jquery',
        'underscore',
        'magix',
        'brix/loader',
        'app/models/promo/search_item',
        'app/util/dialog/index',
        'app/util/index'
    ],
    function ($, _, Magix, Loader, Item, DialogHelper, Util) {
        return Magix.View.extend({
            tmpl: "<div class=block-search-head> <div class=\"block-search-head-inner wrap\"> <ul class=\"head-nav clearfix\"> <li mx-click=\"navChange('')\" data-spm-click=\"gostr=/alimama.11;locaid=dde8fbf12\" class=\"{{!_isTmall ? 'selected' : ''}}\">所有商品</li> <li mx-click=\"navChange(1)\" data-spm-click=\"gostr=/alimama.11;locaid=d9e890250\" class=\"{{_isTmall ? 'selected' : ''}}\">天猫</li> </ul> </div> </div> <div t-unless=showError class=block-search-body> <div class=block-search-filter-wrap> <div id=J_category_filter class=search-category-container mx-vframe=true></div> <div id=J_special_filter class=\"search-filter-container mt10\" mx-vframe=true></div> </div> <div id=J_sort_filter mx-vframe=true class=\"block-lists-top-wrap mt20\"> </div> <div id=J_item_list mx-vframe=true></div> </div> <div t-if=showError class=\"block-search-body block-search-body-error\"> <div class=\"no-data no-data-list tc f14\"> <i class=icon-police></i> <p class=desc>根据相关法律法规和政策<br> 无法显示“<span class=color-brand>{{query}}</span>”的相关商品 </p> </div> </div> <div mx-vframe=true id=J_selection_bar mx-view=\"app/views/promo/common/selection/selection_bar?groupType=1\"></div> ",
            init: function () {
                this.observeLocation(['typeTag', 'userType', 'hPayRate30', 'startBiz30day', 'q', 'toPage', 'perPageSize', 'pidvid', 'catIds', 'startQuantity', 'startPayUv30', 'startRlRate', 'hGoodRate', 'jhs', 'startRatesum', 'startDsr', 'startSpay30', 'xfzbz', 'qtth', 'lRfdRate', 'hSellerGoodrat', 'hSpayRate30', 'jpmj', 'dpyhq', 'npxType', 'picQuality', 'sortType', 'queryType', 'b2c', 'freeShipment', 'dxjh', 'yxjh', 'loc', 'startTkRate', 'endTkRate', 'startPrice', 'endPrice', '_t'])

                // if (!this.location.get('q')) {
                //   this.navigate('/promo/search.htm')
                // }
            },
            render: function (e) {
                var me = this
                var hasRendered = me.rendered

                if (hasRendered) {
                    me.animateLoading()
                }

                me.wrapModel(Item).getList(me.location.params, function (err, data) {
                    //由父级负责管理所有数据，子级负责渲染
                    if (err) {
                        me.handelError(err)
                        return
                    }

                    // 刷新一下搜索按钮的文案
                    me.vom.get('magix_vf_header').invokeView('refresh', data.typeTagName)

                    me.data = data
                    me.data.showError = false

                    me.setView().then(function () {
                        //如果是从error回到正常情况，需要重新mount
                        if (me.badWord) {
                            me.mountView(data)
                            me.badWord = false
                            return
                        }

                        //初次渲染，需要重新mountview
                        if (!hasRendered) {
                            me.mountView(data)
                            return
                        }

                        //其他情况只需要refesh就行了
                        me.refreshView(data)
                    })

                })
            },
            handelError: function (err) {
                var me = this
                //违禁词需要特殊处理
                if (err.invalidKey && err.invalidKey == 'badWord') {
                    me.data = {
                        showError: true,
                        query: this.location.get('q')
                    }
                    me.setView()
                    me.badWord = true
                    //me.getManaged('listsView').invokeView('refresh',{error:true})
                } else {//其他情况直接给出吊顶提示
                    Util.showGlobalTip(err.message)
                }

            },
            refreshView: function (data) {
                var me = this
                me.getManaged('categoryView').invokeView('refresh', data)
                me.getManaged('specialView').invokeView('refresh', data)
                me.getManaged('sortView').invokeView('refresh', data)
                me.getManaged('listsView').invokeView('refresh', data)
            },
            mountView: function (data) {
                var me = this
                var categoryView = me.vom.get('J_category_filter')
                var specialView = me.vom.get('J_special_filter')
                var sortView = me.vom.get('J_sort_filter')
                var listsView = me.vom.get('J_item_list')

                me.manage('categoryView', categoryView)
                me.manage('specialView', specialView)
                me.manage('sortView', sortView)
                me.manage('listsView', listsView)


                categoryView.mountView('app/views/promo/search/item_category_filter', {
                    data: data
                })

                specialView.mountView('app/views/promo/search/item_special_filter', {
                    data: data
                })

                sortView.mountView('app/views/promo/search/item_sort_filter', {
                    data: data
                })
                listsView.mountView('app/views/promo/search/item_list', {
                    data: data
                })
            },
            navChange: function (e, type) {
                var curNode = $(e.currentTarget)
                var query = this.location.get('q')
                // appkey 是用来传给引擎过滤条件用的，搜索的时候需要透传
                var appkey = this.location.get('appkey')

                this.navigate('/promo/search/index.htm?q=' + encodeURIComponent(query) + '&userType=' + type + '&_t=' + (new Date()).getTime() + (appkey ? '&appkey=' + appkey : ''))

                curNode.siblings('li').removeClass('selected')
                curNode.addClass('selected')
            }
        })
    }
)