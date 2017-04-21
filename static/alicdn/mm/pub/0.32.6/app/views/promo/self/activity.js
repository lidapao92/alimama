Magix.tmpl("app/views/promo/self/activity","<div class=\"table-container activity-list\" bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\" > <div bx-tmpl=\"nav\" bx-datakey=\"tmsTips\"> <ul class=\"med-lavaLamp clearfix\" bx-name=\"lavalamp\" bx-config=\"{fx:'easeNone',speed:0.2}\"> {{#tmsTips}} <li class=\"{{#selected}}current{{/selected}}\" mx-click=\"tab{tab:{{tab}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d07d7914e\"> <h2><a href=\"#\">{{invokerName}}</a></h2> </li> {{/tmsTips}} </ul></div> <p class=\"tip show\" bx-tmpl=\"tips\" bx-datakey=\"tmsTips\">{{{list_tmsTips}}}</p> <vframe id=J_vf_activity> <div class=wrap-loading></div> </vframe> </div>");
KISSY.add('app/views/promo/self/activity', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    var ViewMap = {
        main: 'app/views/promo/self/activity_main',
        more: 'app/views/promo/self/activity_more'
    };
    return View.extend({
        init: function (e) {
            this.observeLocation(['tab']);
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var tab = params.tab;
            if (!tab) {
                tab = 1;
            }
            me.manage('tab', tab);
            me.manage(MM.fetchAll([{
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/activity_offical_tip.html',
                        encode: 'utf-8'
                    }
                }], function (TmsTips) {
                var tmsTips = TmsTips.get('data').jsonString;
                tmsTips = JSON.parse(tmsTips);
                S.each(tmsTips, function (v, k) {
                    if (v.tab == tab) {
                        v.selected = true;
                    }
                });
                me.setViewPagelet({ tmsTips: tmsTips }, function () {
                    me.mountSubFrame(tab);
                }, function () {
                    me.mountSubFrame(tab);
                });
            }));
        },
        mountSubFrame: function (tab) {
            var me = this;
            var viewPath = tab == 1 ? ViewMap.main : ViewMap.more;
            var vframe = VOM.get('J_vf_activity');
            var viewOption = {};
            vframe.mountView(viewPath, viewOption);
        },
        events: {
            click: {
                tab: function (e) {
                    e.halt();
                    var me = e.view;
                    var node = $('#' + e.currentId);
                    if (!node.parent().hasClass('current')) {
                        me.navigate('/promo/self/activity?tab=' + e.params.tab);
                    }
                }
            }
        },
        renderer: {
            list: {
                tmsTips: function (self) {
                    var tab = self.getManaged('tab');
                    var tips = '';
                    S.each(this.tmsTips, function (v, i) {
                        if (tab == v.tab) {
                            tips = v.content;
                        }
                    });
                    return tips;
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'node',
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
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});