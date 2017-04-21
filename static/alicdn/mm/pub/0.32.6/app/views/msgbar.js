Magix.tmpl("app/views/msgbar","<div class=message-bar> <div class=message-trigger mx-click=show data-spm-click=\"gostr=/tblm.88.1;locaid=de8775885\"> <i class=iconfont-pub>&#xf0104;</i> </div> <div class=message-panel> <div class=hd> <a href=\"#\" class=close mx-click=hide data-spm-click=\"gostr=/tblm.88.1;locaid=da3a0ef16\">隐藏</a> <h3>公告</h3> </div> <div class=bd> <ul> {{#list}} <li> <span class=publish-time>[{{publishTime}}]</span> <a href=\"#\" class=title title=\"{{title}}\" mx-click=\"jump{id:{{title}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d0fe18e00\">{{title}}</a> </li> {{/list}} {{^list}} <li> 暂无公告 </li> {{/list}} </ul> </div> </div> </div>");
KISSY.add('app/views/msgbar', function (S, View, Node, JSON, Cookie, MM) {
    var $ = Node.all;
    var cookieKey = 'pub-message-center';
    var expireDate = 1;
    return View.extend({
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([{
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/message.html',
                        encode: 'utf-8'
                    }
                }], function (MesModel) {
                var list = MesModel.get('data').jsonString;
                list = JSON.parse(list);
                list.sort(function (a, b) {
                    return a.order - b.order;
                });
                me.setViewPagelet({ list: list.slice(0, 5) }, function () {
                    me._component();
                });
            }));
        },
        _component: function () {
            var isShow = Cookie.get(cookieKey);
            if (!isShow) {
                this._show();
            }
        },
        _show: function () {
            var messageTrigger = $('.message-trigger');
            var messagePanel = $('.message-panel');
            messageTrigger.animate({ right: -44 }, {
                duration: 0.35,
                easing: 'backIn',
                complete: function () {
                    messagePanel.animate({ right: 0 }, {
                        duration: 0.25,
                        easing: 'easeOut'
                    });
                }
            });
        },
        _hide: function () {
            var messageTrigger = $('.message-trigger');
            var messagePanel = $('.message-panel');
            var isShow = Cookie.get(cookieKey);
            messagePanel.animate({ right: -330 }, {
                duration: 0.25,
                easing: 'easeOut',
                complete: function () {
                    messageTrigger.animate({ right: 0 }, {
                        duration: 0.25,
                        easing: 'easeOut'
                    });
                    if (!isShow) {
                        Cookie.set(cookieKey, 1, expireDate);
                    }
                }
            });
        },
        events: {
            click: {
                show: function (e) {
                    var me = e.view;
                    me._show();
                },
                hide: function (e) {
                    e.halt();
                    var me = e.view;
                    me._hide();
                },
                jump: function (e) {
                    e.halt();
                    var me = e.view;
                    me._hide();
                    me.navigate('/myunion/message_detail?id=' + e.params.id);
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'node',
        'json',
        'cookie',
        'app/models/modelmanager',
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
        'app/util/util',
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
        'app/util/spmlog/pathmap'
    ]
});