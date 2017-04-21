Magix.tmpl("app/views/report/chart/chart_line","<ul class=\"chart-filter clearfix\" bx-tmpl=\"filter\" bx-datakey=\"filter\"> {{#filter}} <li class=\"filter-{{key}} {{#selected}}selected{{/selected}}\" mx-click=\"filter{index:{{__index__}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d7016dbf7\"> <i></i>{{label}} </li> {{/filter}} </ul> <div class=chart-img id=J_chartContainer></div>");
KISSY.add('app/views/report/chart/chart_line', function (S, View, VOM, Node, MM, Util, BXChart) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            this.manage('chartType', e.chartType);
            this.manage('chartData', e.chartData);
            this._initFilterSelected();
        },
        render: function () {
            var me = this;
            var filter = me._getFilterList();
            me.setViewPagelet({ filter: filter }, function () {
                me._initChart();
            });
        },
        _initFilterSelected: function () {
            var me = this;
            var filterSelected = [
                0,
                1
            ];
            me.manage('filterSelected', filterSelected);
        },
        _initChart: function () {
            var me = this;
            var chart = new BXChart({
                parent_id: 'J_chartContainer',
                path: '',
                config: me._getChartConfig()
            });
            (function () {
                S.later(function () {
                    chart.resize();
                    chart.resize();
                }, 200);
            }());
            me.manage('chart', chart);
        },
        _resetChart: function () {
            var me = this;
            var chart = me.getManaged('chart');
            chart.actions('reset', me._getChartConfig());
        },
        _getFilterList: function () {
            var me = this;
            var chartType = me.getManaged('chartType');
            var filter = [
                {
                    key: 'mixClick',
                    label: '\u70B9\u51FB\u6570',
                    color: 'FF5E0E',
                    index: 1
                },
                {
                    key: 'alipayNum',
                    label: '\u4ED8\u6B3E\u7B14\u6570',
                    color: '5B93FF'
                },
                {
                    key: 'alipayRec',
                    label: '\u6548\u679C\u9884\u4F30',
                    color: '875FD2'
                },
                {
                    key: 'rec',
                    label: '\u9884\u4F30\u6536\u5165',
                    color: 'E1C912'
                }
            ];
            if (chartType && chartType == 'act') {
                filter.unshift({
                    key: 'mixPv',
                    label: '\u5C55\u73B0\u91CF',
                    color: '82A74E'
                });
            }
            var filterSelected = me.getManaged('filterSelected');
            S.each(filterSelected, function (v, k) {
                filter[v].selected = true;
            });
            return filter;
        },
        _getChartConfig: function () {
            var me = this;
            var filter = me._getFilterList();
            var chartData = me.getManaged('chartData');
            var dataX = [];
            var dataY = {};
            var colors = [];
            var _key0, _key1;
            S.each(filter, function (v) {
                if (v.selected) {
                    colors.push('0x' + v.color);
                }
            });
            S.each(chartData, function (item) {
                dataX.push(item.thedate);
                S.each(filter, function (v) {
                    if (v.selected) {
                        _key0 = v.key;
                        _key1 = v.label;
                        if (!dataY[_key1]) {
                            dataY[_key1] = [];
                        }
                        dataY[_key1].push(item[_key0]);
                    }
                });
            });
            dataX = dataX.join(',');
            return {
                configData: me._makeConfigXml('line3', colors.join(',')),
                chartData: me._makeLine3Xml(dataX, dataY)
            };
        },
        _makeConfigXml: function (line, colors) {
            return [
                '<chart v="1.0" type="',
                line,
                '"><data shape="0" node="1" area="0">',
                '<colors normals="',
                colors,
                '" overs="',
                colors,
                '"/>',
                '</data></chart>'
            ].join('');
        },
        _makeLine3Xml: function (labels, sets) {
            var xml = ['<chart>'];
            for (var i in sets) {
                xml.push('<data><indexAxis labels="', labels, '" name=""/>');
                xml.push('<sets name="' + i + '">');
                xml.push('<set values="' + sets[i] + '"/>');
                xml.push('</sets></data>');
            }
            xml.push('</chart>');
            return xml.join('');
        },
        events: {
            click: {
                filter: function (e) {
                    var me = e.view;
                    var curNode = $('#' + e.currentId);
                    var filterIndex = e.params.index;
                    var filterSelected = me.getManaged('filterSelected');
                    var pagelet = me.getManaged('pagelet');
                    if (curNode.hasClass('selected')) {
                        if (filterSelected.length > 1) {
                            S.each(filterSelected, function (v, k) {
                                if (v == filterIndex) {
                                    filterSelected.splice(k, 1);
                                    return false;
                                }
                            });
                        } else {
                            return false;
                        }
                    } else {
                        if (filterSelected.length > 1) {
                            filterSelected.shift();
                            filterSelected.push(filterIndex);
                        } else {
                            filterSelected.push(filterIndex);
                        }
                    }
                    var filter = me._getFilterList();
                    pagelet.setChunkData('filter', filter);
                    me._resetChart();
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
        'brix/gallery/charts/index',
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