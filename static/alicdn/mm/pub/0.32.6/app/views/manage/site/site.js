Magix.tmpl("app/views/manage/site/site","<div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=mb20> 我们对推广资源管理进行了升级，<a href=\"http://club.alimama.com/read-htm-tid-5612101.html\" target=_blank class=color-blue>点此查看填写教程</a>。请您按实际推广方式创建推广资源管理的内容。详情请见 <a href=\"http://club.alimama.com/read-htm-tid-5579277.html\" target=_blank class=color-blue>阿里妈妈用户体系和产品升级通知</a> </div> {{#hasPromo}} <div bx-tmpl=\"tab\" bx-datakey=\"tab\"> <ul class=\"med-lavaLamp clearfix\" bx-name=\"lavalamp\" bx-config=\"{fx: 'easeNone',speed: 0.2}\" > <li class=\"{{#if(tab==1)}}current{{/if(tab==1)}}\" mx-click=\"showTab{tab:1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=db9861233\"> <h2><a href=\"#\" hidefocus=true>网站管理</a></h2> </li> <li class=\"{{#if(tab==3)}}current{{/if(tab==3)}}\" mx-click=\"showTab{tab:3}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d0d62b39f\"> <h2><a href=\"#\" hidefocus=true>APP管理</a></h2> </li> <li class=\"{{#if(tab==4)}}current{{/if(tab==4)}}\" mx-click=\"showTab{tab:4}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dcb387ca2\"> <h2><a href=\"#\" hidefocus=true>导购管理</a></h2> </li> <li class=\"{{#if(tab==5)}}current{{/if(tab==5)}}\" mx-click=\"showTab{tab:5}\" data-spm-click=\"gostr=/tblm.88.1;locaid=db3d829d2\"> <h2><a href=\"#\" hidefocus=true>软件管理</a></h2> </li> </ul> </div> {{/hasPromo}} <vframe id=J_vf_table> <div class=wrap-loading></div> </vframe> </div>");
KISSY.add('app/views/manage/site/site', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    var ViewMap = {
        1: 'app/views/manage/site/site_pc',
        2: 'app/views/manage/site/site_wap',
        3: 'app/views/manage/site/site_app',
        4: 'app/views/manage/site/site_guide',
        5: 'app/views/manage/site/site_software'
    };
    return View.extend({
        init: function (e) {
            var me = this;
            me.observeLocation(['tab']);
            me.on('save', function (ev) {
                Util.hideDialog();
                me.render();
            });
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var params = this.location.params;
            var tab = params.tab || 1;
            var promoData = me.getManaged('promoData');
            if (promoData) {
                setView(promoData);
            } else {
                me.manage(MM.fetchAll([{ name: 'create_promo' }], function (MesModel) {
                    var promoData = MesModel.get('data');
                    me.manage('promoData', promoData);
                    setView(promoData);
                }));
            }
            function setView(promoData) {
                var hasPromo = promoData.hasPromitionMedia;
                me.setViewPagelet({
                    hasPromo: hasPromo,
                    tab: tab
                }, function () {
                    me.mountSubFrame(tab, hasPromo);
                }, function () {
                    me.mountSubFrame(tab, hasPromo);
                });
            }
        },
        mountSubFrame: function (tab, hasPromo) {
            var me = this;
            var viewPath;
            var vframe = VOM.get('J_vf_table');
            var viewOption = {};
            if (hasPromo) {
                viewPath = ViewMap[tab];
            } else {
                viewPath = 'app/views/manage/site/site_create_promo';
                viewOption = { triggerView: me };
            }
            vframe.mountView(viewPath, viewOption);
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