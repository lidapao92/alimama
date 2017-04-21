Magix.tmpl("app/views/promo/self/links_keywords","<div class=\"promo-links-panel clearfix\"> <div class=main> <textarea class=textarea placeholder=\"请输入要转换的关键词，多个关键词之间以回车（Enter键）分隔开，最多支持200个关键词\" mx-keydown=\"zone{linkType:0}\" id=J_originUrl></textarea> <div class=promo> <button class=\"btn btn-size25 btn-blue\" mx-click=zone data-spm-click=\"gostr=/tblm.88.1;locaid=d8537eafb;pvid={{pvid}}&actionid=10\">生成推广链接</button> <span class=tip></span> <span class=text-count id=J_urlTextCount bx-name=\"text-count\" bx-path=\"components/text_count/\" bx-config=\"{input:'#J_originUrl',trueLength:false,count:200,countByLine:true}\"></span> </div> </div> <div class=side> <h3>温馨提示</h3> <ul> <li>1) 支持将一个或多个关键词进行转换，获取PC及无线的推广链接。</li> <li>2) 支持批量转换，Excel表格下载。</li> <li>3) 推广链接为爱淘宝的搜索结果页。</li> </ul> </div> </div>");
KISSY.add('app/views/promo/self/links_keywords', function (S, View, Node, MM, Util, Tip) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('prev', function (ev) {
                me.events.click.zone(ev.event);
            });
            me.on('save', function (ev) {
                me.events.click.zone(ev.event);
            });
        },
        render: function () {
            var me = this;
            me.setViewPagelet();
        },
        events: {
            click: {
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var pagelet = me.getManaged('pagelet');
                    var textCount = pagelet.getBrick('J_urlTextCount');
                    var keywords = S.trim($('#J_originUrl').val());
                    if (keywords == '') {
                        var tips = S.all('.promo-links-panel .med-tip');
                        if (tips)
                            tips.hide();
                        new Tip('.promo-links-panel .tip', {
                            msg: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
                            status: 'attention',
                            autoHide: true,
                            close: false,
                            background: true,
                            border: true
                        });
                    } else if (!textCount.isValid()) {
                        var tips = S.all('.promo-links-panel .med-tip');
                        if (tips)
                            tips.hide();
                        new Tip('.promo-links-panel .tip', {
                            msg: '\u6700\u591A\u652F\u6301200\u4E2A\u5173\u952E\u8BCD',
                            status: 'attention',
                            autoHide: true,
                            close: false,
                            background: true,
                            border: true
                        });
                    } else {
                        var top = $('#' + e.currentId).parent('.promo-links-panel').offset().top;
                        var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                        var viewName = 'app/views/manage/zone/zone_add';
                        var viewOptions = {
                            top: top,
                            triggerView: me,
                            event: e,
                            keywords: keywords,
                            codeType: 'self_keywords',
                            zoneType: 'self',
                            actionid: 35
                        };
                        Util.showDialog(dialogConfig, viewName, viewOptions);
                    }
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'node',
        'app/models/modelmanager',
        'app/util/util',
        'components/tip/index',
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
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap',
        'promise',
        'brix/core/brick'
    ]
});