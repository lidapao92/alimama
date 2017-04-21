Magix.tmpl("app/views/report/site/site_table","<div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=table-head-fix> <table class=table bx-tmpl=\"tableFix\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=120>时间</th> <th class=\"left rowspan-next\">媒体名称</th> <th class=left width=120> 点击数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'您选择时间段内的点击数，包含到达商品、店铺页面的点击数等。'}\">&#360;</i> </th> <th class=left width=120> 付款笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,content:'由推广带来的您选择时间段内的付款订单笔数。'}\">&#360;</i> </th> <th class=left width=120> 效果预估 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'由推广带来的您选择时间段内付款产生的效果预估数据，非最终实际收入，其作用是便于您了解效果发展的趋势，由于是估算数据，与实际的结算时间有一段差异，是阿里妈妈过滤前的数据，最终收入金额以月结后您账户内实际收到的为准。'}\">&#360;</i> </th> <th class=left width=120> 预估收入 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'此数据是以您选择时间段内所有买家确认收货的订单计算出的预估收入，非最终实际收入，由于是估算数据，是阿里妈妈过滤前的数据， 最终收入金额以月结后您账户内实际收到的为准。'}\">&#360;</i> </th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> {{#rowspan}} <td class=\"left rowspan\" rowspan=\"{{rowspan}}\" width=120>{{thedate}}</td> {{/rowspan}} <td class=\"left {{#rowspan}}rowspan-next{{/rowspan}}\">{{siteName}}</td> <td class=left width=120>{{mixClick}}</td> <td class=left width=120>{{alipayNum}}</td> <td class=left width=120>￥{{list_alipayRec}}</td> <td class=left width=120>￥{{list_rec}}</td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=1>暂无数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_table_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[20,40],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> </div>");
KISSY.add('app/views/report/site/site_table', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var params = me.location.params;
            var startTime = params.startTime;
            var endTime = params.endTime;
            var siteId = params.siteId || '';
            var pageNo = params.pageNo || 1;
            var pageSize = params.pageSize || 20;
            var gcId = me._getGcId();
            var siteType = me._getSiteType();
            if (startTime && endTime) {
                startTime = Util.dateParse(startTime);
                endTime = Util.dateParse(endTime);
            } else {
                startTime = Util.getRecentlyDate(-7);
                endTime = Util.getRecentlyDate(-1);
            }
            me.manage(MM.fetchAll([{
                    name: 'report_media_table',
                    urlParams: {
                        gcId: gcId,
                        siteType: siteType,
                        siteId: siteId,
                        startTime: Util.dateFormat(startTime),
                        endTime: Util.dateFormat(endTime),
                        pageNo: pageNo,
                        pageSize: pageSize
                    }
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var list = totalData.page.result;
                var pageCount = totalData.page.totalCount;
                for (var i = 0; i < list.length;) {
                    var count = 0;
                    for (var j = i; j < list.length; j++) {
                        if (Util.compareDate(list[i].thedate, list[j].thedate) === 0) {
                            count++;
                        }
                    }
                    list[i]['rowspan'] = count;
                    i += count;
                }
                me.setViewPagelet({
                    list: list,
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
        _getGcId: function () {
            var me = this;
            var params = me.location.params;
            var typeId = params.typeId;
            switch (typeId) {
            case 'allMedias':
                return '';
                break;
            case 'webSites':
                return 0;
                break;
            case 'apps':
                return 7;
                break;
            case 'guides':
                return 8;
                break;
            case 'softs':
                return 7;
                break;
            case 'other':
                return -1;
                break;
            default:
                return '';
            }
        },
        _getSiteType: function () {
            var me = this;
            var params = me.location.params;
            var typeId = params.typeId;
            switch (typeId) {
            case 'apps':
                return 1;
                break;
            case 'softs':
                return 4;
                break;
            default:
                return '';
            }
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
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
        renderer: {
            list: {
                rec: function (self) {
                    return Util.formatNumber(this.rec).join('.');
                },
                alipayRec: function (self) {
                    return Util.formatNumber(this.alipayRec).join('.');
                },
                epc: function (self) {
                    var rec = parseInt(this.rec);
                    var mixClick = parseInt(this.mixClick);
                    if (mixClick == 0) {
                        return '--';
                    } else {
                        return '\uFFE5' + Util.formatNumber(rec / mixClick * 100).join('.');
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