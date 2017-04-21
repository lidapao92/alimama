Magix.tmpl("app/views/promo/self/links","<div class=promo-links bx-tmpl=\"tab\" bx-datakey=\"tab\"> <ul class=\"med-lavaLamp clearfix\" bx-name=\"lavalamp\" bx-config=\"{fx: 'easeNone',speed: 0.2}\" > <li class=\"{{#if(tab==1)}}current{{/if(tab==1)}}\" mx-click=\"showTab{tab:1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d8fdc2312\"> <h2><a href=\"#\" hidefocus=true >链接转换</a></h2> </li> <li class=\"{{#if(tab==2)}}current{{/if(tab==2)}}\" mx-click=\"showTab{tab:2}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df6b74609\"> <h2><a href=\"#\" hidefocus=true>关键词转换</a></h2> </li> <li class=\"{{#if(tab==3)}}current{{/if(tab==3)}}\" mx-click=\"showTab{tab:3}\" data-spm-click=\"gostr=/tblm.88.1;locaid=db10c5318\"> <h2><a href=\"#\" hidefocus=true>类目推广</a></h2> </li> </ul> <vframe id=J_vf_promo> <div class=wrap-loading></div> </vframe> </div>");
KISSY.add('app/views/promo/self/links', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    var ViewMap = {
        1: 'app/views/promo/self/links_link',
        2: 'app/views/promo/self/links_keywords',
        3: 'app/views/promo/self/links_category'
    };
    return View.extend({
        init: function (e) {
            var me = this;
            me.observeLocation(['tab']);
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var params = this.location.params;
            var tab = params.tab || 1;
            me.setViewPagelet({ tab: tab }, function () {
                me.mountSubFrame(tab);
            }, function () {
                me.mountSubFrame(tab);
            });
        },
        mountSubFrame: function (tab) {
            var me = this;
            var viewPath = ViewMap[tab];
            var vframe = VOM.get('J_vf_promo');
            var viewOption = {};
            vframe.mountView(viewPath, viewOption);
        },
        events: {
            click: {
                showTab: function (e) {
                    e.halt();
                    var me = e.view;
                    var node = $('#' + e.currentId);
                    if (!node.parent().hasClass('selected')) {
                        me.navigate('tab=' + e.params.tab);
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