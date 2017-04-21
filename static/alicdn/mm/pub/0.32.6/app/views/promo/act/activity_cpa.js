Magix.tmpl("app/views/promo/act/activity_cpa","<div class=\"wrap-hd clearfix\"> <div class=title-bar bx-tmpl=\"top\" bx-datakey=\"canCreate\"> <h2 class=title>额外奖励计划推广</h2> {{{tmsContent}}} </div> </div> <div class=search-filter bx-tmpl=\"overview\" bx-datakey=\"overview\"> <div class=filter-panel> <dl> <dt>平台</dt> <dd> <ul class=\"cat clearfix\"> {{#overview}} <li {{#selected}}class=selected{{/selected}}><a class=cat-item href=\"#\" mx-click=\"shopType{publisherId:{{publisherId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d3685d187\">{{title}}</a></li> {{/overview}} </ul> </dd> </dl> </div> </div> <div class=\"table-container activity-list\" bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=table-head-fix> <div class=\"toolbar clearfix\"> <div class=table-settings> <div class=search-bar bx-tmpl=\"params\" bx-datakey=\"params\"> <div class=search-input> <input type=text class=input id=q value=\"{{params.campaignName}}\" placeholder=\"请输入计划名称\" bx-name=\"placeholder\" bx-path=\"components/placeholder/\" mx-keydown=search> </div> <a class=\"btn btn-size25\" href=\"javascript:;\" hidefocus=true mx-keydown=\"search{publisherId:{{params.publisherId}}}\" mx-click=\"search{publisherId:{{params.publisherId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dbd06c8c4\" atp=\"{ptype:'activity_seller',ctype:'activity_seller_search'}\">搜索</a> </div> </div> </div> <table class=table bx-tmpl=\"thead\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>计划名称</th> <th class=left width=100>所属平台 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:100,content:'计划发起方。'}\">&#360;</i></th> <th class=left width=120>计划起止时间 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:190,content:'一个计划的开始和结束时间。订单需要在起止时间内拍下。'}\">&#360;</i></th> <th class=left width=120>效果统计截止时间 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:300,content:'买家在该时间内确认收货的订单才会算额外奖励效果，超过了该时间才确认收货的不计入额外奖励效果。'}\">&#360;</i></th> <th class=left width=150>额外奖励规则 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'1、您推广带来的累计推广笔数或累计推广金额达到某一范围时，则获得对应的奖励金额。若规则是奖励比率，则对应的奖励金额，是有效订单（符合额外奖励范围内订单）的累计确认收货金额 乘以 奖励比率。2、奖励规则可以针对PC、无线分别设置，在PC端拍下的订单对应PC的奖励规则，在无线端拍下的订单对应无线的奖励规则。奖励规则也可以不区分PC、无线，所有订单对应一个奖励规则。'}\">&#360;</i></th> <th class=center width=150>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> <td class=left> {{campaignName}} </td> <td class=left width=100> {{publisherName}} </td> <td class=left width=120> <p>起：{{list_startTime}}</p> <p>止：{{list_endTime}}</p> </td> <td class=left width=120> {{list_earningEndTime}} </td> <td class=left width=150 > <p> {{list_ladderSettingTerminal}} </p> <p> <a href=\"javascript:;\" mx-mouseover=\"shopinfo_show{campaignId:{{campaignId}},ladderSettingTerminal:{{ladderSettingTerminal}}}\" mx-mouseout=shopinfo_hide class=color-blue>查看规则详情</a> <i class=icon-horn-tilt></i> </p> </td> <td class=center width=150> <p class=operation> <a mx-click=\"activity{campaignId:{{campaignId}},publisherId:{{publisherId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d11a39b4c\" href=\"javascript:;\" class=color-blue>获取链接</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=6> {{^list_isRealEmpty}}对不起，暂时没有符合您的额外奖励计划，敬请期待！{{/list_isRealEmpty}} {{#list_isRealEmpty}}对不起，找不到相关计划{{/list_isRealEmpty}} </td> </tr> {{/list}} </tbody> </table> {{^if(pageCount==0)}} <div class=tfoot> <div id=J_activity_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[10,40,100],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> {{/if(pageCount==0)}} </div>");
KISSY.add('app/views/promo/act/activity_cpa', function (S, View, VOM, Vframe, Node, MM, Util) {
    var $ = Node.all;
    var ladderSettingTerminalMap = [
        '\u4E0D\u533A\u5206PC\u3001\u65E0\u7EBF\u5E73\u53F0\u5956\u52B1',
        '\u9488\u5BF9\u6210\u4EA4\u5E73\u53F0\u4E3APC\u5956\u52B1',
        '\u9488\u5BF9\u6210\u4EA4\u5E73\u53F0\u4E3A\u65E0\u7EBF\u5956\u52B1',
        'PC\u3001\u65E0\u7EBF\u5E73\u53F0\u5206\u522B\u5956\u52B1'
    ];
    return View.extend({
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.pageNo = params.pageNo || 1;
            params.pageSize = params.pageSize || 10;
            params.publisherType = params.publisherType || 0;
            params.publisherId = params.publisherId || 0;
            me.manage(MM.fetchAll([
                {
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/rgn/alimama/u_activity_cpa_tip.php',
                        encode: 'utf-8'
                    }
                },
                { name: 'extra_overview' },
                {
                    name: 'extra_list',
                    urlParams: params
                }
            ], function (TmsModel, overviewModel, listModel) {
                var tmsContent = TmsModel.get('data').jsonString;
                var overview = overviewModel.get('data').publisherIds;
                var list = listModel.get('data');
                if (params.publisherId) {
                    S.each(overview, function (v, k) {
                        if (v.publisherId == params.publisherId) {
                            v.selected = true;
                        }
                    });
                } else {
                    overview[0].selected = true;
                }
                me.setViewPagelet({
                    tmsContent: tmsContent,
                    overview: overview,
                    list: list.result,
                    params: params,
                    pageCount: list.totalCount,
                    pageNo: params.pageNo,
                    pageSize: params.pageSize
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.pageNo,
                        pageSize: params.pageSize,
                        params: params,
                        pageCount: list.totalCount
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_activity_pagination');
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
            var pagination = pagelet.getBrick('J_activity_pagination');
            Util.resetPage(pagination, params);
        },
        events: {
            mouseover: {
                shopinfo_show: function (e) {
                    var me = e.view;
                    var timer = setTimeout(function () {
                        var curNode = $('#' + e.currentId);
                        var width = e.params.ladderSettingTerminal == 3 ? 505 : 260;
                        var config = {
                            mask: false,
                            width: width,
                            align: {
                                node: curNode,
                                points: [
                                    'br',
                                    'tr'
                                ],
                                offset: [
                                    10,
                                    5
                                ]
                            }
                        };
                        var viewName = 'app/views/promo/self/items_rewardinfo';
                        var viewOptions = {
                            campaignId: e.params.campaignId,
                            judgeCampaign: true
                        };
                        Util.showToolTip(config, viewName, viewOptions);
                    }, 150);
                    me.manage('timer', timer);
                }
            },
            mouseout: {
                shopinfo_hide: function (e) {
                    var me = e.view;
                    var timer = me.getManaged('timer');
                    timer && clearTimeout(timer);
                    Util.hideToolTip();
                }
            },
            click: {
                shopType: function (e) {
                    e.halt();
                    var me = e.view;
                    var publisherId = e.params.publisherId;
                    me.navigate({
                        pageNo: 1,
                        publisherId: publisherId
                    });
                },
                activity: function (e) {
                    e.halt();
                    var me = e.view;
                    var campaignId = e.params.campaignId;
                    var publisherId = e.params.publisherId;
                    var curNode = $('#' + e.currentId);
                    var trParent = curNode.parent('tr')[0];
                    var tbodyParent = curNode.parent('tbody')[0];
                    var trEl = $('#' + 'table-child-tr' + campaignId);
                    var tdEl, vfTd, viewName, viewOptions;
                    if (trEl.length > 0) {
                        if (trEl.hasClass('fold')) {
                            trEl.show();
                            trEl.removeClass('fold');
                        } else {
                            trEl.hide();
                            trEl.addClass('fold');
                        }
                    } else {
                        trEl = tbodyParent.insertRow(trParent.rowIndex + 1);
                        tdEl = trEl.insertCell(0);
                        tdEl.innerHTML = '<div class="wrap-loading"></div>';
                        trEl.className = 'table-child-tr';
                        trEl.id = 'table-child-tr' + campaignId;
                        tdEl.className = 'table-child-td';
                        tdEl.id = 'table-child-td' + campaignId;
                        tdEl.colSpan = trParent.cells.length;
                        vfTd = new Vframe(tdEl.id);
                        VOM.add(vfTd);
                        viewName = 'app/views/promo/act/activity_cpa_sub';
                        viewOptions = {
                            campaignId: campaignId,
                            publisherId: publisherId
                        };
                        vfTd.mountView(viewName, viewOptions);
                    }
                },
                search: function (e) {
                    var me = e.view;
                    var publisherId = e.params.publisherId;
                    var campaignName = $('#q').val();
                    if (!publisherId || publisherId == 'undefined' || publisherId == 'null') {
                        me.navigate('pageNo=1&campaignName=' + campaignName);
                    } else {
                        me.navigate('pageNo=1&publisherId=' + publisherId + '&campaignName=' + campaignName);
                    }
                }
            },
            keydown: {
                search: function (e) {
                    var me = e.view;
                    var publisherId = e.params.publisherId;
                    if (e.domEvent.keyCode == 13) {
                        var campaignName = $('#q').val();
                        if (!publisherId || publisherId == 'undefined' || publisherId == 'null') {
                            me.navigate('pageNo=1&campaignName=' + campaignName);
                        } else {
                            me.navigate('pageNo=1&publisherId=' + publisherId + '&campaignName=' + campaignName);
                        }
                    }
                }
            }
        },
        renderer: {
            list: {
                startTime: function (self) {
                    return this.startTime ? this.startTime.split(' ')[0] : '';
                },
                endTime: function (self) {
                    return this.endTime ? this.endTime.split(' ')[0] : '';
                },
                earningEndTime: function (self) {
                    return this.earningEndTime ? this.earningEndTime.split(' ')[0] : '';
                },
                ladderSettingTerminal: function (self) {
                    return ladderSettingTerminalMap[this.ladderSettingTerminal - 0];
                },
                isRealEmpty: function (self) {
                    return self.location.params.campaignName;
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'magix/vframe',
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
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});