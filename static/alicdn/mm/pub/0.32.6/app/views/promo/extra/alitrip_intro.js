Magix.tmpl("app/views/promo/extra/alitrip_intro","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>阿里旅行·去啊</h2> </div> </div> <div class=promo-intro bx-tmpl=\"joined\" bx-datakey=\"joined\" id=J_Tripintro> <div class=\"desc w620\"> {{{introHtml}}} </div> </div>");
KISSY.add('app/views/promo/extra/alitrip_intro', function (S, View, VOM, Router, Node, Analytics, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            Analytics.log('intro', 'pg');
            this.manage('data', e);
            this.any();
        },
        any: function () {
            S.one('body').delegate('click', '#J_Tripintro a', function (event) {
                var target = S.one(event.currentTarget);
                if (target.attr('data')) {
                    Analytics.log('intro', target.attr('data'));
                }
            });
        },
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([{
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/alitrip_spread_intro.html',
                        encode: 'utf-8'
                    }
                }], function (IntroModel) {
                var introHtml = IntroModel.get('data').jsonString;
                me.setViewPagelet({
                    introHtml: introHtml,
                    joined: false
                });
            }));
        },
        events: { click: {} }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'magix/router',
        'node',
        'app/views/promo/extra/alitrip_analytics',
        'app/models/modelmanager',
        'app/util/util',
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
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