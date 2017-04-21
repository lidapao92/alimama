Magix.tmpl("app/views/manage/zone/zone", "<div bx-tmpl=\"tab\" bx-datakey=\"tab\"> <ul class=\"med-lavaLamp clearfix\" bx-name=\"lavalamp\" bx-config=\"{fx: 'easeNone',speed: 0.2}\"> <li class=\"{{#if(tab==1)}}current{{/if(tab==1)}}\" mx-click=\"showTab{tab:1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d733fe3f9\"> <h2><a href=\"#\" hidefocus=true >网站推广位</a></h2> </li> <li class=\"{{#if(tab==2)}}current{{/if(tab==2)}}\" mx-click=\"showTab{tab:2}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dcdc0cd06\"> <h2><a href=\"#\" hidefocus=true >APP推广位</a> </h2> </li> <li class=\"{{#if(tab==3)}}current{{/if(tab==3)}}\" mx-click=\"showTab{tab:3}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df9848405\"> <h2><a href=\"#\" hidefocus=true >导购推广位</a></h2> </li> <li class=\"{{#if(tab==4)}}current{{/if(tab==4)}}\" mx-click=\"showTab{tab:4}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dda4d4348\"> <h2><a href=\"#\" hidefocus=true >软件推广位</a></h2> </li> </ul> </div> <vframe id=J_vf_table> <div class=wrap-loading></div> </vframe>");
KISSY.add('app/views/manage/zone/zone', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    var ViewMap = {
        1: 'app/views/manage/zone/zone_site',
        2: 'app/views/manage/zone/zone_app',
        3: 'app/views/manage/zone/zone_self',
        4: 'app/views/manage/zone/zone_software'
    };
    return View.extend({
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var params = this.location.params;
            var tab = params.tab || 1;
            me.setViewPagelet({tab: tab});
            var tableFrame = VOM.get('J_vf_table');
            tableFrame.mountView(ViewMap[tab]);
        },
        events: {
            click: {
                showTab: function (e) {
                    e.halt();
                    var me = e.view;
                    var node = $('#' + e.currentId);
                    if (!node.parent().hasClass('selected')) {
                        me.navigate('tab=' + e.params.tab + '&toPage=1');
                    }
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