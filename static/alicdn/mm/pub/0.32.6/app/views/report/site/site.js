Magix.tmpl("app/views/report/site/site","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>媒体效果</h2> </div> </div> <div class=table-container> <div class=\"toolbar z-index-2 clearfix\"> <div class=table-settings bx-name=\"chart_toggle\" bx-path=\"components/chart_toggle/\"> <a href=\"#\" class=\"btn btn-size25 btn-active chart-toggle\"><i class=iconfont>&#254;</i></a> <span bx-tmpl=\"download\" bx-datakey=\"gcId,siteType,siteId,startTime,endTime\"> <a href=\"/report/mediaRpt.json?gcId={{gcId}}&siteType={{siteType}}&siteId={{siteId}}&DownloadID=DOWNLOAD_REPORT_REBORN_SITE&startTime={{startTime}}&endTime={{endTime}}\" class=\"btn btn-size25\" title=\"下载报表\"><i class=iconfont>&#392;</i></a> </span> </div> <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_type_dropdown style=\"width:100px;\"> {{#siteTypeList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{id}}\">{{name}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/siteTypeList}} <ul class=dropdown-list> {{#siteTypeList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{id}}\">{{name}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/siteTypeList}} </ul> </div> <div bx-name=\"dropdown\" bx-tmpl=\"siteList\" bx-datakey=\"siteList\" class=dropdown hidefocus=true id=J_site_dropdown style=\"width:150px;\"> {{#siteList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{id}}\">{{name}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/siteList}} <ul class=dropdown-list style=\"max-height:300px;\"> {{#siteList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\" title=\"{{name}}\"><span value=\"{{id}}\">{{name}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/siteList}} </ul> </div> <a href=\"#\" class=\"btn btn-size25\" id=sitemapTimeRange bx-tmpl=\"dateRange\" bx-datakey=\"startTime,endTime\"> {{startTime}} 至 {{endTime}} </a> </div> <table class=\"table report-count\" bx-tmpl=\"countData\" bx-datakey=\"countData\"> <tbody> <tr> {{#countData}} <td class=\"center {{#__last__}}last{{/__last__}}\" width=\"25%\"> <dl> <dt> {{label}} <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:{{#__last__}}['tr','br']{{/__last__}}{{^__last__}}['tl','bl']{{/__last__}}},mouseDelay:0.2,width:300,content:'{{tip}}'}\">&#360;</i> </dt> <dd><strong class=fontsize-18>{{value}}</strong></dd> </dl> </td> {{/countData}} </tr> </tbody> </table> <div class=chart-container> <vframe id=magix_vf_chartView> <div class=wrap-loading></div> </vframe> </div> <vframe mx-view=\"app/views/report/site/site_table\"> <div class=wrap-loading></div> </vframe> </div>");
KISSY.add('app/views/report/site/site', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.observeLocation([
                'typeId',
                'siteId',
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
            var siteId = params.siteId || '';
            var gcId = me._getGcId();
            var siteType = me._getSiteType();
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
                    name: 'report_media',
                    urlParams: {
                        gcId: gcId,
                        siteType: siteType,
                        siteId: siteId,
                        startTime: Util.dateFormat(startTime),
                        endTime: Util.dateFormat(endTime)
                    }
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                me.manage('totalData', totalData);
                me.setViewPagelet({
                    gcId: gcId,
                    siteType: siteType,
                    siteId: siteId,
                    countData: me._parseCountData(),
                    siteTypeList: me._parseSiteTypeList(),
                    siteList: me._parseSiteList(),
                    startTime: Util.dateFormat(startTime),
                    endTime: Util.dateFormat(endTime)
                }, function () {
                    me.components();
                }, function () {
                    me._initChart();
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
        _parseSiteTypeList: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var siteTypeList = [
                {
                    id: 'allMedias',
                    name: '\u6240\u6709\u7C7B\u578B'
                },
                {
                    id: 'webSites',
                    name: '\u7F51\u7AD9'
                },
                {
                    id: 'apps',
                    name: 'APP'
                },
                {
                    id: 'guides',
                    name: '\u5BFC\u8D2D'
                },
                {
                    id: 'softs',
                    name: '\u8F6F\u4EF6'
                },
                {
                    id: 'other',
                    name: '\u5176\u4ED6'
                }
            ];
            if (!params.typeId) {
                siteTypeList[0].selected = true;
                me.manage('typeId', siteTypeList[0].id);
            } else {
                S.each(siteTypeList, function (v, k) {
                    if (v.id == params.typeId) {
                        v.selected = true;
                        me.manage('typeId', v.id);
                        return false;
                    }
                });
            }
            return siteTypeList;
        },
        _parseSiteList: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var totalData = me.getManaged('totalData');
            var typeId = me.getManaged('typeId');
            var siteList = totalData[typeId] || [];
            var defaultSiteName;
            switch (typeId) {
            case 'allMedias':
                defaultSiteName = '\u6240\u6709\u5A92\u4F53';
                break;
            case 'webSites':
                defaultSiteName = '\u6240\u6709\u7F51\u7AD9';
                break;
            case 'apps':
                defaultSiteName = '\u6240\u6709APP';
                break;
            case 'guides':
                defaultSiteName = '\u6240\u6709\u5BFC\u8D2D';
                break;
            case 'softs':
                defaultSiteName = '\u6240\u6709\u8F6F\u4EF6';
                break;
            case 'other':
                defaultSiteName = '\u6240\u6709\u5A92\u4F53';
                break;
            default:
                defaultSiteName = '\u6240\u6709\u5A92\u4F53';
            }
            siteList.unshift({
                id: '',
                name: defaultSiteName
            });
            if (!params.siteId) {
                siteList[0].selected = true;
            } else {
                S.each(siteList, function (v, k) {
                    if (v.id == params.siteId) {
                        v.selected = true;
                        return false;
                    }
                });
            }
            return siteList;
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
            var typeDropdown = pagelet.getBrick('J_type_dropdown');
            typeDropdown.on('selected', function (ev) {
                me.navigate('pageNo=1&siteId=&typeId=' + ev.value);
            });
            var siteDropdown = pagelet.getBrick('J_site_dropdown');
            siteDropdown.on('selected', function (ev) {
                me.navigate('pageNo=1&siteId=' + ev.value);
            });
            me._initChart();
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
        renderer: {
            countData: {
                totalRec: function (self) {
                    return Util.formatNumber(this.totalRec).join('.');
                },
                totalAlipayRec: function (self) {
                    return Util.formatNumber(this.totalAlipayRec).join('.');
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