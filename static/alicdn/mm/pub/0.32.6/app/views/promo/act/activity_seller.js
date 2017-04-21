Magix.tmpl("app/views/promo/act/activity_seller","<div class=\"wrap-hd clearfix\"> <div class=title-bar bx-tmpl=\"top\" bx-datakey=\"canCreate\"> <h2 class=title>店铺活动推广</h2> <p class=tip>温馨提醒：这里集合了淘宝、天猫卖家自己发起的营销活动，由推广卖家活动页面带来的该店铺里所有的商品成交都会获得佣金。</p> </div> </div> <div class=search-filter bx-tmpl=\"params\" bx-datakey=\"params\"> <div class=filter-panel> <dl> <dt>范围</dt> <dd> <ul class=\"cat clearfix\"> {{#params}} <li {{#if(shopType==2)}}class=selected{{/if(shopType==2)}}><a class=cat-item href=\"#\" mx-click=\"shopType{shopType:2}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d071909b0\" >天猫店铺</a></li> {{/params}} </ul> </dd> </dl> </div> <div class=filter-panel> <dl> <dt>佣金</dt> <dd> <ul class=\"cat clearfix\"> {{#params}} <li {{#if(startCommrate==-1)}}class=selected{{/if(startCommrate==-1)}}{{^startCommrate}}class=selected{{/startCommrate}}><a class=cat-item href=\"#\" mx-click=\"commissionRange{startCommrate:-1,endCommrate:-1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d5f261831\">全部</a></li> <li {{#if(startCommrate==0)}}class=selected{{/if(startCommrate==0)}}><a class=cat-item href=\"#\" mx-click=\"commissionRange{startCommrate:0,endCommrate:10}\" data-spm-click=\"gostr=/tblm.88.1;locaid=da75b5fc2\">10%以下</a></li> <li {{#if(startCommrate==10)}}class=selected{{/if(startCommrate==10)}}><a class=cat-item href=\"#\" mx-click=\"commissionRange{startCommrate:10,endCommrate:20}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df938743e\">10%~20%</a></li> <li {{#if(startCommrate==20)}}class=selected{{/if(startCommrate==20)}}><a class=cat-item href=\"#\" mx-click=\"commissionRange{startCommrate:20,endCommrate:30}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d818a5a5c\">20%~30%</a></li> <li {{#if(startCommrate==30)}}class=selected{{/if(startCommrate==30)}}><a class=cat-item href=\"#\" mx-click=\"commissionRange{startCommrate:30,endCommrate:100}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d234ddd55\">30%以上</a></li> {{/params}} </ul> </dd> </dl> </div> </div> <div class=\"table-container activity-list\" bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=table-head-fix> <div class=\"toolbar clearfix\"> <div class=table-settings> <div class=search-bar> <div class=search-input> <input type=text class=input id=q value=\"{{params.q}}\" placeholder=\"请输入店铺名称\" bx-name=\"placeholder\" bx-path=\"components/placeholder/\" mx-keydown=search> </div> <a class=\"btn btn-size25\" href=\"javascript:;\" hidefocus=true mx-click=search data-spm-click=\"gostr=/tblm.88.1;locaid=d685dcdd0\" atp=\"{ptype:'activity_seller',ctype:'activity_seller_search'}\">搜索</a> </div> </div> </div> <table class=table bx-tmpl=\"thead\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>活动信息</th> <th class=left width=120>店铺名称</th> <th class=left width=60>投放平台</th> <th class=left width=100>{{{sort_shopCommissionRate}}}</th> <th class=left width=100>活动时间</th> <th class=center width=150>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> <td class=left> <div class=list-group> <a href=\"{{promotionUrl}}\" class=img target=_blank> <img src=\"{{bannerUrl}}\" onerror=\"this.src='http://gtms01.alicdn.com/tps/i1/T1syqxFbNdXXczfNfo-80-80.gif'\"> </a> <ul class=attr> <li class=title> <a href=\"{{promotionUrl}}\" title=\"{{eventTitle}}\" target=_blank> {{{eventTitle}}} </a> </li> <li> <span class=color-grey>店铺类型：{{list_sellerType}}</span> </li> <li> <span class=event-tag>{{list_eventType}}</span> </li> </ul> </div> </td> <td class=left width=120> <p> {{{shopTitle}}} </p> <p> <a href=\"#!/promo/self/shop_detail?userNumberId={{oriMemberId}}&tab=3\" data-spm-click=\"gostr=/tblm.88.1;locaid=d24bc6e76\" mx-mouseover=\"shopinfo_show{userNumberId:{{oriMemberId}}}\" mx-mouseout=shopinfo_hide class=color-blue>店铺推广详情&gt;&gt;</a> </p> </td> <td class=left width=60> {{list_publishPlatform}} </td> <td class=\"left{{#if(sortField==commissionRate)}} sort{{/if(sortField==commissionRate)}}\" width=100> <span class=color-green>{{list_shopCommissionRate}}%</span> </td> <td class=left width=100> <p>起：{{effectiveStartTime}}</p> <p>止：{{effectiveEndTime}}</p> </td> <td class=center width=150> <p class=operation> <a class=\"btn btn-blue\" href=\"#\" mx-click=\"other{userNumberId:{{oriMemberId}},promotionUrl:{{promotionUrl}},sellerType:{{sellerType}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dc1d45456\">立即推广</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=6>对不起，没找到您要的结果。建议您尝试其他关键字重新搜索。</td> </tr> {{/list}} </tbody> </table> {{^if(pageCount==0)}} <div class=tfoot> <div id=J_activity_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[40],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> {{/if(pageCount==0)}} </div>");
KISSY.add('app/views/promo/act/activity_seller', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    var platFormMap = {
        1: 'PC',
        2: '\u65E0\u7EBF',
        3: 'PC/\u65E0\u7EBF'
    };
    var sellerTypeMap = {
        0: '\u6DD8\u5B9D',
        1: '\u5929\u732B'
    };
    var eventTypeMap = {
        10: '\u4F18\u60E0\u6D3B\u52A8',
        11: '\u642D\u914D\u5957\u9910',
        12: '\u6EE1\u5C31\u9001',
        13: '\u9650\u65F6\u6253\u6298',
        21: '\u54C1\u724C\u4E13\u8F91',
        22: '\u65B0\u54C1\u63A8\u5E7F',
        23: '\u70ED\u9500\u4E13\u8F91',
        24: '\u4F18\u9009\u6D3B\u52A8',
        25: '\u5356\u5BB6\u7CBE\u9009',
        26: '\u4F18\u60E0\u4FC3\u9500',
        27: '\u9884\u552E/\u8BD5\u7528\u7C7B',
        28: '\u4E92\u52A8/\u8D44\u8BAF\u7C7B',
        29: '\u8054\u5408\u8425\u9500'
    };
    return View.extend({
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.shopType = params.shopType || 2;
            params.toPage = params.toPage || 1;
            params.perPagesize = params.perPagesize || 40;
            params.filterType = 13;
            me.manage(MM.fetchAll([{
                    name: 'shops_list',
                    urlParams: params
                }], function (MesModel) {
                var list = MesModel.get('data');
                var sortField, sortType;
                if (params.sort) {
                    var sortField = params.sort.replace(/^_/, '');
                    var sortType = params.sort[0] === '_' ? 'descending' : 'ascending';
                    me.manage('sortField', sortField);
                    me.manage('sortType', sortType);
                }
                S.each(list.pagelist, function (v, k) {
                    v.sortField = sortField;
                    S.mix(v, v.sellerEventDTO);
                });
                me.setViewPagelet({
                    list: list.pagelist,
                    params: params,
                    pageCount: list.paginator.items,
                    pageNo: params.toPage,
                    pageSize: params.perPagesize
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.toPage,
                        pageSize: params.perPagesize,
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
                    me.navigate('toPage=1&perPagesize=' + ev.size);
                });
            }
        },
        resetPage: function (params) {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_activity_pagination');
            Util.resetPage(pagination, params);
        },
        sortFn: function (key, value) {
            var s = [
                '<a href="#" mx-click="sort{sortField:' + key + ',sortType:descending}" class="">' + value + '<i class="iconfont icon-sort">&#320;</i></a>',
                '<a href="#" mx-click="sort{sortField:' + key + ',sortType:ascending}" class="sort">' + value + '<i class="iconfont icon-sort">&#320;</i></a>',
                '<a href="#" mx-click="sort{sortField:' + key + ',sortType:}" class="sort">' + value + '<i class="iconfont icon-sort">&#322;</i></a>'
            ];
            var sortField = this.getManaged('sortField');
            var sortType = this.getManaged('sortType');
            if (sortField === key) {
                switch (sortType) {
                case 'ascending':
                    return s[2];
                case 'descending':
                    return s[1];
                }
            }
            return s[0];
        },
        events: {
            click: {
                sort: function (e) {
                    e.halt();
                    var me = e.view;
                    var sortField = e.params.sortField;
                    var sortType = e.params.sortType;
                    me.manage('sortField', sortField);
                    me.manage('sortType', sortType);
                    var sort = sortType ? (sortType == 'descending' ? '_' : '') + sortField : '';
                    me.navigate('toPage=1&sort=' + sort);
                },
                shopType: function (e) {
                    e.halt();
                    var me = e.view;
                    var shopType = e.params.shopType;
                    me.navigate('toPage=1&shopType=' + shopType);
                },
                commissionRange: function (e) {
                    e.halt();
                    var me = e.view;
                    var startCommrate = e.params.startCommrate;
                    var endCommrate = e.params.endCommrate;
                    me.navigate('toPage=1&startCommrate=' + startCommrate + '&endCommrate=' + endCommrate);
                },
                search: function (e) {
                    e.halt();
                    var me = e.view;
                    var q = $('#q').val();
                    me.navigate('/promo/act/activity_seller?q=' + q);
                },
                other: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('td').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        triggerView: me,
                        event: e,
                        userNumberId: e.params.userNumberId,
                        promotionUrl: e.params.promotionUrl,
                        sellerType: e.params.sellerType,
                        codeType: 'self_othershops',
                        zoneType: 'self'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                }
            },
            keydown: {
                search: function (e) {
                    var me = e.view;
                    var q = $('#q').val();
                    if (e.domEvent.keyCode == 13) {
                        me.navigate('/promo/act/activity_seller?q=' + q);
                    }
                }
            },
            mouseover: {
                shopinfo_show: function (e) {
                    var me = e.view;
                    var timer = setTimeout(function () {
                        var curNode = $('#' + e.currentId);
                        var config = {
                            mask: false,
                            width: 265,
                            align: {
                                node: curNode,
                                points: [
                                    'bl',
                                    'tl'
                                ],
                                offset: [
                                    0,
                                    5
                                ]
                            }
                        };
                        var viewName = 'app/views/promo/self/items_shopinfo';
                        var viewOptions = {
                            userNumberId: e.params.userNumberId,
                            from: 'item'
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
            }
        },
        renderer: {
            list: {
                publishPlatform: function (self) {
                    return platFormMap[this.publishPlatform];
                },
                sellerType: function (self) {
                    return sellerTypeMap[this.sellerType];
                },
                eventType: function (self) {
                    return eventTypeMap[this.eventType];
                },
                shopCommissionRate: function (self) {
                    return Util.formatNumber(this.shopCommissionRate / 100).join('.');
                }
            },
            sort: {
                shopCommissionRate: function (self) {
                    return self.sortFn('commissionRate', '\u5E73\u5747\u4F63\u91D1\u6BD4\u7387');
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