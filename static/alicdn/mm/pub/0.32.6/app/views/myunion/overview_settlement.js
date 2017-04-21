Magix.tmpl("app/views/myunion/overview_settlement","<div class=settlement-info> <table> <tr> <td width=\"35%\" valign=top> <dl class=income-wrap> <dt>昨日预估收入<span class=\"iconfont help\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:300,content:'昨天确认收货的预估收入数据。该收入仅为阿里妈妈过滤前的预估数据展示，非为您的实际收入金额，最终结算金额以月结后您账户内实际收到的金额为准。'}\">&#360;</span></dt> <dd> <span class=money-integer>{{list_yesterdayTotalInteger}}.</span> <span class=money-decimal>{{list_yesterdayTotalDecimal}}</span> <span class=fs12>元</span> </dd> </dl> </td> <td width=\"35%\" valign=top> <dl class=income-wrap> <dt>本月预估收入<span class=\"iconfont help\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:300,content:'一个自然月内，就是当月1号到昨天为止（不包含今日收入）的已经确认收货的预估收入数据。该收入仅为阿里妈妈过滤前的预估数据展示，非为您的实际收入金额，最终结算金额以月结后您账户内实际收到的金额为准。'}\">&#360;</span></dt> <dd> <span class=money-integer>{{list_curMonthTotalInteger}}.</span> <span class=money-decimal>{{list_curMonthTotalDecimal}}</span> <span class=fs12>元</span> </dd> </dl> </td> <td width=\"30%\" valign=top> <dl class=income-wrap> <dt>上月预估收入<span class=\"iconfont help\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'指上一个自然月的预估收入数据。该收入仅为阿里妈妈过滤前的预估数据展示，非为您的实际收入金额，最终结算金额以月结后您账户内实际收到的金额为准。'}\">&#360;</span></dt> <dd> <span class=money-integer>{{list_lastMonthTotalInteger}}.</span> <span class=money-decimal>{{list_lastMonthTotalDecimal}}</span> <span class=fs12>元</span> </dd> </dl> </td> </tr> </table> </div>");
KISSY.add('app/views/myunion/overview_settlement', function (S, Node, View, MM, Util) {
    var $ = Node.all;
    return View.extend({
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([{ name: 'overview_settlement' }], function (MesModel, error) {
                var totalData = MesModel.get('data');
                me.manage('totalData', totalData);
                me.setViewPagelet(totalData);
            }));
        },
        events: {
            click: {
                draw: function (e) {
                    e.halt();
                    var me = e.view;
                    var totalData = me.getManaged('totalData');
                    var top = $('#' + e.currentId).parent('tr').offset().top;
                    if (totalData.isBound == 'false') {
                        Util.showGlobalTip('\u60A8\u8FD8\u6CA1\u6709\u7ED1\u5B9A\u652F\u4ED8\u5B9D\uFF0C\u8BF7\u5148\u7ED1\u5B9A\u652F\u4ED8\u5B9D\uFF01');
                    } else if (!totalData.drawEnable) {
                        Util.showGlobalTip('20\u65E5\u662F\u7ED3\u7B97\u6838\u5BF9\u671F\uFF0C\u8BF7\u572821\u65E5\u518D\u8FDB\u884C\u63D0\u73B0\u64CD\u4F5C\u3002');
                    } else {
                        var dialogConfig = Util.getDefaultDialogConfig({
                            width: 500,
                            top: top
                        });
                        var viewName = 'app/views/myunion/draw';
                        var viewOptions = {
                            balance: totalData.earningMap.lessbalance_earning,
                            callback: function () {
                                me.render();
                            }
                        };
                        Util.showDialog(dialogConfig, viewName, viewOptions);
                    }
                }
            }
        },
        renderer: {
            list: {
                yesterdayTotalInteger: function (self) {
                    var data = Util.formatNumber(this.yesterdayTotal);
                    return data[0];
                },
                yesterdayTotalDecimal: function (self) {
                    var data = Util.formatNumber(this.yesterdayTotal);
                    if (data.length > 1) {
                        return data[1];
                    } else {
                        return '00';
                    }
                },
                curMonthTotalInteger: function (self) {
                    var data = Util.formatNumber(this.curMonthTotal);
                    return data[0];
                },
                curMonthTotalDecimal: function (self) {
                    var data = Util.formatNumber(this.curMonthTotal);
                    if (data.length > 1) {
                        return data[1];
                    } else {
                        return '00';
                    }
                },
                lastMonthTotalInteger: function (self) {
                    var data = Util.formatNumber(this.lastMonthTotal);
                    return data[0];
                },
                lastMonthTotalDecimal: function (self) {
                    var data = Util.formatNumber(this.lastMonthTotal);
                    if (data.length > 1) {
                        return data[1];
                    } else {
                        return '00';
                    }
                },
                lessbalanceInteger: function (self) {
                    if (this.earningMap) {
                        var data = Util.formatNumber(this.earningMap.lessbalance_earning);
                        return data[0];
                    } else {
                        return 0;
                    }
                },
                lessbalanceDecimal: function (self) {
                    if (this.earningMap) {
                        var data = Util.formatNumber(this.earningMap.lessbalance_earning);
                        if (data.length > 1) {
                            return data[1];
                        } else {
                            return '00';
                        }
                    } else {
                        return '00';
                    }
                },
                hasBalance: function (self) {
                    if (this.earningMap) {
                        if (Util.formatNumber(this.earningMap.lessbalance_earning).join('.') == '0') {
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                }
            }
        }
    });
}, {
    requires: [
        'node',
        'mxext/view',
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
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});