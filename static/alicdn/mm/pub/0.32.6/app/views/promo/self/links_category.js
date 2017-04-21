Magix.tmpl("app/views/promo/self/links_category","<div class=promo-links-panel> <div class=category-tip>选择要推广的类目搜索，支持一级类目及二级类目</div> <div bx-name=\"dropdown_search\" bx-path=\"components/dropdown_search/\" style=\"width:200px;\" class=dropdown id=J_cat_level1 hidefocus=true> {{#catLevel1List}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{id}}\">{{name}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/catLevel1List}} <div class=dropdown-list> <div class=dropdown-search> <div class=\"search-panel clearfix\"> <input type=text class=search-input  /> <button class=\"iconfont-pub search-button\">&#xe616;</button> </div> </div> <ul style=\"max-height:200px;overflow:auto;\"> {{#catLevel1List}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{id}}\">{{name}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/catLevel1List}} </ul> </div> <input type=hidden value=\"\" id=J_cat_level1_input> </div> <div bx-name=\"dropdown_search\" bx-path=\"components/dropdown_search/\" style=\"width:200px;\" class=dropdown id=J_cat_level2 hidefocus=true bx-tmpl=\"catLevel2List\" bx-datakey=\"catLevel2List\"> {{#catLevel2List}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{id}}\">{{name}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/catLevel2List}} <div class=dropdown-list> <div class=dropdown-search> <div class=\"search-panel clearfix\"> <input type=text class=search-input  /> <button class=\"iconfont-pub search-button\">&#xe616;</button> </div> </div> <ul style=\"max-height:200px;overflow:auto;\"> {{#catLevel2List}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{id}}\">{{name}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/catLevel2List}} </ul> </div> <input type=hidden value=\"\" id=J_cat_level2_input> </div> <div class=promo-button bx-tmpl=\"disabled\" bx-datakey=\"disabled\"> {{#disabled}} <button class=\"btn btn-size25 btn-blue btn-disabled\">生成推广链接</button> {{/disabled}} {{^disabled}} <button class=\"btn btn-size25 btn-blue\" mx-click=zone data-spm-click=\"gostr=/tblm.88.1;locaid=dbe5152fd;pvid={{pvid}}&actionid=10\">生成推广链接</button> {{/disabled}} </div> </div>");
KISSY.add('app/views/promo/self/links_category', function (S, View, Node, MM, Util, Tip) {
    var $ = Node.all;
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
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([{ name: 'category_level1' }], function (MesModel) {
                var totalData = MesModel.get('data');
                var list = totalData.rootCats || [];
                list.unshift({
                    'name': '\u9009\u62E9\u4E00\u7EA7\u7C7B\u76EE',
                    'id': '',
                    'selected': true
                });
                me.setViewPagelet({
                    catLevel1List: list,
                    disabled: true
                }, function () {
                    me._components();
                });
            }));
        },
        _components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var catLevel1 = pagelet.getBrick('J_cat_level1');
            var catLevel2 = pagelet.getBrick('J_cat_level2');
            catLevel1.on('selected', function (ev) {
                me._syncCatLevel2(ev.value);
                me._syncButton(ev.value);
                me.manage('catId', ev.value);
            });
            catLevel2.on('selected', function (ev) {
                me.manage('catId', ev.value);
            });
            me._syncCatLevel2();
        },
        _syncCatLevel2: function (catId) {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            if (catId) {
                me.manage(MM.fetchAll([{
                        name: 'category_level2',
                        urlParams: { catId: catId }
                    }], function (MesModel) {
                    var totalData = MesModel.get('data');
                    var list = totalData.childCats || [];
                    list.unshift({
                        'name': '\u9009\u62E9\u4E8C\u7EA7\u7C7B\u76EE',
                        'id': '',
                        'selected': true
                    });
                    pagelet.setChunkData('catLevel2List', list);
                }));
            } else {
                pagelet.setChunkData('catLevel2List', {
                    'name': '\u9009\u62E9\u4E8C\u7EA7\u7C7B\u76EE',
                    'id': '',
                    'selected': true
                });
            }
        },
        _syncButton: function (catId) {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            if (catId != '') {
                pagelet.setChunkData('disabled', false);
            } else {
                pagelet.setChunkData('disabled', true);
            }
        },
        events: {
            click: {
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var catId = me.getManaged('catId');
                    var top = $('#' + e.currentId).parent('.promo-links-panel').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        triggerView: me,
                        event: e,
                        catId: catId,
                        codeType: 'self_category',
                        zoneType: 'self',
                        actionid: 36
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'node',
        'app/models/modelmanager',
        'app/util/util',
        'components/tip/index',
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
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap',
        'promise',
        'brix/core/brick'
    ]
});