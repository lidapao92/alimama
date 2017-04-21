Magix.tmpl("app/views/promo/extra/aliyun","<vframe id=magix_vf_aliyun> <div class=wrap-loading></div> </vframe> ");
KISSY.add('app/views/promo/extra/aliyun', function (S, View, VOM, Router, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
        },
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([{ name: 'aliyun_join' }], function (MesModel) {
                var data = MesModel.get('data');
                me.setViewPagelet({}, function () {
                    me.mountSubFrame(data);
                }, function () {
                    me.mountSubFrame(data);
                });
            }));
        },
        mountSubFrame: function (data) {
            var me = this;
            var viewPath;
            var vframe = VOM.get('magix_vf_aliyun');
            var subSource = me.getManaged('subSource');
            if (subSource) {
                viewPath = 'app/views/promo/extra/aliyun_intro';
            } else {
                if (data.joined) {
                    viewPath = 'app/views/promo/extra/aliyun_promo_list';
                } else {
                    viewPath = 'app/views/promo/extra/aliyun_intro';
                }
            }
            var viewOptions = {
                setControlTrue: function () {
                    me.manage('subSource', true);
                    me.render();
                },
                setControlFalse: function () {
                    me.manage('subSource', false);
                    me.render();
                }
            };
            S.mix(viewOptions, data);
            vframe.mountView(viewPath, viewOptions);
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'magix/router',
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
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});