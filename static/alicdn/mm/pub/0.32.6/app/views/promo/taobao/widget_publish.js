Magix.tmpl("app/views/promo/taobao/widget_publish","<ul class=\"med-lavaLamp clearfix\" bx-name=\"lavalamp\" bx-config=\"{fx: 'easeNone',speed: 0.2}\"> <li class=current> <h2><span>展现组件</span></h2> </li> <li> <h2><a href=\"#!/promo/taobao/widget_click\" data-spm-click=\"gostr=/tblm.88.1;locaid=d16c07c7c\" atp=\"{ptype:'widget',ctype:'widget_click'}\">点击组件</a><i class=new></i></h2> </li> <li> <h2><a href=\"#!/promo/taobao/widget_private\" data-spm-click=\"gostr=/tblm.88.1;locaid=d13a5024f\" atp=\"{ptype:'widget',ctype:'widget_private'}\">自定义组件</a></h2> </li> </ul> <vframe mx-view=\"app/views/promo/taobao/widget_display_filter\"> <div class=wrap-loading></div> </vframe> <div class=table-container> <div class=\"toolbar clearfix\"> <div class=table-settings> <div class=search-bar> <div class=search-input> <input type=text class=input id=templateId value=\"{{params.templateId}}\" placeholder=\"请输入模板ID\" bx-name=\"placeholder\" bx-path=\"components/placeholder/\" mx-keydown=search> </div> <a class=\"btn btn-size25\" href=\"javascript:;\" hidefocus=true mx-click=search data-spm-click=\"gostr=/tblm.88.1;locaid=d9fa16797\" atp=\"{ptype:'widget',ctype:'widget_publish_search'}\">搜索</a> </div> </div> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>模板名称</th> <th class=left width=80>组件类型</th> <th class=left width=80>模板尺寸</th> <th class=left width=80>模板ID</th> <th class=center width=150>操作</th> </tr> </thead> <tbody> {{#list}} <tr> <td class=left><a href=\"javascript:;\" mx-mouseover=\"preview_show{tmplType:{{widgetType}},tmplUrl:{{url}},width:{{width}},height:{{height}},count:{{blockCount}},perGroup:{{perCount}},groupName:{{groupName}}}\" mx-mouseout=preview_hide>{{name}}</a></td> <td class=left>{{list_widgetType}}</td> <td class=left>{{width}}x{{height}}</td> <td class=left>{{templateId}}</td> <td class=center> <p class=operation> <a href=\"javascript:;\" mx-mouseover=\"preview_show{tmplType:{{widgetType}},tmplUrl:{{url}},width:{{width}},height:{{height}},count:{{blockCount}},perGroup:{{perCount}},groupName:{{groupName}}}\" mx-mouseout=preview_hide>预览</a> <span class=divide></span> <a href=\"#\" mx-click=\"code{tmplSize:{{width}}x{{height}},tmplType:{{widgetType}},tmplId:{{templateId}},codeType:taobao_widget}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d38f98023\" atp=\"{ptype:'widget',ctype:'widget_publish_code'}\">获取标签</a> </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=5>对不起，没找到当前尺寸的模板</td> </tr> {{/list}} </tbody> </table> {{^if(pageCount==0)}} <div class=tfoot> <div id=J_widget_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[10],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> {{/if(pageCount==0)}} </div>");
KISSY.add('app/views/promo/taobao/widget_publish', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('prev', function (ev) {
                me.fire('zoneAdd', { event: ev.event });
            });
            me.on('save', function (ev) {
                me.fire('zoneAdd', { event: ev.event });
            });
            me.on('zoneAdd', function (ev) {
                var e = ev.event;
                var top = $('#' + e.currentId).parent('tr').offset().top;
                var zoneType = 'pc';
                var codeType = 'taobao_taodianjin';
                var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                var viewName = 'app/views/manage/zone/zone_add';
                var viewOptions = {
                    top: top,
                    triggerView: me,
                    event: e,
                    codeType: codeType,
                    zoneType: zoneType,
                    tag: 6,
                    creater: 'float'
                };
                Util.showDialog(dialogConfig, viewName, viewOptions);
            });
            me.on('zonePrev', function (ev) {
                me.events.click.code(ev.event, ev.next);
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
            params.perPageSize = params.perPageSize || 10;
            me.manage(MM.fetchAll([{
                    name: 'widget_publish_list',
                    urlParams: params
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var listData = totalData.allTemplatesDos;
                me.setViewPagelet({
                    list: listData.result,
                    pageCount: listData.totalCount,
                    pageNo: params.toPage,
                    pageSize: params.perPageSize
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.toPage,
                        pageSize: params.perPageSize,
                        pageCount: listData.totalCount
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_widget_pagination');
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
            var pagination = pagelet.getBrick('J_widget_pagination');
            Util.resetPage(pagination, params);
        },
        getPreviewAlign: function (curNode, width, height) {
            var width = parseInt(width);
            var height = parseInt(height) + 30;
            var offsetLeft = curNode.offset().left;
            var offsetTop = curNode.offset().top;
            var scrollTop = S.DOM.scrollTop();
            var viewWidth = S.DOM.viewportWidth() - 30;
            var viewHeight = S.DOM.viewportHeight();
            var viewTop = offsetTop - scrollTop;
            var align = {};
            if (offsetLeft + width < viewWidth) {
                align.points = [
                    'tr',
                    'tl'
                ];
            } else if (offsetLeft + width > viewWidth) {
                align.points = [
                    'tl',
                    'tr'
                ];
            }
            if (viewTop + height > viewHeight) {
                align.offset = [
                    0,
                    -(viewTop + height - viewHeight)
                ];
            } else {
                align.offset = [
                    0,
                    0
                ];
            }
            return align;
        },
        events: {
            click: {
                code: function (e, next) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('td').offset().top;
                    var tmplType = e.params.tmplType;
                    var tmplSize = e.params.tmplSize;
                    var tmplId = e.params.tmplId;
                    var codeType = e.params.codeType;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/promo/code/code';
                    var viewOptions = {
                        next: next,
                        event: e,
                        triggerView: me,
                        title: '\u83B7\u53D6\u6807\u7B7E',
                        hideBtn: true,
                        tmplType: tmplType,
                        tmplSize: tmplSize,
                        tmplId: tmplId,
                        codeType: codeType
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                search: function (e) {
                    e.halt();
                    var me = e.view;
                    var templateId = $('#templateId').val();
                    me.navigate('/promo/taobao/widget_publish?templateId=' + templateId);
                }
            },
            keydown: {
                search: function (e) {
                    var me = e.view;
                    var templateId = $('#templateId').val();
                    if (e.domEvent.keyCode == 13) {
                        me.navigate('/promo/taobao/widget_publish?templateId=' + templateId);
                    }
                }
            },
            mouseover: {
                preview_show: function (e) {
                    var me = e.view;
                    var timer = setTimeout(function () {
                        var curNode = $('#' + e.currentId);
                        var tmplType = e.params.tmplType;
                        var tmplUrl = e.params.tmplUrl;
                        var width = e.params.width;
                        var height = e.params.height;
                        var count = e.params.count;
                        var perGroup = e.params.perGroup;
                        var align = me.getPreviewAlign(curNode, width, height);
                        var config = {
                            width: parseInt(e.params.width) + 20,
                            align: {
                                node: curNode,
                                points: align.points,
                                offset: align.offset
                            }
                        };
                        var viewName = 'app/views/promo/taobao/widget_preview';
                        var viewOptions = {
                            tmplType: tmplType,
                            tmplUrl: tmplUrl,
                            width: width,
                            height: height,
                            count: count,
                            perGroup: perGroup
                        };
                        Util.showToolTip(config, viewName, viewOptions);
                    }, 150);
                    me.manage('timer', timer);
                }
            },
            mouseout: {
                preview_hide: function (e) {
                    var me = e.view;
                    var timer = me.getManaged('timer');
                    timer && clearTimeout(timer);
                    Util.hideToolTip();
                }
            }
        },
        renderer: {
            list: {
                widgetType: function (self) {
                    switch (this.widgetType) {
                    case 0:
                        return '\u5355\u54C1';
                        break;
                    case 1:
                        return '\u5E97\u94FA';
                        break;
                    case 2:
                        return '\u5173\u952E\u5B57';
                        break;
                    case 3:
                        return '\u4EBA\u7FA4\u5B9A\u5411';
                        break;
                    case 9:
                        return 'SPU\u6BD4\u4EF7';
                        break;
                    case 10:
                        return '\u540C\u7C7B\u5546\u54C1';
                        break;
                    case 11:
                        return '\u5F02\u7C7B\u5546\u54C1';
                        break;
                    case 12:
                        return '\u540C\u7C7B\u5E97\u94FA';
                        break;
                    case 4:
                        return '\u7231\u6DD8\u5B9D';
                        break;
                    case 5:
                        return '\u5145\u503C\u6846';
                        break;
                    case 6:
                        return '\u641C\u7D22\u6846';
                        break;
                    case 8:
                        return '\u6587\u5B57\u94FE';
                        break;
                    case 13:
                        return '\u805A\u5212\u7B97';
                        break;
                    case 14:
                        return '\u6574\u70B9\u805A';
                        break;
                    case 15:
                        return '\u65C5\u884C\u7EBF\u8DEF';
                        break;
                    case 16:
                        return '\u65C5\u884C\u95E8\u7968';
                        break;
                    case 17:
                        return '\u9152\u5E97';
                        break;
                    case 18:
                        return '\u7279\u4EF7\u673A\u7968';
                        break;
                    case 19:
                        return '\u5929\u732B\u6D3B\u52A8';
                        break;
                    }
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