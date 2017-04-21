Magix.tmpl("app/views/promo/act/activity","<div class=\"wrap-hd clearfix\"> <div class=title-bar bx-tmpl=\"top\" bx-datakey=\"canCreate\"> <h2 class=title>淘宝客活动</h2> <p class=tip>这里汇聚了众多优质的淘宝客活动。一键点击“立即推广”，获取推广链接，轻松赚取推广佣金。</p> {{^canCreate}} <p class=tip>你还没有发起活动的权限，请先报名，待小二审核(报名前请认真阅读报名规则)。</p> <p class=tip> <a class=\"rule color-blue mr10\" target=_blank href=\"http://rule.alimama.com/#!/announce/business/detail?id=8307063&knowledgeid=6533699\">查看报名规则</a><a href=\"http://form.taobao.com/script/fullview.htm?id=972\" target=_blank class=\"btn btn-size25 mr8\" hidefocus=true>立即报名</a> </p> {{/canCreate}} </div> </div> <vframe id=magix_vf_act_filter mx-view=\"app/views/promo/act/activity_filter\"> <div class=wrap-loading></div> </vframe> <div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/index\"> <div class=table-head-fix> <div class=\"toolbar clearfix\" bx-tmpl=\"other\" bx-datakey=\"orderType,key,canCreate,highQualityType\"> <div class=table-settings> <div class=search-bar> <div class=search-input> <input type=text class=input id=J_activity_search_value value=\"{{key}}\" placeholder=\"请输入活动的名称\" bx-name=\"placeholder\" bx-path=\"components/placeholder/\" mx-keydown=search> </div> <a class=\"btn btn-size25\" href=\"javascript:;\" hidefocus=true mx-click=search data-spm-click=\"gostr=/tblm.88.1;locaid=dd538a473\" >搜索</a> </div> </div> {{#canCreate}} <a href=\"#!/manage/act/act_add\" data-spm-click=\"gostr=/tblm.88.1;locaid=d894f5d6e\" class=\"btn btn-size25 mr8\" hidefocus=true> <i class=iconfont>&#410;</i> 发起活动 </a> {{/canCreate}} <div class=btn-group> <a href=\"javascript:;\" class=\"btn btn-size25 {{#if(orderType==3)}}btn-selected{{/if(orderType==3)}}\" mx-click=\"orderType{code:3}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d23ab536e\">最新</a> <a href=\"javascript:;\" class=\"btn btn-size25 {{#if(orderType==5)}}btn-selected{{/if(orderType==5)}}\" mx-click=\"orderType{code:5}\" data-spm-click=\"gostr=/tblm.88.1;locaid=da4e909f9\">最热</a> </div> </div> <table class=table> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>活动信息</th> <th class=left width=50>活动状态</th> <th class=left width=50>促销类型</th> <th class=left width=60>行业类目</th> <th class=left width=90>活动时间</th> <th class=left width=100> 平均佣金比率 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:150,content:'参与活动的所有商品的平均佣金比率'}\">&#360;</i> </th> <th class=left width=100> 30天推广笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:150,content:'30天内该活动累计推广成交笔数'}\">&#360;</i> </th> <th class=left width=80> 分成比率 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:150,content:'未扣除阿里妈妈技术服务费的分成比率'}\">&#360;</i> </th> <th class=center width=100>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> <td class=left> <ul class=attr> <li class=title> <a href=\"#!/promo/act/activity_detail?eventId={{eventId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dcd39c70e\" title=\"{{eventTitle}}\" target=_blank> {{#if(highQualityType==1)}} <i class=\"recommand red-recommand\"></i> {{/if(highQualityType==1)}} {{#if(highQualityType==2)}} <i class=\"recommand gray-recommand\"></i> {{/if(highQualityType==2)}} {{eventTitle}} </a> </li> <li> <span class=color-grey>发起方等级：</span>{{{list_tkLevel}}} </li> <li> <a href=\"#!/promo/act/activity_detail?eventId={{eventId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d931105a0\" class=color-blue target=_blank>查看活动详情&gt;&gt;</a> </li> </ul> </td> <td class=left width=50>{{{list_eventStatus}}}</td> <td class=left width=50>{{promotionTypeStr}}</td> <td class=\"left magpie-bridge-table-event\" width=60>{{{list_eventCats}}}</td> <td class=left width=90> 起：{{startTime}}<br> 止：{{endTime}} </td> <td class=left width=100>{{list_avgCommission}}</td> <td class=left width=100>{{list_alipayNum}}</td> <td class=left width=80>{{list_shareRate}}</td> <td class=center width=100> <p class=operation> <a class=\"btn btn-blue\" mx-click=\"zone{eventId:{{eventId}},codeType:self_event}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d1b2c32a8\" href=\"javascript:;\">立即推广</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=10>对不起，没有相关活动数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_act_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[10,20,50,100],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> </div> </div>");
KISSY.add('app/views/promo/act/activity', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    var ACTIVE_STATUS = {
        '-1': {
            classname: 'color-status-all',
            title: '\u6240\u6709\u72B6\u6001'
        },
        '1': {
            classname: 'color-status-1',
            title: '\u8349\u7A3F'
        },
        '2': {
            classname: 'color-status-2',
            title: '\u5356\u5BB6\u62A5\u540D\u4E2D'
        },
        '3': {
            classname: 'color-status-3',
            title: '\u62A5\u540D\u622A\u6B62'
        },
        '4': {
            classname: 'color-status-4',
            title: '\u5DF2\u53D1\u5E03'
        },
        '5': {
            classname: 'color-status-5',
            title: '\u63A8\u5E7F\u4E2D'
        },
        '6': {
            classname: 'color-status-6',
            title: '\u5DF2\u7ED3\u675F'
        },
        '99': {
            classname: 'color-status-99',
            title: '\u5DF2\u5931\u6548'
        }
    };
    var QUALITY_STATUS = {
        '0': '30',
        '1': '23',
        '2': '23'
    };
    var COUPON_NEED = {
        0: '\u65E0\u5238',
        1: '\u6EE1\u51CF\u5238/\u65E0\u95E8\u69DB\u5238',
        2: '\u65E0\u95E8\u69DB\u5238',
        3: '\u6EE1\u51CF\u5238'
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
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.orderType = params.orderType || 3;
            params.key = params.key || '';
            params.toPage = params.toPage || 1;
            params.perPageSize = params.perPageSize || 10;
            params.platformType = params.platformType || -1;
            params.catId = params.eventCat || -1;
            params.commissionRangeType = params.commissionRange || -1;
            params.eventStatus = params.eventStatus || -1;
            params.highQuality = params.highQuality || -1;
            params.promotionType = params.promotionType || -1;
            me.manage(MM.fetchAll([{
                    name: 'act_activity_list',
                    urlParams: params
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                me.setViewPagelet({
                    canCreate: totalData.canCreate,
                    key: params.key,
                    orderType: params.orderType,
                    list: totalData.result,
                    pageCount: totalData.totalCount,
                    pageNo: params.toPage,
                    pageSize: params.perPageSize,
                    highQualityType: params.highQuality
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.toPage,
                        pageSize: params.perPageSize,
                        pageCount: totalData.totalCount
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_act_pagination');
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
            var pagination = pagelet.getBrick('J_act_pagination');
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
        events: {
            click: {
                orderType: function (e) {
                    var code = e.params.code;
                    e.view.navigate('toPage=1&orderType=' + e.params.code);
                },
                highQualityType: function (e) {
                    e.view.navigate('toPage=1&highQualityType=' + e.params.code);
                },
                search: function (e) {
                    e.halt();
                    var key = S.one('#J_activity_search_value').val();
                    e.view.navigate('toPage=1&key=' + key);
                },
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('td').offset().top;
                    var codeType = e.params.codeType;
                    var eventId = e.params.eventId;
                    var dialogConfig = Util.getDefaultDialogConfig({
                        top: top,
                        spmc: '1998472147'
                    });
                    var viewName = 'app/views/manage/zone/zone_add_act';
                    var viewOptions = {
                        top: top,
                        triggerView: me,
                        event: e,
                        eventId: eventId,
                        codeType: codeType,
                        zoneType: 'self',
                        tag: 59
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                }
            },
            keydown: {
                search: function (e) {
                    var key = $('#J_activity_search_value').val();
                    if (e.domEvent.keyCode == 13) {
                        e.view.navigate('toPage=1&key=' + key);
                    }
                }
            }
        },
        renderer: {
            list: {
                avgCommission: function (self) {
                    return this.avgCommission ? this.avgCommission + '%' : '-';
                },
                cvr: function (self) {
                    return this.cvr ? this.cvr + '%' : '-';
                },
                alipayNum: function (self) {
                    return this.alipayNum ? this.alipayNum : '-';
                },
                shareRate: function (self) {
                    return this.shareRate ? this.shareRate + '%' : '-';
                },
                eventTitle: function (self) {
                    return Util.subTextEclipse(this.eventTitle, QUALITY_STATUS[this.highQualityType || 0]);
                },
                comments: function (self) {
                    return Util.subTextEclipse(this.comments, 60);
                },
                tkLevel: function (self) {
                    return Util.getTkLevel(this.tkLevel);
                },
                eventStatus: function (self) {
                    var obj = ACTIVE_STATUS[this.eventStatus];
                    var htmlstr = '<div class="' + obj.classname + '">' + obj.title;
                    htmlstr += '</div>';
                    return htmlstr;
                },
                platformType: function (self) {
                    if (!this.platformType)
                        return '-';
                    var platforms = [
                        '\u5168\u90E8',
                        'PC',
                        '\u65E0\u7EBF'
                    ];
                    if (this.platformType == -1) {
                        return '\u5168\u90E8';
                    }
                    return platforms[this.platformType];
                },
                eventCats: function (self) {
                    var list = [];
                    if (!this.eventCats || this.eventCats.length == 0)
                        return '-';
                    S.each(this.eventCats, function (v, k) {
                        list.push(v.title);
                    });
                    var htmlStr = '';
                    var shortcut = '';
                    var all = '<span class=\'event-cats-tag\'>' + list.join('</span><span class=\'event-cats-tag\'>') + '</span>';
                    if (list.length <= 3) {
                        htmlStr = list.join('<br>');
                    } else {
                        shortcut = list.slice(0, 3).join('</br>');
                        htmlStr = '<div class="table-more">' + shortcut + '<i class="icon-horn-tilt"></i><div class="table-info">' + all + '</div>';
                    }
                    return htmlStr;
                },
                ruleCoupon: function () {
                    return COUPON_NEED[this.ruleCoupon];
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