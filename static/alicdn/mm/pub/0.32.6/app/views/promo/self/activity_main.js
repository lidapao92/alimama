Magix.tmpl("app/views/promo/self/activity_main","<div class=filter-container bx-tmpl=\"filter\" bx-datakey=\"params\"> <div class=\"search-filter magpie-bridge-search-filter\"> {{#params}} <div class=filter-panel> <dl> <dt>活动来源</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> <li {{#if(invokerType==0)}}class=selected{{/if(invokerType==0)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:0,type:invoker}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d1aa434b3\">全部</a></li> <li {{#if(invokerType==2)}}class=selected{{/if(invokerType==2)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:2,type:invoker}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d4d596654\">淘宝</a></li> <li {{#if(invokerType==1)}}class=selected{{/if(invokerType==1)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:1,type:invoker}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d061a9639\">天猫</a></li> <li {{#if(invokerType==3)}}class=selected{{/if(invokerType==3)}}> <a href=\"#\" class=filter-item mx-click=\"cat{code:3,type:invoker}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d13b5f761\">大跨店</a> <i class=\"iconfont color-gray cursor-pointer fontsize-13\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,width:300,content:'活动内同时包含天猫、淘宝商品。跨店结算权限不受平台范围限制，即用户从淘宝到天猫、或从天猫到淘宝仍支持活动范围内商家的跨店跟踪'}\">&#360;</i> </li> </ul> </dd> </dl> </div> <div class=filter-panel> <dl> <dt>投放平台</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> <li {{#if(platformType==0)}}class=selected{{/if(platformType==0)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:0,type:platform}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d62f98f8b\">全部</a></li> <li {{#if(platformType==1)}}class=selected{{/if(platformType==1)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:1,type:platform}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dfe948bd3\">PC</a></li> <li {{#if(platformType==2)}}class=selected{{/if(platformType==2)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:2,type:platform}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d5ddacc16\">无线</a></li> </ul> </dd> </dl> </div> <div class=filter-panel> <dl> <dt>活动期限</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> <li {{#if(periodType==0)}}class=selected{{/if(periodType==0)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:0,type:period}\" data-spm-click=\"gostr=/tblm.88.1;locaid=ddd4fabb2\">全部</a></li> <li {{#if(periodType==1)}}class=selected{{/if(periodType==1)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:1,type:period}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d42bdeb85\">短期</a></li> <li {{#if(periodType==2)}}class=selected{{/if(periodType==2)}}><a href=\"#\" class=filter-item mx-click=\"cat{code:2,type:period}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d04994e09\">长期</a></li> </ul> </dd> </dl> </div> {{/params}} </div> </div> <div class=table-head-fix> <div class=\"toolbar clearfix\" bx-tmpl=\"params\" bx-datakey=\"params\"> {{#params}} <div class=table-settings> <div class=search-bar> <div class=search-input> <input type=text class=input id=q value=\"{{keyword}}\" placeholder=\"请输入活动名称\" bx-name=\"placeholder\" bx-path=\"components/placeholder/\" mx-keydown=search> </div> <a class=\"btn btn-size25\" href=\"javascript:;\" hidefocus=true mx-keydown=search mx-click=search data-spm-click=\"gostr=/tblm.88.1;locaid=dbc544a73\">搜索</a> </div> </div> <span class=btn-group> <a title=\"按照活动页面开始时间倒序排列\" href=\"javascript:;\" class=\"btn btn-size25 {{#if(orderWay==2)}}btn-selected{{/if(orderWay==2)}}\" mx-click=\"cat{code:2,type:orderWay}\" data-spm-click=\"gostr=/tblm.88.1;locaid=de1c3bf9b\">最新</a><a title=\"按照活动页面单pv预估收益倒序排列\" href=\"javascript:;\" class=\"btn btn-size25 {{#if(orderWay==1)}}btn-selected{{/if(orderWay==1)}}\" mx-click=\"cat{code:1,type:orderWay}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d8c5ad0c0\">最热</a> </span> {{/params}} </div> <table class=table bx-tmpl=\"title\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>活动信息</th> <th class=left width=70>投放平台</th> <th class=left width=110>平均佣金比率 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'活动页面带来的所有被拍下商品的平均佣金比率'}\">&#360;</i></th> <th class=left width=100>活动时间</th> <th class=center width=110>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" id=J_act_table bx-tmpl=\"table\" bx-datakey=\"list\"> <tbody> {{#list}} <tr eventId=\"{{eventId}}\"> <td class=left> <div class=list-group> <a href=\"{{pageUrl}}\" class=img target=_blank mx-mouseover=\"preview_show{img:{{bannerUrl}}}\" mx-mouseout=preview_hide><img src=\"{{bannerUrl}}\"></a> <ul class=attr> <li class=title > <a href=\"{{pageUrl}}\" title=\"{{pageName}}\" target=_blank>{{pageName}}</a> </li> <li><span class=color-grey>平台：</span>{{platformName}}</li> </ul> </div> </td> <td class=left width=70>{{list_platformType}}</td> <td class=left width=110><span class=color-green>{{list_avgCommissionRate}}</span></td> <td class=left width=100> <p>起：{{startTime}}</p> <p>止：{{endTime}}</p> </td> <td class=center width=110> <p class=operation> <a class=\"btn btn-blue\" href=\"#\" mx-click=\"zone{link:{{pageUrl}},eventId:{{eventId}},invokerId:{{invokerId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d0223f1ac\">立即推广</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=5>对不起，暂无相关内容！</td> </tr> {{/list}} </tbody> </table> <div class=tfoot bx-tmpl=\"page\" bx-datakey=\"pageCount,pageNo,pageSize\"> <div id=J_activity_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[20,40,100],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div>");
KISSY.add('app/views/promo/self/activity_main', function (S, View, Node, JSON, MM, Util, BXDialog, Sizzle) {
    var $ = KISSY.all;
    var platformList = {
        1: 'PC',
        2: '\u65E0\u7EBF',
        3: 'PC/\u65E0\u7EBF'
    };
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('prev', function (ev) {
                me.events.click.zone(ev.event);
            });
            me.on('save', function (ev) {
                me.events.click.zone(ev.event);
            });
            me.observeLocation([
                'invokerType',
                'platformType',
                'periodType',
                'toPage',
                'perPagesize',
                'orderWay',
                'keyword'
            ]);
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.toPage = params.toPage || 1;
            params.perPagesize = params.perPagesize || 20;
            params.invokerType = params.invokerType || 0;
            params.periodType = params.periodType || 0;
            params.platformType = params.platformType || 0;
            params.orderWay = params.orderWay || 2;
            me.manage('params', params);
            me.manage(MM.fetchAll([{
                    name: 'act_official_list',
                    urlParams: params
                }], function (MesModel) {
                var list = MesModel.get('data');
                me.setViewPagelet({
                    list: list.result,
                    params: params,
                    pageCount: list.totalCount,
                    pageNo: list.pageNo,
                    pageSize: list.pageSize
                }, function () {
                    me._component();
                }, function () {
                    me._component();
                });
            }));
        },
        _component: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var table = pagelet.getBrick('J_act_table');
            var trEle = $('#J_act_table').all('tr');
            var loc = me.location;
            var eventId = loc.get('eventId');
            var pagination = pagelet.getBrick('J_activity_pagination');
            if (pagination) {
                pagination.on('gotoPage', function (ev) {
                    me.navigate('toPage=' + ev.index);
                });
                pagination.on('sizeChange', function (ev) {
                    me.navigate('toPage=1&perPagesize=' + ev.size);
                });
            }
            if (!eventId)
                return;
            trEle.removeClass('hover');
            trEle.each(function (node) {
                if (eventId == node.attr('eventId')) {
                    node.addClass('hover');
                    table.curTr = node;
                    $(window).scrollTop(node.offset().top - 20);
                }
            });
        },
        events: {
            click: {
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('td').offset().top;
                    var link = e.params.link;
                    var linkType = 'official';
                    var eventId = e.params.eventId;
                    var invokerId = e.params.invokerId;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        triggerView: me,
                        event: e,
                        link: link,
                        linkType: linkType,
                        eventId: eventId,
                        invokerId: invokerId,
                        codeType: 'taobao_activity',
                        zoneType: 'self'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                shopType: function (e) {
                    e.halt();
                    var me = e.view;
                    var invokerType = e.params.invokerType;
                    me.navigate({
                        toPage: 1,
                        invokerType: invokerType
                    });
                },
                cat: function (e) {
                    e.halt();
                    var me = e.view;
                    var type = e.params.type;
                    var code = e.params.code;
                    var navigateParams = { toPage: 1 };
                    if (type == 'invoker') {
                        navigateParams.invokerType = code;
                    }
                    if (type == 'platform') {
                        navigateParams.platformType = code;
                    }
                    if (type == 'period') {
                        navigateParams.periodType = code;
                    }
                    if (type == 'orderWay') {
                        navigateParams.orderWay = code;
                    }
                    me.navigate(navigateParams);
                },
                search: function (e) {
                    var me = e.view;
                    var keyword = $('#q').val();
                    me.navigate('toPage=1&keyword=' + keyword);
                }
            },
            keydown: {
                search: function (e) {
                    var me = e.view;
                    if (e.domEvent.keyCode == 13) {
                        var keyword = $('#q').val();
                        me.navigate('toPage=1&keyword=' + keyword);
                    }
                }
            },
            mouseover: {
                preview_show: function (e) {
                    var me = e.view;
                    var timer = setTimeout(function () {
                        var curNode = $('#' + e.currentId);
                        var config = {
                            elCls: 'dialog pub-tooltip',
                            tmpl: '<img src="' + e.params.img + '">',
                            closable: false,
                            mask: false,
                            align: {
                                node: curNode,
                                points: [
                                    'tr',
                                    'tl'
                                ],
                                offset: [
                                    0,
                                    0
                                ]
                            }
                        };
                        var previewTip = new BXDialog(config);
                        previewTip.render();
                        previewTip.show();
                        me.manage('previewTip', previewTip);
                    }, 150);
                    me.manage('timer', timer);
                }
            },
            mouseout: {
                preview_hide: function (e) {
                    var me = e.view;
                    var timer = me.getManaged('timer');
                    timer && clearTimeout(timer);
                    var previewTip = me.getManaged('previewTip');
                    previewTip && previewTip.destroy();
                }
            }
        },
        renderer: {
            list: {
                avgCommissionRate: function (self) {
                    if (this.avgCommissionRate) {
                        return Util.formatNumber(this.avgCommissionRate).join('.') + '%';
                    } else {
                        return '--';
                    }
                },
                platformType: function (self) {
                    return platformList[this.platformType] ? platformList[this.platformType] : '--';
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'node',
        'json',
        'app/models/modelmanager',
        'app/util/util',
        'brix/gallery/dialog/index',
        'sizzle',
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
        'app/util/spmlog/pathmap'
    ]
});