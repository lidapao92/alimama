Magix.tmpl("app/views/header","<div class=header> <div class=logo> <i class=\"iconfont-pub logo-1\">&#xe61d;</i> <i class=\"iconfont-pub logo-2\">&#xe61c;</i> </div> <div bx-name=\"alimama_sitenav\" bx-config=\"{mode:'simple'}\"></div> <div bx-tmpl=\"head-guide\" bx-datakey=\"hasShowGuide\"> {{^hasShowGuide}} <div class=chg-guide-img1> <span class=close-icon mx-click=close data-spm-click=\"gostr=/tblm.88.1;locaid=d8f7885d2\"></span> <span class=close-btn mx-click=close data-spm-click=\"gostr=/tblm.88.1;locaid=d731ac8a3\"></span> </div> {{/hasShowGuide}} </div> </div>");
KISSY.add('app/views/header', function (S, Node, View, MM, Util) {
    var $ = Node.all;
    return View.extend({
        render: function () {
            var me = this;
            var hasShowGuide = S.Cookie.get('account-path-guide-s1');
            me.setViewPagelet({ hasShowGuide: hasShowGuide }, function () {
                me._rendered();
            }, function () {
                me._refreshSiteNav();
            });
        },
        _rendered: function () {
            var me = this;
            var UserInfo = window.UserInfo;
            if (!window.MMSiteNav) {
                window.MMSiteNav = {};
            }
            window.MMSiteNav['afterMainNavRender'] = function () {
                $('.login-menu').append([
                    '<li class="menu menu-account">',
                    '<div class="menu-hd">',
                    '<a href="' + window.UserInfo.pubHost + '/myunion.htm">\u6211\u7684\u8054\u76DF</a> ',
                    '<em class="top-nav-down">&#58880</em>',
                    '</div>',
                    '<div class="menu-bd">',
                    '<div class="menu-bd-panel-wrap">',
                    '<div class="menu-bd-panel">',
                    '<ul class="platform-list">',
                    '<li><a href="/manage/selection/list.htm">\u6211\u7684\u9009\u54C1\u5E93</a></li>',
                    '<li><a href="/manage/zhaoshang/list.htm">\u6211\u7684\u62DB\u5546\u9700\u6C42</a></li>',
                    '<li><a href="#!/report/site/site">\u6548\u679C\u62A5\u8868</a></li>',
                    '<li><a href="' + window.UserInfo.wwwHost + '/account/overview.htm" target="_blank">\u7ED3\u7B97\u4E2D\u5FC3</a></li>',
                    '</ul>',
                    '</div>',
                    '</div>',
                    '</div>',
                    '</li>',
                    '<li class="menu menu-backhome">',
                    '<div class="menu-hd">',
                    '<a href="/">\u8FD4\u56DE\u8054\u76DF\u9996\u9875</a> ',
                    '</div>',
                    '</li>'
                ].join(''));
                $('#J_nav_help').attr('href', 'http://help.alimama.com/#!/u/index');
                $('#J_nav_rule').attr('href', 'http://rule.alimama.com/#!/announce/business/announce-list?id=8307063');
                me._refreshSiteNav();
            };
            window.MMSiteNav['afterProductListRender'] = function () {
                $('#J_products_selected_pannel').prepend('<ul class="menu-info-list"><li>\u8D26\u6237ID\uFF1A<strong>' + UserInfo.memberid + '</strong></li><li>\u8D26\u6237\u7B49\u7EA7\uFF1A' + Util.getTkLevel(UserInfo.tkMemberRank) + '</li></ul>');
            };
        },
        _refreshSiteNav: function () {
            var me = this;
            var loc = me.location;
            var pn = loc.path;
            var $backhome = $('.menu-backhome');
            if (pn == '/') {
                $backhome.hide();
            } else {
                $backhome.show();
            }
        },
        events: {
            click: {
                close: function (e) {
                    e.halt();
                    var me = e.view;
                    var pagelet = me.getManaged('pagelet');
                    S.Cookie.set('account-path-guide-s1', true, 365 * 10);
                    pagelet.setChunkData('hasShowGuide', true);
                }
            }
        }
    });
}, {
    requires: [
        'node',
        'mxext/view',
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
        'magix/vom',
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});