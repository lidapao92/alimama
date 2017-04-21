Magix.tmpl("app/views/manage/channel/channel","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>渠道管理</h2> </div> </div> <div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=table-head-fix> <div class=\"toolbar clearfix\"> <a href=\"#\" class=\"btn btn-size25\" mx-click=add data-spm-click=\"gostr=/tblm.88.1;locaid=de6e723ea\" atp=\"{ptype:'channel_manage',ctype:'channel_manage_add'}\">新建渠道</a> </div> <table class=table bx-tmpl=\"tableFix\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=90>创建时间</th> <th class=left >推广渠道名称</th> <th class=right width=90>30天累计流量</th> <th class=right width=90>30天累计点击数</th> <th class=right width=90>30天平均CTR</th> <th class=right width=90>30天累计佣金</th> <th class=center width=170>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list,pubHost\"> <tbody> {{#list}} <tr> <td class=left width=90>{{createTime}}</td> <td class=left>{{channelName}}</td> <td class=right width=90>{{mixPv30day}}</td> <td class=right width=90>{{mixClick30day}}</td> <td class=right width=90>{{list_mixCtr30day}}%</td> <td class=right width=90>￥{{list_rec30day}}</td> <td class=center width=170> <p class=operation> <a href=\"#\" mx-click=\"edit{channelId:{{channelId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d93ceadc6\" atp=\"{ptype:'channel_manage',ctype:'channel_manage_edit'}\">修改</a> <span class=divide>|</span> <a href=\"#\" mx-click=\"del{channelId:{{channelId}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dd5944291\" atp=\"{ptype:'channel_manage',ctype:'channel_manage_del'}\">删除</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=7>暂无数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_item_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[40],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> </div> ");
KISSY.add('app/views/manage/channel/channel', function (S, View, VOM, Node, MM, Router, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('save', function () {
                me.render();
            });
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.toPage = params.toPage || 1;
            params.perPageSize = params.perPageSize || 40;
            me.manage(MM.fetchAll([{
                    name: 'channel_list',
                    urlParams: params
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var list = totalData.pagelist;
                me.setViewPagelet({
                    list: list,
                    pageCount: totalData.paginator.items,
                    pageNo: params.toPage,
                    pageSize: params.perPageSize,
                    pubHost: window.UserInfo.pubHost
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.toPage,
                        pageSize: params.perPageSize,
                        pageCount: totalData.paginator.items
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_item_pagination');
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
            var pagination = pagelet.getBrick('J_item_pagination');
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
                add: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('.toolbar').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/channel/channel_add';
                    var viewOptions = { triggerView: me };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                edit: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('tr').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/channel/channel_add';
                    var viewOptions = {
                        channelId: e.params.channelId,
                        triggerView: me
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                del: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('tr').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({
                        width: 300,
                        top: top
                    });
                    var viewName = 'app/views/util/confirm';
                    var viewOptions = {
                        confirmFn: function () {
                            me.manage(MM.fetchAll([{
                                    name: 'channel_del',
                                    postParams: { channelids: e.params.channelId }
                                }], function (MesModel) {
                                Util.hideDialog();
                                me.render();
                            }), function (err) {
                                alert(err.message);
                                return;
                            });
                        },
                        cancelFn: function () {
                            Util.hideDialog();
                        },
                        confirmTitle: '\u5220\u9664\u6E20\u9053',
                        confirmContent: '\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6E20\u9053\u5417\uFF1F'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                }
            }
        },
        renderer: {
            list: {
                mixCtr30day: function (self) {
                    return Util.formatNumber(this.mixCtr30day).join('.');
                },
                rec30day: function (self) {
                    return Util.formatNumber(this.rec30day).join('.');
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
        'magix/router',
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