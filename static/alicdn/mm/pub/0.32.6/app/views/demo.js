Magix.tmpl("app/views/demo","<div class=global-demo> <div class=\"demo-page demo-overview\" data-path=\"myunion/overview\"> <div class=step data-step=1> <div class=center> <h1>我们做了一些改变</h1> <p>我们对淘宝联盟的LOGO、产品和架构做了全面的调整</p> <p>这些调整是为了让你有更好的体验！</p> <a href=\"#\" class=\"inform-btn btn btn-orange btn-size28\" mx-click=goNext data-spm-click=\"gostr=/tblm.88.1;locaid=ddc47bcc7\">了解一下</a> </div> </div> <div class=step data-step=2> <div class=ceiling2></div> <div class=tip2></div> <a class=\"next2 next-btn\" href=\"#\" mx-click=goNext data-spm-click=\"gostr=/tblm.88.1;locaid=dd2d56ddd\"></a> </div> <div class=step data-step=3 data-target=.menu-account> <div class=ceiling3 data-offsetx=-6 data-offsetY=6></div> <div class=tip3 data-offsetX=72 data-offsetY=49></div> <a class=\"next3 next-btn\" href=\"#\" data-offsetX=437 data-offsetY=156 mx-click=goNext data-spm-click=\"gostr=/tblm.88.1;locaid=daa991978\"></a> </div> <div class=step data-step=4> <div class=ceiling4></div> <div class=tip4></div> <a class=\"next4 next-btn\" href=\"#\" mx-click=goNext data-spm-click=\"gostr=/tblm.88.1;locaid=d338fb19c\"></a> </div> <div class=step data-step=5> <div class=left-side></div> <div class=tip5></div> <a class=\"close close-icon\" href=\"#\" mx-click=close data-spm-click=\"gostr=/tblm.88.1;locaid=d44aa3550\"></a> </div> </div> <div class=\"demo-page demo-promo-items\" data-path=\"promo/self/items/index\" data-target=.sub-nav> <div class=left-side data-offsetX=-17 data-offsetY=-16></div> <div class=tip data-offsetX=150 data-offsetY=280></div> <a class=\"close close-icon\" href=\"#\" data-offsetX=500 data-offsetY=290 mx-click=close data-spm-click=\"gostr=/tblm.88.1;locaid=ddb4aed05\"></a> </div> <a class=close-btn href=\"#\" mx-click=close data-spm-click=\"gostr=/tblm.88.1;locaid=d2916cafd\"></a> </div>");
KISSY.add('app/views/demo', function (S, View, MM, Node) {
    var $ = Node.all;
    var _prefix = 'unionpub/';
    var map = {
        'myunion/overview': false,
        'promo/self/items/index': false
    };
    var filters = {
        'promo/self/items': function () {
            if (!!this.location.get('q')) {
                return 'promo/self/items?q';
            } else {
                return 'promo/self/items/index';
            }
        }
    };
    return View.extend({
        init: function (e) {
            var me = this;
            e.cb(this);
            me.on('viewed', function (pathname) {
                if (S.startsWith(pathname, '/'))
                    pathname = pathname.slice(1);
                S.log('Viewed page:' + pathname);
                if (map.hasOwnProperty(pathname))
                    map[pathname] = true;
                MM.fetchAll([{
                        name: 'demo_insertViewedPage',
                        postParams: { url: _prefix + pathname }
                    }]);
            });
        },
        render: function () {
            var me = this;
            var initFlag = me.getManaged('initFlag');
            if (!initFlag) {
                me.manage('initFlag', 'inited');
                me.setViewPagelet({});
            } else {
                var pathname = me.location.pathname;
                if (S.startsWith(pathname, '/'))
                    pathname = pathname.slice(1);
                var continueFlag = function check(p) {
                    if (map[p] === true)
                        return false;
                    if (!map.hasOwnProperty(p)) {
                        if (typeof filters[p] == 'function') {
                            var alias = filters[p].call(me, p);
                            if (typeof alias == 'string') {
                                pathname = alias;
                                return check(alias);
                            }
                        }
                        return false;
                    }
                    return true;
                }(pathname);
                if (continueFlag) {
                    me.manage(MM.fetchAll([{
                            name: 'demo_queryViewedPage',
                            urlParams: { url: _prefix + pathname }
                        }], function (Model) {
                        var data = Model.get('data');
                        if (!data.hasViewed) {
                            me.loadDemo(pathname);
                        }
                    }));
                }
            }
        },
        loadDemo: function (pathname) {
            var me = this;
            if (S.startsWith(pathname, '/'))
                pathname = pathname.slice(1);
            $('body').addClass('demo-position-fixed');
            me.show(pathname).fire('viewed', pathname);
        },
        show: function (pathname) {
            S.log('show: ' + pathname);
            var me = this;
            if (S.startsWith(pathname, '/'))
                pathname = pathname.slice(1);
            $('.global-demo .demo-page').removeClass('selected');
            var page = $('.global-demo [data-path="' + pathname + '"]');
            if (page) {
                var steps = page.all('.step');
                if (steps.length) {
                    me.showStep(page, 1);
                } else {
                    me.resolvePosition(page);
                }
                page.addClass('selected');
                $('.global-demo').fadeIn(0.5);
            }
            return me;
        },
        close: function () {
            var me = this;
            $('.global-demo').fadeOut(0.5);
            $('body').removeClass('demo-position-fixed');
            return me;
        },
        showStep: function (page, index) {
            var me = this;
            index = index - 1 || 0;
            if (page) {
                var steps = page.all('.step');
                steps.hide();
                var step = $(steps[index]);
                if (step.length) {
                    me.resolvePosition(step);
                    step.fadeIn(0.5);
                }
            }
            return me;
        },
        closeStep: function (page, index) {
            var me = this;
            index = index - 1 || 0;
            if (page) {
                var steps = page.all('.step');
                var step = $(steps[index]);
                if (step.length) {
                    step.fadeOut(0.5);
                }
            }
            return me;
        },
        resolvePosition: function (page) {
            var me = this;
            if (!page instanceof Node || !page.length)
                return;
            var targetNode = $(page.attr('data-target'));
            if (!targetNode.length)
                return;
            var standardTop = targetNode.offset().top;
            var standardLeft = targetNode.offset().left;
            S.log('standardTop: ' + standardTop);
            S.log('standardLeft: ' + standardLeft);
            page.children().each(function (child) {
                var offsetX = S.trim(child.attr('data-offsetX')) || '0';
                var offsetY = S.trim(child.attr('data-offsetY')) || '0';
                child.css({
                    position: 'absolute',
                    top: standardTop + parseInt(offsetY, 10),
                    left: standardLeft + parseInt(offsetX, 10)
                });
            });
        },
        events: {
            click: {
                close: function (e) {
                    e.halt();
                    var me = e.view;
                    me.close();
                },
                goNext: function (e) {
                    e.halt();
                    var me = e.view;
                    var el = $('#' + e.currentId);
                    var page = el.parent('.demo-page');
                    var step = el.parent('.step');
                    var currentStep = parseInt(step.attr('data-step'), 10);
                    S.log('currentStep: ' + currentStep);
                    me.closeStep(page, currentStep).showStep(page, ++currentStep);
                },
                goPrev: function (e) {
                    e.halt();
                    var me = e.view;
                    var el = $('#' + e.currentId);
                    var page = el.parent('.demo-page');
                    var step = el.parent('.step');
                    var currentStep = parseInt(step.attr('data-step'), 10);
                    S.log('currentStep: ' + currentStep);
                    me.closeStep(page, currentStep).showStep(page, --currentStep);
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'app/models/modelmanager',
        'node',
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
        'app/util/util',
        'app/util/datepicker/datepicker',
        'app/util/dialog/dialog',
        'app/util/format/format',
        'app/util/globaltip/globaltip',
        'app/util/robot/sourceid',
        'app/util/spmlog/spmlog',
        'app/util/mathextend/mathextend',
        'app/util/tooltip/tooltip',
        'app/util/widgetds/widgetds',
        'app/util/rank/rank',
        'app/util/reporttip/reporttip',
        'app/util/vcode/vcode',
        'app/util/pagination/index',
        'app/util/fields/fields',
        'app/util/mouseevent/index',
        'magix/vframe',
        'magix/vom',
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});