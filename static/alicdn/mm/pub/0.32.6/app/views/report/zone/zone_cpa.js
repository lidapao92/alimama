Magix.tmpl("app/views/report/zone/zone_cpa","<div class=\"wrap-hd clearfix\"> <div class=title-bar bx-tmpl=\"top\" bx-datakey=\"canCreate\"> <h2 class=title>额外奖励计划推广</h2> <p class=tip>温馨提示：</br> 1、在自定义字段中的点击数分PC和无线进行了展示，帮助您查验投放平台跟额外奖励规则是否相符。比如针对成交平台为无线的奖励规则，把奖励计划投放到PC平台上，这样PC平台带来的成交效果是不会计入奖励的。</br> 2、除点击数以外的效果指标，仅展示跟额外奖励规则相符的平台带来的效果。比如针对成交平台为无线的奖励规则，除点击数外，其他指标只统计成交平台为无线的效果。</br> 3、预售商品的付款金额是定金，确认收货金额是全款，这样可能出现付款金额小于确认收货金额的情况，对奖励统计无影响。</p> </div> </div> <div class=\"table-container activity-list\" bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div bx-tmpl=\"table\" bx-datakey=\"list,targetFields\"> <div class=table-head-fix> <div class=\"toolbar clearfix\"> <div class=table-settings> <span class=\"btn btn-size25\" mx-click=fields data-spm-click=\"gostr=/tblm.88.1;locaid=d36fbe9cd\" hidefocus=true title=\"自定义字段设置\"><i class=iconfont>&#355;</i>自定义字段</span> </div> </div> <table class=table > <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=\"15%\">计划名称</th> <div> {{#targetFields.campaignPublisherName}} </div> <th class=left>所属平台<i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:100,content:'计划发起方。'}\">&#360;</i></th> {{/targetFields.campaignPublisherName}} {{#targetFields.campaignTime}} <th class=left >计划起止时间 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:190,content:'一个计划的开始和结束时间。订单需要在起止时间内拍下。'}\">&#360;</i></th> {{/targetFields.campaignTime}} {{#targetFields.earningEndTime}} <th class=left >效果统计截止时间 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'买家在该时间内确认收货的订单才会算额外奖励效果，超过了该时间才确认收货的不计入额外奖励效果。'}\">&#360;</i></th> {{/targetFields.earningEndTime}} {{#targetFields.rewardRule}} <th class=left >额外奖励规则 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'1、您推广带来的累计推广笔数或累计推广金额达到某一范围时，则获得对应的奖励金额。若规则是奖励比率，则对应的奖励金额，是有效订单（符合额外奖励范围内订单）的累计确认收货金额 乘以 奖励比率。2、奖励规则可以针对PC、无线分别设置，在PC端拍下的订单对应PC的奖励规则，在无线端拍下的订单对应无线的奖励规则。奖励规则也可以不区分PC、无线，所有订单对应一个奖励规则。'}\">&#360;</i></th> {{/targetFields.rewardRule}} {{#targetFields.clickNum}} <th class=left >点击数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:190,content:'达到页面的点击数'}\">&#360;</i></th> {{/targetFields.clickNum}} {{#targetFields.gmvNum}} <th class=left >拍下笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'推广带来的拍下笔数，含买家付款和未付款订单笔数'}\">&#360;</i></th> {{/targetFields.gmvNum}} {{#targetFields.alipayNum}} <th class=left >付款笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:190,content:'推广带来的付款订单笔数'}\">&#360;</i></th> {{/targetFields.alipayNum}} {{#targetFields.alipayFee}} <th class=left >付款金额（元） <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:190,content:'买家拍下后的付款金额（不包含运费金额）'}\">&#360;</i></th> {{/targetFields.alipayFee}} {{#targetFields.settleNum}} <th class=left >推广笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:190,content:'买家确认收货后的订单数量。'}\">&#360;</i></th> {{/targetFields.settleNum}} {{#targetFields.settleFee}} <th class=left >推广金额（元） <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'买家确认收货后的支付宝金额（不包括邮费）。'}\">&#360;</i></th> {{/targetFields.settleFee}} {{#targetFields.rewardFee}} <th class=left >预估奖励（元） <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'根据推广笔数或推广金额，匹配对应的奖励规则，所计算出来的奖励金额，非最终实际奖励金额。由于是估算数据，是包含了阿里妈妈过滤前的数据，最终奖金金额以月结后您账户内实际收到的为准。月结是在效果统计截止时间所在月份的下个月20日。'}\">&#360;</i></th> {{/targetFields.rewardFee}} </tr> </thead> </table> </div> <table class=table bx-name=\"tables\"> <tbody> {{#list}} <tr> <td class=left width=\"15%\"> {{campaignName}} </td> {{#targetFields.campaignPublisherName}} <td class=left > {{campaignPublisherName}} </td> {{/targetFields.campaignPublisherName}} {{#targetFields.campaignTime}} <td class=left > <p>起：{{list_startTime}}</p> <p>止：{{list_endTime}}</p> </td> {{/targetFields.campaignTime}} {{#targetFields.earningEndTime}} <td class=left > {{list_earningEndTime}} </td> {{/targetFields.earningEndTime}} {{#targetFields.rewardRule}} <td class=left > <p> {{rewardRule}} </p> <p> <a href=\"javascript:;\" mx-mouseover=\"shopinfo_show{campaignId:{{campaignId}},ladderSettingTerminal:{{ladderSettingTerminal}}}\" mx-mouseout=shopinfo_hide class=color-blue>查看规则详情</a> <i class=icon-horn-tilt></i> </p> </td> {{/targetFields.rewardRule}} {{#targetFields.clickNum}} <td class=left > <p>PC: {{pcClick}}</p> <p>无线：{{wirelessClick}}</p> </td> {{/targetFields.clickNum}} {{#targetFields.gmvNum}} <td class=left > {{#if(ladderSettingTerminal==0)}} <p>{{pcGmvNum}}</p> {{/if(ladderSettingTerminal==0)}} {{#if(ladderSettingTerminal==1)}} <p>{{pcGmvNum}}</p> {{/if(ladderSettingTerminal==1)}} {{#if(ladderSettingTerminal==2)}} {{wirelessGmvNum}} {{/if(ladderSettingTerminal==2)}} {{#if(ladderSettingTerminal==3)}} <p>PC：{{pcGmvNum}}</p> <p>无线：{{wirelessGmvNum}}</p> {{/if(ladderSettingTerminal==3)}} </td> {{/targetFields.gmvNum}} {{#targetFields.alipayNum}} <td class=left > {{#if(ladderSettingTerminal==0)}} <p>{{pcAlipayNum}}</p> {{/if(ladderSettingTerminal==0)}} {{#if(ladderSettingTerminal==1)}} <p>{{pcAlipayNum}}</p> {{/if(ladderSettingTerminal==1)}} {{#if(ladderSettingTerminal==2)}} {{wirelessAlipayNum}} {{/if(ladderSettingTerminal==2)}} {{#if(ladderSettingTerminal==3)}} <p>PC：{{pcAlipayNum}}</p> <p>无线：{{wirelessAlipayNum}}</p> {{/if(ladderSettingTerminal==3)}} </td> {{/targetFields.alipayNum}} {{#targetFields.alipayFee}} <td class=left > {{#if(ladderSettingTerminal==0)}} <p>{{list_pcAlipayFee}}</p> {{/if(ladderSettingTerminal==0)}} {{#if(ladderSettingTerminal==1)}} <p>{{list_pcAlipayFee}}</p> {{/if(ladderSettingTerminal==1)}} {{#if(ladderSettingTerminal==2)}} {{list_wirelessAlipayFee}} {{/if(ladderSettingTerminal==2)}} {{#if(ladderSettingTerminal==3)}} <p>PC：{{list_pcAlipayFee}}</p> <p>无线：{{list_wirelessAlipayFee}}</p> {{/if(ladderSettingTerminal==3)}} </td> {{/targetFields.alipayFee}} {{#targetFields.settleNum}} <td class=left > {{#if(ladderSettingTerminal==0)}} <p>{{pcSettleNum}}</p> {{/if(ladderSettingTerminal==0)}} {{#if(ladderSettingTerminal==1)}} <p>{{pcSettleNum}}</p> {{/if(ladderSettingTerminal==1)}} {{#if(ladderSettingTerminal==2)}} {{wirelessSettleNum}} {{/if(ladderSettingTerminal==2)}} {{#if(ladderSettingTerminal==3)}} <p>PC：{{pcSettleNum}}</p> <p>无线：{{wirelessSettleNum}}</p> {{/if(ladderSettingTerminal==3)}} </td> {{/targetFields.settleNum}} {{#targetFields.settleFee}} <td class=left > {{#if(ladderSettingTerminal==0)}} <p>{{list_pcSettleFee}}</p> {{/if(ladderSettingTerminal==0)}} {{#if(ladderSettingTerminal==1)}} <p>{{list_pcSettleFee}}</p> {{/if(ladderSettingTerminal==1)}} {{#if(ladderSettingTerminal==2)}} {{list_wirelessSettleFee}} {{/if(ladderSettingTerminal==2)}} {{#if(ladderSettingTerminal==3)}} <p>PC：{{list_pcSettleFee}}</p> <p>无线：{{list_wirelessSettleFee}}</p> {{/if(ladderSettingTerminal==3)}} </td> {{/targetFields.settleFee}} {{#targetFields.rewardFee}} <td class=left > {{#if(ladderSettingTerminal==0)}} <p>{{list_pcRewardFee}}</p> {{/if(ladderSettingTerminal==0)}} {{#if(ladderSettingTerminal==1)}} <p>{{list_pcRewardFee}}</p> {{/if(ladderSettingTerminal==1)}} {{#if(ladderSettingTerminal==2)}} {{list_wirelessRewardFee}} {{/if(ladderSettingTerminal==2)}} {{#if(ladderSettingTerminal==3)}} <p>PC：{{list_pcRewardFee}}</p> <p>无线：{{list_wirelessRewardFee}}</p> {{/if(ladderSettingTerminal==3)}} </td> {{/targetFields.rewardFee}} </tr> {{/list}} {{^list}} <tr class=none> <td colspan=6>暂无数据</td> </tr> {{/list}} </tbody> </table> </div> {{^if(pageCount==0)}} <div class=tfoot> <div id=J_activity_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[10,40,100],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> {{/if(pageCount==0)}} </div>");
KISSY.add('app/views/report/zone/zone_cpa', function (S, View, VOM, Vframe, Node, MM, Util) {
    var $ = Node.all;
    var addZero = function (num) {
        if (!num)
            return '--';
        num = (num + '').split('.');
        var head = num[0];
        var tail = num[1];
        if (!tail) {
            return head + '.00';
        }
        if (tail.length == 1) {
            tail += '0';
        }
        return head + '.' + tail;
    };
    return View.extend({
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.toPage = params.toPage || 1;
            params.perPageSize = params.perPageSize || 10;
            if (!me.getManaged('sourceFields')) {
                var sourceFields = Util.getSourceFields('cpaTable');
                me.manage('sourceFields', sourceFields);
            } else {
                var sourceFields = me.getManaged('sourceFields');
            }
            var targetFields = Util.getTargetFields(sourceFields);
            me.manage(MM.fetchAll([{
                    name: 'report_zone_cpa',
                    urlParams: params
                }], function (MesModel) {
                var list = MesModel.get('data');
                me.setViewPagelet({
                    list: list.pagelist,
                    params: params,
                    sourceFields: sourceFields,
                    targetFields: targetFields,
                    pageCount: list.paginator.items,
                    pageNo: params.toPage,
                    pageSize: params.perPageSize
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.toPage,
                        pageSize: params.perPageSize,
                        pageCount: list.paginator.items
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
                    me.navigate('toPage=' + ev.index);
                });
                pagination.on('sizeChange', function (ev) {
                    me.navigate('toPage=1&perPageSize=' + ev.size);
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
                        var width = e.params.ladderSettingTerminal == 3 ? 505 : 240;
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
                            judgeCampaign: false
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
                fields: function (e) {
                    var me = e.view;
                    e.halt();
                    var curNode = $('#' + e.currentId);
                    if (curNode.hasClass('btn-disabled')) {
                        return false;
                    }
                    var top = $('#' + e.currentId).parent('.table-settings').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({
                        width: 381,
                        top: top
                    });
                    var viewName = 'app/views/report/fields/fields';
                    var viewOptions = {
                        callback: function (targetFields) {
                            me.manage('targetFields', targetFields);
                            var pagelet = me.getManaged('pagelet');
                            pagelet.setChunkData({ targetFields: targetFields });
                        },
                        sourceFields: me.getManaged('sourceFields'),
                        tableKey: 'cpaTable'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                }
            }
        },
        renderer: {
            list: {
                startTime: function (self) {
                    return this.startTime.split(' ')[0];
                },
                endTime: function (self) {
                    return this.endTime.split(' ')[0];
                },
                earningEndTime: function (self) {
                    return this.earningEndTime.split(' ')[0];
                },
                pcSettleFee: function (self) {
                    return addZero(this.pcSettleFee);
                },
                pcRewardFee: function (self) {
                    return addZero(this.pcRewardFee);
                },
                wirelessSettleFee: function (self) {
                    return addZero(this.wirelessSettleFee);
                },
                wirelessRewardFee: function (self) {
                    return addZero(this.wirelessRewardFee);
                },
                wirelessAlipayFee: function (self) {
                    return addZero(this.wirelessAlipayFee);
                },
                pcAlipayFee: function (self) {
                    return addZero(this.pcAlipayFee);
                },
                fields: function (self) {
                    var sourceFields = {};
                    $.each(this, function (v, k) {
                        sourceFields[v.fieldsKey] = v;
                    });
                    ;
                    return sourceFields;
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