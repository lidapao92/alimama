Magix.tmpl("app/views/promo/self/links_link","<div class=\"promo-links-panel clearfix\"> <div class=main> <textarea class=textarea placeholder=\"请输入要转换的链接，目前仅支持单个链接的转换\" mx-keydown=\"zone{linkType:0}\" id=J_originUrl></textarea> <div class=promo> <button class=\"btn btn-size25 btn-blue\" mx-click=\"zone{linkType:0}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df37b250c;pvid={{pvid}}&actionid=10\">生成推广链接</button> <span class=tip></span> </div> </div> <div class=side> <h3>支持转换的链接包含：</h3> <ul> <li>1) 淘宝的单品详情页、店铺、店铺活动（<span class=color-red>卖家必须加入淘宝客推广</span>）</li> <li>2) 天猫的单品详情页、店铺、店铺活动（<span class=color-red>卖家必须加入淘宝客推广，天猫活动页、首页等页面不支持</span>）</li> <li>3) 天猫国际的单品详情页（<span class=color-red>卖家必须加入淘宝客推广</span>）</li> <li>4) 淘宝旅行、聚划算、阿里云页面</li> <li>5) 爱淘宝任一个页面，如穿衣搭配、特惠、潮流单品等</li> </ul> </div> </div> <div class=promo-links-quick> <div class=hd>快速链接转换</div> <ul class=list> <li> <a href=\"http://ju.taobao.com/\" target=_blank class=img> <img src=\"http://gtms01.alicdn.com/tps/i1/T1jLbUFnpcXXX.RiYO-158-158.png\" alt=\"\"  /> </a> <p class=color-gray> <a href=\"http://ju.taobao.com/\" target=_blank>聚划算</a> </p> <button class=\"btn btn-blue\" mx-click=\"zone{linkType:link_juhuasuan}\" data-spm-click=\"gostr=/tblm.88.1;locaid=daeac44f9\">立即推广</button> </li> <li> <a href=\"http://trip.taobao.com/\" target=_blank class=img> <img src=\"http://gtms01.alicdn.com/tps/i1/T1vjL2FixXXXX.RiYO-158-158.png\" alt=\"\"  /> </a> <p class=color-gray> <a href=\"http://trip.taobao.com/\" target=_blank>淘宝旅行</a> </p> <button class=\"btn btn-blue\" mx-click=\"zone{linkType:link_travel}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dd426d941\">立即推广</button> </li> </ul> </div>");
KISSY.add('app/views/promo/self/links_link', function (S, View, Node, MM, Util, Tip) {
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
                    var linkType = e.params.linkType;
                    if (linkType == 0) {
                        var originURL = S.trim($('#J_originUrl').val());
                        if (originURL == '') {
                            var tips = S.all('.promo-links-panel .med-tip');
                            if (tips)
                                tips.hide();
                            new Tip('.promo-links-panel .tip', {
                                msg: '\u8BF7\u8F93\u5165URL',
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
                                link: originURL,
                                codeType: 'taobao_linktrans',
                                zoneType: 'self',
                                actionid: 34
                            };
                            Util.showDialog(dialogConfig, viewName, viewOptions);
                        }
                    } else {
                        var top = $('#' + e.currentId).parent('ul').offset().top;
                        var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                        var viewName = 'app/views/manage/zone/zone_add';
                        var viewOptions = {
                            top: top,
                            triggerView: me,
                            event: e,
                            linkType: linkType,
                            codeType: 'taobao_links',
                            zoneType: 'self'
                        };
                        Util.showDialog(dialogConfig, viewName, viewOptions);
                    }
                }
            },
            keydown: {
                zone: function (e) {
                    var me = e.view;
                    if (e.domEvent.keyCode == 13) {
                        me.events.click.zone(e);
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