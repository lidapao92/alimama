Magix.tmpl("app/views/promo/taobao/software","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>阿里蒲公英推广</h2> </div> <a href=\"http://rule.alimama.com/#!/announce/business/detail?id=8307063&knowledgeid=13430256\" class=extra-bar target=_blank>阿里蒲公英项目推广合作规范<i class=iconfont-pub>&#xe605;</i></a> </div> <div class=\"promo-intro software-promo-info\"> <div class=\"desc clearfix\"> <div class=cover> <img src=\"//img.alicdn.com/tps/TB1Y8pyLXXXXXbDXpXXXXXXXXXX-400-400.png\"> </div> <div class=intro> <div class=\"mt20 color-gray\"> <p>阿里蒲公英是为各种软件客户端进行流量商业化高效变现的项目。合作伙伴依托各种软件客户端，通过分发阿里妈妈提供的官方程序生成标准推广样式，以推广阿里巴巴集团各营销产品（如爱淘宝、天猫精选、聚划算等）。</p> <p>阿里蒲公英项目允许的标准推广形式包含：桌面图标、任务栏图标、开始菜单图标、右下角弹窗等。</p> <p class=color-red>阿里蒲公英推广有一定的技术门槛，为了保证您的推广收益，建议由技术或测试人员进行后续的操作、配置。</p> </div> </div> </div> <div class=promo> <button class=\"btn btn-blue btn-size30\" mx-click=promo data-spm-click=\"gostr=/tblm.88.1;locaid=d3fb6868d\">立即推广</button> <a href=\"#!/manage/software/list\" data-spm-click=\"gostr=/tblm.88.1;locaid=d3b80dfc9\" class=\"color-blue ml10\">查看我的推广记录</a> </div> </div>");
KISSY.add('app/views/promo/taobao/software', function (S, View, VOM, Router, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        render: function () {
            var me = this;
            me.setViewPagelet();
        },
        events: {
            click: {
                promo: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('.promo-intro').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add_software';
                    var viewOptions = {
                        top: top,
                        triggerView: me
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                }
            }
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