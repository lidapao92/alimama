Magix.tmpl("app/views/report/detail/3rdrights","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title> 第三方服务商维权退款订单明细 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:300,content:'用户线上发起维权退款，并成功退款的订单明细。这部分订单产生的收入将不予结算。'}\">&#360;</i> </h2> </div> </div> <div class=table-container> <div class=\"toolbar clearfix\"> <div class=table-settings bx-tmpl=\"download\" bx-datakey=\"searchType,startTime,endTime\"> <a href=\"/report/getNewTbkRefundPaymentDetails.json?refundType=2&searchType={{searchType}}&DownloadID=DOWNLOAD_EXPORT_CPSPAYMENT_REFUND_OVERVIEW&startTime={{startTime}}&endTime={{endTime}}\" class=\"btn btn-size25\" title=\"下载报表\"><i class=iconfont>&#392;</i></a> </div> <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_time_dropdown style=\"width:120px;\" bx-tmpl=\"timeList\" bx-datakey=\"timeList\"> {{#timeList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{timeId}}\">{{timeName}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/timeList}} <ul class=dropdown-list> {{#timeList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{timeId}}\">{{timeName}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/timeList}} </ul> </div> <a href=\"#\" class=\"btn btn-size25\" id=sitemapTimeRange bx-tmpl=\"dateRange\" bx-datakey=\"startTime,endTime\"> {{startTime}} 至 {{endTime}} </a> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=120>淘宝订单编号</th> <th class=left width=120>淘宝子订单编号</th> <th class=left width=90>维权退款金额</th> <th class=left width=70>返还金额<i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:200,content:'返还给卖家的佣金、补贴之和'}\">&#360;</i></th> <th class=left>维权状态<i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:200,content:'维权各状态含义&lt;a href=&quot;http://help.alimama.com/#!/taoke/faq/detail?id=13114133&quot; target=&quot;_blank&quot; class=&quot;color-blue&quot;&gt;点此查看&lt;/a&gt;'}\">&#360;</i></th> <th class=left width=90>订单结算时间</th> <th class=left width=90>维权创建时间</th> <th class=left width=90>维权完成时间</th> </tr> </thead> <tbody> {{#list}} <tr> <td class=left>{{tbTradeParentId}}</td> <td class=left>{{tbTradeId}}</td> <td class=left> {{list_refundFee}} </td> <td class=left> {{list_showReturnFee}} </td> <td class=left> {{#showRefundStatus}} {{showRefundStatus}} {{/showRefundStatus}} {{^showRefundStatus}} -- {{/showRefundStatus}} </td> <td class=left> {{#earningTime}} {{earningTime}} {{/earningTime}} {{^earningTime}} -- {{/earningTime}} </td> <td class=left> {{#refundCreateTime}} {{refundCreateTime}} {{/refundCreateTime}} {{^refundCreateTime}} -- {{/refundCreateTime}} </td> <td class=left> {{#refundFinishTime}} {{refundFinishTime}} {{/refundFinishTime}} {{^refundFinishTime}} -- {{/refundFinishTime}} </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=8>暂无数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_table_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[20,40],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> </div>");
KISSY.add('app/views/report/detail/3rdrights', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('destroy', function () {
                Util.destroyDatePicker();
            });
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var params = me.location.params;
            var startTime = params.startTime;
            var endTime = params.endTime;
            var pageNo = params.pageNo || 1;
            var pageSize = params.pageSize || 20;
            var searchType = params.timeId || 1;
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
                    name: 'report_rights',
                    urlParams: {
                        startTime: Util.dateFormat(startTime),
                        endTime: Util.dateFormat(endTime),
                        refundType: 2,
                        searchType: searchType,
                        toPage: pageNo,
                        perPageSize: pageSize
                    }
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var pageCount = totalData.paginator.items;
                me.setViewPagelet({
                    timeList: me._parseTimeList(),
                    list: totalData.pagelist,
                    startTime: Util.dateFormat(startTime),
                    endTime: Util.dateFormat(endTime),
                    searchType: searchType,
                    pageNo: pageNo,
                    pageSize: pageSize,
                    pageCount: pageCount
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: pageNo,
                        pageSize: pageSize,
                        pageCount: pageCount
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        components: function () {
            var me = this;
            var startTime = me.getManaged('startTime');
            var endTime = me.getManaged('endTime');
            var pagelet = me.getManaged('pagelet');
            Util.createDatePicker({
                trigger: $('#sitemapTimeRange'),
                range: 365,
                startTime: startTime,
                endTime: endTime
            });
            var timeDropdown = pagelet.getBrick('J_time_dropdown');
            timeDropdown.on('selected', function (ev) {
                me.navigate('pageNo=1&timeId=' + ev.value);
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
                if (!S.isEmptyObject(pageparam)) {
                    pagination.setConfig(pageparam);
                }
            }
        },
        _parseTimeList: function () {
            var me = this;
            var loc = me.location;
            var timeId = loc.get('timeId');
            var timeList = [
                {
                    timeId: 1,
                    timeName: '\u7EF4\u6743\u521B\u5EFA\u65F6\u95F4'
                },
                {
                    timeId: 3,
                    timeName: '\u7EF4\u6743\u5B8C\u6210\u65F6\u95F4'
                },
                {
                    timeId: 2,
                    timeName: '\u8BA2\u5355\u7ED3\u7B97\u65F6\u95F4'
                }
            ];
            if (!timeId) {
                timeList[0].selected = true;
            } else {
                S.each(timeList, function (v, k) {
                    if (v.timeId == timeId) {
                        v.selected = true;
                    }
                });
            }
            return timeList;
        },
        renderer: {
            list: {
                refundFee: function (self) {
                    var result = this.refundFee;
                    if (result == null) {
                        return '--';
                    } else {
                        return '\uFFE5' + Util.formatNumber(result).join('.');
                    }
                },
                showReturnFee: function (self) {
                    var result = this.showReturnFee;
                    if (result == null) {
                        return '--';
                    } else {
                        return '\uFFE5' + Util.formatNumber(result).join('.');
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