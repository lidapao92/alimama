Magix.tmpl("app/views/manage/software/list","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>阿里蒲公英推广管理</h2> </div> </div> <div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=table-head-fix> <div class=\"toolbar clearfix\"> <a href=\"#\" class=\"btn btn-size25\" mx-click=add data-spm-click=\"gostr=/tblm.88.1;locaid=d6172fc86\">新增阿里蒲公英推广</a> </div> <table class=table bx-tmpl=\"tableFix\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left width=200>软件客户端名称</th> <th class=left>推广内容（桌面图标、任务栏）</th> <th class=left>pid</th> <th class=center width=280>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> <td class=left width=200>{{siteName}}</td> <td class=left>{{content}}</td> <td class=left>{{cid}}</td> <td class=center width=280> <p class=operation> <a href=\"#\" mx-click=\"code{cid:{{cid}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=de583d56a\">下载推广安装包</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=3>暂无数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_item_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[40],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> </div> ");
KISSY.add('app/views/manage/software/list', function (S, View, VOM, Vframe, Node, MM, Router, Util) {
    var $ = Node.all;
    return View.extend({
        init: function () {
            var me = this;
            me.on('created', function () {
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
                    name: 'software_promo_list',
                    urlParams: params
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                me.setViewPagelet({
                    list: totalData.result,
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
                    var top = $('#' + e.currentId).offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add_software';
                    var viewOptions = {
                        top: top,
                        triggerView: me
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                code: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('td').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({
                        top: top,
                        width: 700
                    });
                    var viewName = 'app/views/promo/code/code_taobao_software';
                    var viewOptions = { cid: e.params.cid };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
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
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});