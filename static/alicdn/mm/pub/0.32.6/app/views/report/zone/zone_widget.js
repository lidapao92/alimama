Magix.tmpl("app/views/report/zone/zone_widget","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>组件推广</h2> </div> </div> <div class=table-container> <div class=\"toolbar z-index-2 clearfix\"> <div class=table-settings bx-name=\"chart_toggle\" bx-path=\"components/chart_toggle/\"> <a href=\"#\" class=\"btn btn-size25 btn-active chart-toggle\"><i class=iconfont>&#254;</i></a> <span bx-tmpl=\"download\" bx-datakey=\"adzoneId,startTime,endTime\"> <a href=\"/report/zujianRpt.json?DownloadID=DOWNLOAD_REPORT_REBORN_DETAIL&adzoneId={{adzoneId}}&startTime={{startTime}}&endTime={{endTime}}\" class=\"btn btn-size25\" title=\"下载报表\"><i class=iconfont>&#392;</i></a> </span> </div> <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_zone_dropdown style=\"width:180px;\" bx-tmpl=\"zoneList\" bx-datakey=\"zoneList\"> {{#zoneList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{id}}\">{{name}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/zoneList}} <ul class=dropdown-list style=\"max-height:300px;\"> {{#zoneList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\" title=\"{{name}}\"><span value=\"{{id}}\">{{name}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/zoneList}} </ul> </div> <a href=\"#\" class=\"btn btn-size25\" id=sitemapTimeRange bx-tmpl=\"dateRange\" bx-datakey=\"startTime,endTime\"> {{startTime}} 至 {{endTime}} </a> </div> <table class=\"table report-count\" bx-tmpl=\"countData\" bx-datakey=\"countData\"> <tbody> <tr> {{#countData}} <td class=\"center {{#__last__}}last{{/__last__}}\" width=\"25%\"> <dl> <dt> {{label}} <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:{{#__last__}}['tr','br']{{/__last__}}{{^__last__}}['tl','bl']{{/__last__}}},mouseDelay:0.2,width:300,content:'{{tip}}'}\">&#360;</i> </dt> <dd><strong class=fontsize-18>{{value}}</strong></dd> </dl> </td> {{/countData}} </tr> </tbody> </table> <div class=chart-container> <vframe id=magix_vf_chartView> <div class=wrap-loading></div> </vframe> </div> <vframe id=magix_vf_tableView> <div class=wrap-loading></div> </vframe> </div>");
KISSY.add('app/views/report/zone/zone_widget', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.observeLocation([
                'adzoneId',
                'startTime',
                'endTime'
            ]);
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
            var adzoneId = params.adzoneId || '';
            if (startTime && endTime) {
                startTime = Util.dateParse(startTime);
                endTime = Util.dateParse(endTime);
            } else {
                startTime = Util.getRecentlyDate(-7);
                endTime = Util.getRecentlyDate(-1);
            }
            me.manage('startTime', startTime);
            me.manage('endTime', endTime);
            me.manage(MM.fetchAll([{
                    name: 'report_zone_widget',
                    urlParams: {
                        adzoneId: adzoneId,
                        startTime: Util.dateFormat(startTime),
                        endTime: Util.dateFormat(endTime)
                    }
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                me.manage('totalData', totalData);
                me.setViewPagelet({
                    adzoneId: adzoneId,
                    countData: me._parseCountData(),
                    zoneList: me._parseZoneList(),
                    startTime: Util.dateFormat(startTime),
                    endTime: Util.dateFormat(endTime)
                }, function () {
                    me.components();
                }, function () {
                    me._initChart();
                });
            }));
        },
        _parseCountData: function (data) {
            var totalData = this.getManaged('totalData');
            var countMap = totalData.countMap;
            var countData = [
                {
                    label: Util.getReportTip('mixClick').label,
                    tip: Util.getReportTip('mixClick').tip,
                    value: countMap.totalMixClick
                },
                {
                    label: Util.getReportTip('alipayNum').label,
                    tip: Util.getReportTip('alipayNum').tip,
                    value: countMap.totalAlipayNum
                },
                {
                    label: Util.getReportTip('alipayRec').label,
                    tip: Util.getReportTip('alipayRec').tip,
                    value: Util.formatNumber(countMap.totalAlipayRec).join('.')
                },
                {
                    label: Util.getReportTip('rec').label,
                    tip: Util.getReportTip('rec').tip,
                    value: Util.formatNumber(countMap.totalRec).join('.')
                }
            ];
            return countData;
        },
        _parseZoneList: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var totalData = me.getManaged('totalData');
            var zoneList = totalData.vAdzones;
            zoneList.unshift({
                id: '',
                name: '\u6240\u6709\u63A8\u5E7F\u4F4D'
            });
            if (!params.adzoneId) {
                zoneList[0].selected = true;
            } else {
                S.each(zoneList, function (v, k) {
                    if (v.id == params.adzoneId) {
                        v.selected = true;
                    }
                });
            }
            return zoneList;
        },
        components: function () {
            var me = this;
            var startTime = me.getManaged('startTime');
            var endTime = me.getManaged('endTime');
            var pagelet = me.getManaged('pagelet');
            Util.createDatePicker({
                trigger: $('#sitemapTimeRange'),
                startTime: startTime,
                endTime: endTime
            });
            var zoneDropdown = pagelet.getBrick('J_zone_dropdown');
            zoneDropdown.on('selected', function (ev) {
                me.navigate('pageNo=1&adzoneId=' + ev.value);
            });
            me._initChart();
            me._initTable();
        },
        _initChart: function () {
            var me = this;
            var totalData = me.getManaged('totalData');
            var chartData = totalData.datas;
            var vframe = VOM.get('magix_vf_chartView');
            var viewName = 'app/views/report/chart/chart_line';
            var viewOptions = { chartData: chartData };
            vframe.mountView(viewName, viewOptions);
        },
        _initTable: function () {
            var me = this;
            var vframe = VOM.get('magix_vf_tableView');
            var viewName = 'app/views/report/zone/zone_table';
            var viewOptions = { type: 'widget' };
            vframe.mountView(viewName, viewOptions);
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