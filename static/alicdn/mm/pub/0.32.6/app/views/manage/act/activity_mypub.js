Magix.tmpl("app/views/manage/act/activity_mypub","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>我推广的活动</h2> </div> </div> <div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/index\"> <div class=table-head-fix> <div class=\"toolbar clearfix\" bx-tmpl=\"other\" bx-datakey=\"orderType,key\"> {{#canCreate}} <a href=\"#!/manage/act/act_add\" data-spm-click=\"gostr=/tblm.88.1;locaid=d7dbce14e\" class=\"btn btn-size25 mr8\" hidefocus=true> <i class=iconfont>&#410;</i> 发起活动 </a> {{/canCreate}} <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_status_dropdown style=\"width:100px;\"> <span class=dropdown-hd > <span class=dropdown-text value=\"{{status}}\">{{status_type}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> <ul class=\"dropdown-list dropdown-list-noicon\" style=\"max-height:150px;_height:150px;\"> {{#statusListArray}} <li class=dropdown-item> <span value=\"{{key}}\">{{value}}</span> </li> {{/statusListArray}} </ul> </div> </div> <table class=table bx-tmpl=\"list-head\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>活动信息</th> <th class=left width=60>活动状态</th> <th class=left width=90>活动时间</th> <th class=left width=100> 平均佣金比率 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:150,content:'参与活动的所有商品的平均佣金比率'}\">&#360;</i> </th> <th class=left width=100> 30天推广笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:150,content:'30天内该活动累计推广成交笔数'}\">&#360;</i> </th> <th class=left width=80> 分成比率 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:150,content:'未扣除阿里妈妈技术服务费的分成比率'}\">&#360;</i> </th> <th class=center width=250>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> <td class=left> <ul class=attr> <li class=title > <a href=\"#!/promo/act/activity_detail_pub?eventId={{eventId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d763b27b3\" target=_blank title=\"{{eventTitle}}\"> {{#if(highQualityType==1)}} <i class=\"recommand red-recommand\"></i> {{/if(highQualityType==1)}} {{#if(highQualityType==2)}} <i class=\"recommand gray-recommand\"></i> {{/if(highQualityType==2)}} {{eventTitle}} </a> </li> <li> <span class=color-grey>发起方等级：</span>{{{list_tkLevel}}} </li> <li> <a href=\"#!/promo/act/activity_detail_pub?eventId={{eventId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d78f042c6\" class=color-blue target=_blank>查看活动详情&gt;&gt;</a> </li> </ul> </td> <td width=60 class=left>{{{list_eventStatus}}}</td> <td width=90 class=left> <p>起：{{startTime}}</p> <p>止：{{endTime}}</p> </td> <td width=100 class=left>{{list_avgCommission}}</td> <td width=100 class=left>{{list_alipayNum}}</td> <td width=80 class=left>{{list_shareRate}}</td> <td width=250 class=center> <p class=operation> {{#canOperate}} <a class=color-blue mx-click=\"zone{eventId:{{eventId}},codeType:self_event}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d142f908c\" href=\"javascript:;\">获取链接</a> {{/canOperate}} {{^canOperate}} <a class=color-bd data-spm-click=\"gostr=/tblm.88.1;locaid=d142f908c\" href=\"javascript:;\" bx-name=\"tooltip\" bx-config=\"{width:200,closable:false,align:{node:false,points:['tr','br'],offset:[0,-8]},mouseDelay:0.3,content:'结束30天以及失效4天的活动无法进行此项操作'}\">获取链接</a> {{/canOperate}} {{#previewUrl}} <span class=divide></span> {{#canOperate}} <a class=color-blue target=_blank href=\"{{previewUrl}}\">查看活动</a> {{/canOperate}} {{^canOperate}} <a class=color-bd target=_blank href=\"javascript:;\" bx-name=\"tooltip\" bx-config=\"{width:200,closable:false,align:{node:false,points:['tr','br'],offset:[0,-8]},mouseDelay:0.3,content:'结束30天以及失效4天的活动无法进行此项操作'}\">查看活动</a> {{/canOperate}} {{/previewUrl}} <span class=divide></span> <a class=color-blue href=\"#!/report/zone/zone_act?eventId={{eventId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dcc23ca2f\">查看报表</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=8>对不起，没有相关活动数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_act_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[10,20,50,100],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"></div> </div> </div> ");
KISSY.add('app/views/manage/act/activity_mypub', function (S, View, VOM, Node, MM, Util) {
    var QUALITY_STATUS = {
        '0': '30',
        '1': '23',
        '2': '23'
    };
    var $ = Node.all;
    var ACTIVE_STATUS = {
        '-1': {
            classname: 'color-status-all',
            title: '\u6240\u6709\u72B6\u6001'
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
        }
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
            var eventStatus = params.eventStatus || -1;
            me.manage('eventStatus', eventStatus);
            params.toPage = params.toPage || 1;
            params.perPageSize = params.perPageSize || 10;
            params.eventStatus = eventStatus;
            me.manage(MM.fetchAll([{
                    name: 'act_activity_mypub',
                    urlParams: params
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                me.setViewPagelet({
                    canCreate: totalData.canCreate,
                    list: totalData.result,
                    eventStatus: eventStatus,
                    statusListArray: me.wrapStatusList(ACTIVE_STATUS),
                    pageCount: totalData.totalCount,
                    pageNo: params.toPage,
                    pageSize: params.perPageSize
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
        wrapStatusList: function (statusList) {
            var dstArray = [];
            S.each(statusList, function (v, k) {
                if (k == '-1') {
                    dstArray.unshift({
                        key: k,
                        value: v.title
                    });
                } else {
                    dstArray.push({
                        key: k,
                        value: v.title
                    });
                }
            });
            return dstArray;
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var statusDropdown = pagelet.getBrick('J_status_dropdown');
            statusDropdown.on('selected', function (ev) {
                me.navigate('toPage=1&eventStatus=' + ev.value);
            });
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
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('td').offset().top;
                    var codeType = e.params.codeType;
                    var eventId = e.params.eventId;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
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
            }
        },
        renderer: {
            status: {
                type: function (self) {
                    var status = self.getManaged('eventStatus');
                    return ACTIVE_STATUS[status].title;
                }
            },
            list: {
                avgCommission: function (self) {
                    return this.avgCommission ? this.avgCommission + '%' : '-';
                },
                eventTitle: function (self) {
                    return Util.subTextEclipse(this.eventTitle, QUALITY_STATUS[this.highQualityType || 0]);
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
                comments: function (self) {
                    return Util.subTextEclipse(this.comments, 60);
                },
                eventStatus: function (self) {
                    var obj = ACTIVE_STATUS[this.eventStatus];
                    if (!obj)
                        return '-';
                    var htmlstr = '<div class="' + obj.classname + '">' + obj.title + '</div>';
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
                    var all = '';
                    if (list.length <= 3) {
                        htmlStr = list.join('<br>');
                    } else {
                        shortcut = list.slice(0, 3).join('<br>');
                        all = list.join('<br>');
                        htmlStr = '<div class="w60 table-more">' + shortcut + '<i class="icon-horn-tilt"></i><div class="table-info">' + all + '</div>';
                    }
                    return htmlStr;
                },
                tkLevel: function (self) {
                    return Util.getTkLevel(this.tkLevel);
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