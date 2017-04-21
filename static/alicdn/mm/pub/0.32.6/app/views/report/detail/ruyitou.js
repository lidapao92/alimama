Magix.tmpl("app/views/report/detail/ruyitou","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title> 如意投推广订单明细 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:300,content:'如意投通过智能化引擎获取卖家如意投计划商品进行精准投放，无须推广者一对一进行选品，快速便捷进行产品推广。推广者可以通过组件推广中的“人群定向”组件、搜索组件、关键词组件等，“爱淘宝单品推广页面”、“爱淘宝”（搜索以及首页文字链进入的展现结果），都可以进行如意投产品的推广。'}\">&#360;</i> </h2> <div class=tip> <p class=mb10>1、年货节期间订单使用红包或购物券后佣金将支付给红包推广者。如您的订单未在明细报表显示，请检查是否使用红包或购物券。<a class=color-blue href=\"http://pub.alimama.com/myunion.htm#!/promo/taobao/coupon\" target=_blank>红包推广是什么？</a></p> <p>2、为了配合红包的推广，淘宝客的各明细报表已于<span class=color-red>10.16号</span>进行升级。<span class=color-red>升级后的推广明细会延迟到订单付款后显示。</span>请知悉</p> </div> </div> </div> <div class=table-container> <div class=\"toolbar clearfix\"> <div class=table-settings bx-tmpl=\"download\" bx-datakey=\"timeId,payId,startTime,endTime\"> <a href=\"/report/getElitePaymentDetails.json?queryType={{timeId}}&payStatus={{payId}}&DownloadID=DOWNLOAD_REPORT_ELITE&startTime={{startTime}}&endTime={{endTime}}\" class=\"btn btn-size25\" title=\"下载报表\"><i class=iconfont>&#392;</i></a> </div> <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_pay_dropdown style=\"width:100px;\" bx-tmpl=\"payList\" bx-datakey=\"payList\"> {{#payList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{payId}}\">{{payName}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/payList}} <ul class=dropdown-list> {{#payList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{payId}}\">{{payName}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/payList}} </ul> </div> <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_time_dropdown style=\"width:100px;\"> {{#timeList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{timeId}}\">{{timeName}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/timeList}} <ul class=dropdown-list> {{#timeList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{timeId}}\">{{timeName}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/timeList}} </ul> </div> <a href=\"#\" class=\"btn btn-size25\" id=sitemapTimeRange bx-tmpl=\"dateRange\" bx-datakey=\"startTime,endTime\"> {{startTime}} 至 {{endTime}} </a> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=70>创建时间</th> <th class=left >订单编号</th> <th class=left width=60>订单状态</th> <th class=left width=80>效果预估<i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'以买家付款金额为基数，预估您可能获得的收入。因买家退款等原因，可能与预估收入不一致。'}\">&#360;</i></th> <th class=left width=70>结算时间</th> <th class=left width=70>预估收入<i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'以买家确认收货时的付款金额为基数，预估您可能获得的收入。因买家退款、您违规推广等原因，可能与您最终收入不一致。最终收入以月结后您实际收到的为准。'}\">&#360;</i></th> <th class=left width=80>成交平台<i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'买家下单付款的平台'}\">&#360;</i></th> </tr> </thead> <tbody> {{#list}} <tr> <td class=\"left {{#if(timeId==5)}}sort{{/if(timeId==5)}}{{^timeId}}sort{{/timeId}}\">{{createTime}}</td> <td class=left> {{taobaoTradeParentId}} </td> <td class=left>{{{list_payStatus}}}</td> <td class=left>{{list_fee}}</td> <td class=left> {{#earningTime}} {{earningTime}} {{/earningTime}} {{^earningTime}} -- {{/earningTime}} </td> <td class=left>{{list_tkPubShareFee}}</td> <td class=left>{{terminalType}}</td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=7>暂无数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_table_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[20],hascount:{{hasCount}},simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false,step:5}\"> </div> </div> </div>");
KISSY.add('app/views/report/detail/ruyitou', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('destroy', function () {
                Util.destroyDatePicker();
            });
        },
        locationChange: function (e) {
            var changed = e.changed;
            if (changed.isParam('startTime,endTime,payId,timeId,pageSize')) {
                this.manage('hascount', false);
            }
            this.render();
        },
        render: function () {
            var me = this;
            var params = me.location.params;
            var startTime = params.startTime;
            var endTime = params.endTime;
            var payId = params.payId || '';
            var timeId = params.timeId || 5;
            var pageNo = params.pageNo || 1;
            var pageSize = params.pageSize || 20;
            var pageCount = me.getManaged('pageCount');
            var hascount = me.getManaged('hascount');
            if (startTime && endTime) {
                startTime = Util.dateParse(startTime);
                endTime = Util.dateParse(endTime);
            } else {
                startTime = Util.getRecentlyDate(-6);
                endTime = Util.getRecentlyDate(0);
            }
            me.manage('startTime', startTime);
            me.manage('endTime', endTime);
            me.manage(MM.fetchAll([{
                    name: 'report_ruyitou',
                    urlParams: {
                        startTime: Util.dateFormat(startTime),
                        endTime: Util.dateFormat(endTime),
                        payStatus: payId,
                        queryType: timeId,
                        toPage: pageNo,
                        perPageSize: pageSize,
                        total: hascount ? pageCount : ''
                    }
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var pageCount = totalData.paginator.items;
                var hasCount = totalData.hascount;
                me.manage('pageCount', pageCount);
                me.manage('hascount', hasCount);
                S.each(totalData.paymentList, function (v, k) {
                    if (!v.timeId) {
                        v.timeId = timeId;
                    }
                });
                me.setViewPagelet({
                    list: totalData.paymentList,
                    payId: payId,
                    timeId: timeId,
                    payList: me._wrapPayList(),
                    timeList: me._wrapTimeList(),
                    startTime: Util.dateFormat(startTime),
                    endTime: Util.dateFormat(endTime),
                    pageNo: pageNo,
                    pageSize: pageSize,
                    pageCount: pageCount,
                    hasCount: hasCount
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: pageNo,
                        pageSize: pageSize,
                        pageCount: pageCount,
                        hascount: hasCount
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        _wrapPayList: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var timeId = params.timeId;
            var payList = [
                {
                    payId: '',
                    payName: '\u5168\u90E8\u8BA2\u5355'
                },
                {
                    payId: 3,
                    payName: '\u8BA2\u5355\u7ED3\u7B97'
                },
                {
                    payId: 12,
                    payName: '\u8BA2\u5355\u4ED8\u6B3E'
                },
                {
                    payId: 13,
                    payName: '\u8BA2\u5355\u5931\u6548'
                },
                {
                    payId: 14,
                    payName: '\u8BA2\u5355\u6210\u529F'
                }
            ];
            if (timeId && timeId == 6) {
                payList = [{
                        payId: 3,
                        payName: '\u8BA2\u5355\u7ED3\u7B97'
                    }];
            }
            if (!params.payId) {
                payList[0].selected = true;
            } else {
                S.each(payList, function (v, k) {
                    if (v.payId == params.payId) {
                        v.selected = true;
                    }
                });
            }
            return payList;
        },
        _wrapTimeList: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var timeList = [
                {
                    timeId: 5,
                    timeName: '\u521B\u5EFA\u65F6\u95F4'
                },
                {
                    timeId: 6,
                    timeName: '\u7ED3\u7B97\u65F6\u95F4'
                }
            ];
            if (!params.timeId) {
                timeList[0].selected = true;
            } else {
                S.each(timeList, function (v, k) {
                    if (v.timeId == params.timeId) {
                        v.selected = true;
                    }
                });
            }
            return timeList;
        },
        components: function () {
            var me = this;
            var startTime = me.getManaged('startTime');
            var endTime = me.getManaged('endTime');
            var pagelet = me.getManaged('pagelet');
            Util.createDatePicker({
                trigger: $('#sitemapTimeRange'),
                range: 90,
                startTime: startTime,
                endTime: endTime
            });
            var payDropdown = pagelet.getBrick('J_pay_dropdown');
            payDropdown.on('selected', function (ev) {
                me.navigate('pageNo=1&payId=' + ev.value);
            });
            var timeDropdown = pagelet.getBrick('J_time_dropdown');
            timeDropdown.on('selected', function (ev) {
                if (ev.value != 6) {
                    me.navigate('pageNo=1&payId=&timeId=' + ev.value);
                } else {
                    me.navigate('pageNo=1&payId=3&timeId=' + ev.value);
                }
            });
            var pagination = pagelet.getBrick('J_table_pagination');
            if (pagination) {
                pagination.on('gotoPage', function (ev) {
                    me.navigate('pageNo=' + ev.index);
                });
                pagination.on('sizeChange', function (ev) {
                    me.navigate('pageNo=1&pageSize=' + ev.size);
                });
            }
        },
        resetPage: function (params) {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_table_pagination');
            var pageparam = {};
            if (pagination) {
                if (pagination.get('index') != params.pageNo) {
                    pageparam['index'] = params.pageNo;
                }
                if (pagination.get('size') != params.pageSize) {
                    pageparam['size'] = params.pageSize;
                }
                if (pagination.get('count') != params.pageCount) {
                    pageparam['count'] = params.pageCount;
                }
                if (pagination.get('hascount') !== params.hascount) {
                    pageparam['hascount'] = params.hascount;
                }
                if (!S.isEmptyObject(pageparam)) {
                    pagination.setConfig(pageparam);
                }
            }
        },
        renderer: {
            list: {
                payPrice: function (self) {
                    return Util.formatNumber(this.payPrice).join('.');
                },
                payStatus: function (self) {
                    switch (this.payStatus) {
                    case 3:
                        return '<span class="color-green">\u8BA2\u5355\u7ED3\u7B97</span>';
                        break;
                    case 11:
                        return '<span>\u8BA2\u5355\u521B\u5EFA</span>';
                        break;
                    case 12:
                        return '<span class="color-green">\u8BA2\u5355\u4ED8\u6B3E</span>';
                        break;
                    case 13:
                        return '<span class="color-red">\u8BA2\u5355\u5931\u6548</span>';
                        break;
                    case 14:
                        return '<span class="color-green">\u8BA2\u5355\u6210\u529F</span>';
                        break;
                    default:
                        return '\u5176\u5B83';
                    }
                },
                fee: function (self) {
                    var result = this.feeString;
                    if (result == '0') {
                        return '--';
                    } else {
                        return '\uFFE5' + result;
                    }
                },
                tkPubShareFee: function (self) {
                    var result = this.tkPubShareFeeString;
                    if (result == '0') {
                        return '--';
                    } else {
                        return '\uFFE5' + result;
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