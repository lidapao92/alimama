Magix.tmpl("app/views/promo/act/activity_filter","<div class=\"search-filter magpie-bridge-search-filter\" bx-tmpl=\"params\" bx-datakey=\"params,promotionTypes,eventCats,commissionRanges,eventStatus,highQualityTypes\"> <div class=\"filter-panel filter-panel-fold\" bx-name=\"filter_labels\" bx-path=\"components/filter_labels/\"> <dl> <dt>佣金比率</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> {{#commissionRanges}} <li {{#selected}}class=selected{{/selected}}><a href=\"#\" class=filter-item mx-click=\"cat{code:{{code}},type:commissionRange}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d7eb08d41\" >{{title}}</a></li> {{/commissionRanges}} </ul> <a class=more href=\"#\">更多<i class=\"icon iconfont\">&#405;</i></a> </dd> </dl> </div> <div class=\"filter-panel filter-panel-fold\" bx-name=\"filter_labels\" bx-path=\"components/filter_labels/\"> <dl> <dt>行业类目</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> {{#eventCats}} <li {{#selected}}class=selected{{/selected}}><a href=\"#\" class=filter-item mx-click=\"cat{code:{{code}},type:eventCat}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d6b6c0ff7\" >{{title}}</a></li> {{/eventCats}} </ul> <a class=more href=\"#\">更多<i class=\"icon iconfont\">&#405;</i></a> </dd> </dl> </div> <div class=\"filter-panel filter-panel-fold\" bx-name=\"filter_labels\" bx-path=\"components/filter_labels/\"> <dl> <dt>促销类型</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> {{#promotionTypes}} <li {{#selected}}class=selected{{/selected}}><a href=\"#\" class=filter-item mx-click=\"cat{code:{{code}},type:promotionType}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dad9faf88\">{{title}}</a></li> {{/promotionTypes}} </ul> <a class=more href=\"#\">更多<i class=\"icon iconfont\">&#405;</i></a> </dd> </dl> </div> <div class=filter-panel> <dl> <dt>活动状态</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> {{#eventStatus}} <li {{#selected}}class=selected{{/selected}}><a href=\"#\" class=filter-item mx-click=\"cat{code:{{code}},type:eventStatus}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d1613b94f\" >{{title}}</a> {{#if(code==4)}} <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:250,content:'仅活动起止时间内，享受活动计划佣金；活动开始前或结束后，享受通用计划佣金；'}\">&#360;</i> {{/if(code==4)}} </li> {{/eventStatus}} </ul> </dd> </dl> </div> </div>");
KISSY.add('app/views/promo/act/activity_filter', function (S, View, VOM, Router, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            var promotionType = params.promotionType || -1;
            var eventCat = params.eventCat || -1;
            var commissionRange = params.commissionRange || -1;
            var eventStatus = params.eventStatus || -1;
            var highQuality = params.highQuality || -1;
            var highQualityTypes = [
                {
                    code: '-1',
                    title: '\u5168\u90E8',
                    selected: false
                },
                {
                    code: '1',
                    title: '\u4F18\u8D28\u6D3B\u52A8',
                    selected: false
                }
            ];
            me.manage(MM.fetchAll([{
                    name: 'act_activity_filter',
                    urlParams: params
                }], function (MesModel) {
                var data = MesModel.get('data');
                me.setViewPagelet({
                    params: params,
                    promotionTypes: me._injectData(data.promotionTypes, promotionType),
                    eventCats: me._injectData(data.eventCats, eventCat),
                    commissionRanges: me._injectData(data.commissionRanges, commissionRange),
                    eventStatus: me._injectData(data.eventStatus, eventStatus),
                    highQualityTypes: me._injectData(highQualityTypes, highQuality)
                }, function () {
                }, function () {
                });
            }));
        },
        _injectData: function (data, selectedkey) {
            S.each(data, function (v, k) {
                if (v['code'] == selectedkey) {
                    v['selected'] = true;
                    return false;
                }
            });
            return data;
        },
        events: {
            click: {
                cat: function (e) {
                    e.halt();
                    var type = e.params.type;
                    Router.navigate('toPage=1&' + type + '=' + e.params.code);
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'magix/router',
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
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});