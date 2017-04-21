Magix.tmpl("app/views/default","<div class=wrapper data-spm=1998457203> <div class=switch-loading></div> <vframe id=magix_vf_demo></vframe> <vframe mx-view=\"app/views/header\"></vframe> <div class=\"clearfix wrap\"> <div class=main> <div class=inmain id=inmain> <vframe id=magix_vf_main> <div class=wrap-loading></div> </vframe> </div> </div> <vframe mx-view=\"app/views/menu\"></vframe> </div> <vframe mx-view=\"app/views/msgbar\"></vframe> <vframe mx-view=\"app/views/wxrobot\"></vframe> <vframe mx-view=\"app/views/footer\"></vframe> </div>");
KISSY.add('app/views/default', function (S, View, VOM, UA, Node, R, Util) {
    var $ = Node.all;
    return View.extend({
        init: function () {
            var me = this;
            me.observeLocation({ pathname: true });
            if (UA.ie < 8) {
                me.fixLowerIE();
                me.on('destroy', function () {
                    me.unfixLowerIE();
                });
            }
            me.on('created', function () {
                var demoView = me.getManaged('demoView');
                setTimeout(function () {
                    try {
                        if (!UA.ie || UA.ie >= 8) {
                            demoView.render();
                        }
                    } catch (e) {
                        S.log(e.message);
                        demoView.close();
                    }
                }, 0);
            });
        },
        fixLowerIE: function () {
            var zone = $(document.body);
            var focus = function (e) {
                $(e.target).addClass('focus');
            };
            var blur = function (e) {
                $(e.target).removeClass('focus');
            };
            zone.delegate('focusin', 'input,textarea', this.$ieFocus = focus);
            zone.delegate('focusout', 'input,textarea', this.$ieBlur = blur);
        },
        unfixLowerIE: function () {
            var zone = $(document.body);
            zone.undelegate('focusin', 'input,textarea', this.$ieFocus);
            zone.undelegate('focusout', 'input,textarea', this.$ieBlur);
        },
        render: function () {
            var me = this;
            me.setViewPagelet({}, function () {
                me.mountMainFrame();
                me.animateLoading();
                me.loadDemo();
                me.spmlog();
            });
        },
        mountMainFrame: function () {
            var me = this;
            var loc = me.location;
            var pathname = loc.pathname;
            var vframe = VOM.get('magix_vf_main');
            if (vframe) {
                var pns = pathname.split('/');
                pns.shift();
                var folder = pns.shift() || 'home';
                var view = pns.join('/') || 'index';
                if (S.endsWith(view, '/')) {
                    view += 'index';
                }
                var viewPath = 'app/views/' + folder + '/' + view;
                vframe.mountView(viewPath);
            }
            if (S.UA.ie < 9) {
                document.title = '\u6DD8\u5B9D\u8054\u76DF-\u6211\u7684\u821E\u53F0\uFF01\u81F4\u529B\u4E8E\u6210\u4E3A\u5168\u7403\u9886\u5148\u7684\u5F00\u653E\u3001\u5206\u4EAB\u548C\u8D23\u4EFB\u7684\u7535\u5B50\u5546\u52A1\u8054\u76DF\uFF01';
            }
        },
        locationChange: function (e) {
            this.mountMainFrame();
            this.animateLoading();
            this.spmlog();
            Util.hideDialog();
            Util.hideToolTip();
        },
        animateLoading: function () {
            var uxloading = $('.switch-loading');
            S.Anim.stop(uxloading, true);
            uxloading.css({
                opacity: 1,
                width: 0
            });
            uxloading.animate({ width: '100%' }, 0.2, 'easeNone', function () {
                var _this = this;
                setTimeout(function () {
                    uxloading.animate({ opacity: 0 }, 0.25);
                }, 250);
            });
        },
        loadDemo: function () {
            var me = this;
            var vframe = VOM.get('magix_vf_demo');
            viewOptions = {
                cb: function (demoView) {
                    me.manage('demoView', demoView);
                }
            };
            vframe.mountView('app/views/demo', viewOptions);
        },
        spmlog: function () {
            var me = this;
            var loc = me.location;
            var pathname = loc.pathname;
            Util.genPVID(pathname);
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'ua',
        'node',
        'magix/router',
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
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});