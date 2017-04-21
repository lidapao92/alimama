Magix.tmpl("app/views/manage/act/act_items_download","<div class=\"index-top-wrap clearfix\"> <h3 class=block-index-title> <span class=\"title-logo title-logo-list\"></span> 精选清单 </h3> <div class=bottom-blocks bx-tmpl=\"downAble\" bx-datakey=\"leftSecond,date,list,isShowEmpty,isTwo\"> <div class=\"hy-wrap {{#isTwo}}hy-wrap-two{{/isTwo}}\"> {{#list}} <div class=\"hy-item hy-item-enabled\" {{#__first__}}style=\"border-left: none;\"{{/__first__}} mx-click=\"zone{downloadId:{{downloadId}},eventId:{{eventId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dd0820e5c\"> <div class=img-wrap> <img src=\"{{pic}}\" /> </div> <div class=info-wrap> <h4 class=title style=\"color: {{titleColor}}\">{{title}}</h4> <p class=desc>有效期：即日起至{{endDate}}</p> <button class=\"btn btn-size28\">立即下载</button> </div> </div> {{/list}} {{#isShowEmpty}} <div class=\"hy-item hy-item-empty\"> <img src=\"https://alp.alicdn.com/1478209785168.png\" width=226 /> </div> {{/isShowEmpty}} </div> <div class=\"good-best {{#if(leftSecond==-1)}}c-enabled{{/if(leftSecond==-1)}}\" mx-click=downItem data-spm-click=\"gostr=/tblm.88.1;locaid=d03533719\"> <div class=list-pic> <img src=\"//alp.alicdn.com/1476396414811.png\" width=\"100%\" /> </div> <div class=list-down-area> <div class=list-mid-line></div> {{#if(leftSecond==-1)}} <button class=\"down-btn btn btn-size28\">立即下载</button> {{/if(leftSecond==-1)}} {{^if(leftSecond==-1)}} <button class=\"down-btn btn btn-size28 btn-disabled\" id=J_down_btn>立即下载（{{leftSecond}}）</button> {{/if(leftSecond==-1)}} <p class=info>文档更新于：{{date}}</p> </div> </div> </div> </div> ");
KISSY.add('app/views/manage/act/act_items_download', function (S, View, VOM, Node, JSON, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('destroy', function () {
                clearInterval(me.timer);
            });
        },
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([
                {
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/u_excel_download.html',
                        encode: 'utf-8'
                    }
                },
                { name: 'good_date' }
            ], function (MesModel, DateModel) {
                var list = MesModel.get('data').jsonString;
                var data = DateModel.get('data');
                var info1 = MesModel.get('info');
                var info2 = DateModel.get('info');
                if (info1 && info2 && !info1.ok && !info2.ok) {
                    return;
                }
                if (typeof list == 'string') {
                    list = JSON.parse(list);
                }
                me.manage('date', data);
                list = S.filter(list, function (item) {
                    if (item.isShow)
                        return true;
                    return false;
                });
                me.manage('list', list);
                me.showLeftSecond();
            }));
        },
        _nthChild: function () {
            $('.material-cnt li:nth-child(even)').addClass('nth-child-even');
        },
        showLeftSecond: function (callback) {
            var me = this;
            var downTime = S.Cookie.get('qq-best-goods-down-time');
            var leftSecond = 61;
            var $downBtn = $('#J_down_btn');
            var date = me.getManaged('date');
            var list = me.getManaged('list');
            if (downTime) {
                leftSecond = Math.round((new Date().getTime() - downTime) / 1000);
            }
            if (leftSecond > 60) {
                me.setViewPagelet({
                    date: date,
                    list: list,
                    leftSecond: me.leftSecond = -1,
                    isShowEmpty: list.length < 3 && list.length > 0,
                    isTwo: list.length == 1
                }, function () {
                    me._nthChild();
                });
            } else {
                me.setViewPagelet({
                    date: date,
                    list: list,
                    leftSecond: me.leftSecond = 60 - leftSecond,
                    isShowEmpty: list.length < 3 && list.length > 0,
                    isTwo: list.length == 1
                }, function () {
                    me._nthChild();
                    $downBtn = $('#J_down_btn');
                }, function () {
                    $downBtn = $('#J_down_btn');
                });
                var timer = me.timer = setInterval(function () {
                    leftSecond = leftSecond + 1;
                    if (leftSecond <= 60) {
                        $downBtn.length && $downBtn.text('\u7ACB\u5373\u4E0B\u8F7D\uFF08' + (me.leftSecond = 60 - leftSecond) + '\uFF09');
                    } else {
                        me.setViewPagelet({
                            leftSecond: me.leftSecond = -1,
                            date: date,
                            list: list,
                            isShowEmpty: list.length < 3 && list.length > 0,
                            isTwo: list.length == 1
                        });
                        clearInterval(timer);
                    }
                }, 1000);
            }
        },
        events: {
            click: {
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent().offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        width: 450,
                        triggerView: me,
                        event: e,
                        zoneType: 'self',
                        downloadUrl: '/event/specialEventDataList.json',
                        downloadData: {
                            DownloadID: e.params.downloadId,
                            EventID: e.params.eventId
                        },
                        viewName: 'app/views/manage/zone/zone_download'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                downItem: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    if (me.leftSecond != -1) {
                        return;
                    }
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        width: 400,
                        triggerView: me,
                        event: e,
                        zoneType: 'self',
                        tag: 29,
                        promoType: '29#29',
                        downloadUrl: '/coupon/qq/export.json',
                        notAutoClose: true,
                        viewName: 'app/views/manage/zone/zone_qq_download',
                        downWinDownClose: function () {
                            me.showLeftSecond();
                        }
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                groupDown: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        width: 450,
                        triggerView: me,
                        event: e,
                        zoneType: 'self',
                        isManualClose: true,
                        downloadUrl: '/coupon/boutique/export.json',
                        downloadData: {},
                        viewName: 'app/views/manage/zone/zone_download'
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
        'node',
        'json',
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