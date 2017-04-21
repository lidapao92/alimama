Magix.tmpl("app/views/wxrobot","<div class=wxrobot-bar bx-tmpl=\"sourceId\" bx-datakey=\"sourceId\"> <div class=\"wxrobot-trigger iconfont-pub\" mx-click=\"show{sourceId:{{sourceId}}}\">&#xe62d;</div> </div>");
KISSY.add('app/views/wxrobot', function (S, View, Node, Util) {
    var $ = Node.all;
    return View.extend({
        init: function () {
            var me = this;
            var awRendered = false;
            window.AW && window.AW.init({
                sourceId: 464,
                bizCode: 'PCMaMaAnyWhereWindow',
                logoWidth: 30,
                onRendered: function () {
                    if (awRendered) {
                        window.AW.openDialog({ isFirstAnswer: true });
                    }
                    awRendered = true;
                }
            });
        },
        render: function () {
            var loc = this.location;
            var pathname = loc.pathname;
            var sourceId = Util.getSourceId(pathname);
            this.setViewPagelet({ sourceId: sourceId });
        },
        locationChange: function (e) {
            if (e.changed.isPathname()) {
                this.render();
            }
        },
        events: {
            click: {
                show: function (e) {
                    window.AW && window.AW.refresh({ sourceId: e.params.sourceId });
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'node',
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