Magix.tmpl("app/views/promo/self/items_hot","<div class=channel-promo-list> <vframe mx-view=\"app/views/manage/act/act_items_download\"> <div class=wrap-loading></div> </vframe> <div class=\"index-middle-wrap clearfix\"> <div class=index-middle> <h3 class=block-index-title><span class=\"title-logo title-logo-good\"></span>行业好货</h3> <ul class=\"middle-contents clearfix\"> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/channel/index.htm?channel=nzjh\" target=_blank> <img src=\"{{channel.nzjh}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/channel/index.htm?channel=muying\" target=_blank> <img src=\"{{channel.muying}}\"> </a> </li> </ul> </div> <div class=\"index-middle index-middle-right\"> <h3 class=block-index-title><span class=\"title-logo title-logo-comission\"></span>高佣精选</h3> <ul class=\"middle-contents clearfix\"> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/channel/index.htm?channel=qqhd\" target=_blank> <img src=\"{{channel.qqhd}}\"> </a> </li> <li class=\"middle-block disabled\"> <img src=\"//img.alicdn.com/tps/TB18MXoMpXXXXXRXVXXXXXXXXXX-586-800.png\"> </li> </ul> </div> </div> <div class=\"index-middle-wrap clearfix\"> <h3 class=block-index-title><span class=\"title-logo title-logo-tb\"></span>淘宝行业市场精选</h3> <ul class=\"middle-contents trade clearfix\"> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=ifs\" target=_blank> <img src=\"{{channel.ifs}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=qbb\" target=_blank> <img src=\"{{channel.qbb}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=hch\" target=_blank> <img src=\"{{channel.hch}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=cdj\" target=_blank> <img src=\"{{channel.cdj}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=jyj\" target=_blank> <img src=\"{{channel.jyj}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=kdc\" target=_blank> <img src=\"{{channel.kdc}}\"> </a> </li> <li class=middle-block> <a href=\"//pub.alimama.com/promo/item/oe_channel/index.htm?channel=diy\" target=_blank> <img src=\"{{channel.diy}}\"> </a> </li> <li class=middle-block-end> <a href=\"javascript:void(0);\"> <img src=\"//img.alicdn.com/tps/TB1IMTTKpXXXXXIXVXXXXXXXXXX-592-236.png\"> </a> </li> </ul> </div> <div class=\"index-bottom wrap\"> <h3 class=block-index-title> <span class=\"title-logo title-logo-recom\"></span> 特惠推荐 </h3> <ul class=\"bottom-blocks clearfix\"> <li class=bottom-item> <a href=\"//pub.alimama.com/promo/item/channel/index.htm?channel=9k9\" target=_blank> <img src=\"{{channel._9k9}}\" alt=\"\"> </a> </li> <li class=bottom-item> <a href=\"//pub.alimama.com/promo/item/channel/index.htm?channel=20k\" target=_blank> <img src=\"{{channel._20k}}\" alt=\"\"> </a> </li> <li class=bottom-item> <a href=\"//pub.alimama.com/promo/item/channel/index.htm?channel=tehui\" target=_blank> <img src=\"{{channel.tehui}}\" alt=\"\"> </a> </li> </ul> </div> </div>");
KISSY.add('app/views/promo/self/items_hot', function (S, Node, View, Router, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function () {
            var me = this;
            me.on('destroy', function () {
                clearInterval(me.timer);
            });
        },
        render: function () {
            var me = this;
            MM.fetchAll([{
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pubplus/index-data.html',
                        encode: 'utf-8'
                    }
                }], function (TmsModel) {
                var data = TmsModel.get('data').jsonString;
                var info = TmsModel.get('info');
                if (info && !info.ok) {
                    return;
                }
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                me.setViewPagelet({ channel: data.channel });
            });
        },
        events: {
            click: {
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        triggerView: me,
                        event: e,
                        codeType: 'double11',
                        zoneType: 'self',
                        hideTipSp: true
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                search: function (e) {
                    e.halt();
                    var q = e.params.q;
                    if (q) {
                        Router.navigate('q=' + encodeURIComponent(q));
                    }
                }
            }
        }
    });
}, {
    requires: [
        'node',
        'mxext/view',
        'magix/router',
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
        'magix/vom',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});