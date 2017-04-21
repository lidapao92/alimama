define('app/views/common/sitenav', [
  'jquery',
  'underscore',
  'magix',
  'app/util/index'
], function($, _, Magix, Util) {
   return Magix.View.extend({tmpl:"<div class=sitenav> <div class=\"sitenav-bd wrap\" bx-name=\"components/sitenav\"></div> </div>",    init: function() {
      var me = this
      me.observeLocation({
        path: true
      })
    },
    render: function() {
      var me = this
      this.data = this.data || {}

      me.setView(function () {
        me._extendSiteNav()
      }).then(function () {
        me._refreshSiteNav()
      })
    },
    _extendSiteNav: function () {
      var me = this

      if (!window.MMSiteNav) {
        window.MMSiteNav = {}
      }

      window.MMSiteNav['afterMainNavRender'] = function () {
        $('.login-menu').append([
          '<li class="menu menu-account">',
            '<div class="menu-hd">',
              '<a href="//' + Magix.local('pubHost') + '/myunion.htm">我的联盟</a> ',
              '<em class="top-nav-down">&#58880</em>',
            '</div>',
            '<div class="menu-bd">',
              '<div class="menu-bd-panel-wrap">',
                '<div class="menu-bd-panel">',
                  '<ul class="platform-list">',
                    '<li><a href="/manage/selection/list.htm">我的选品库</a></li>',
                    '<li><a href="/manage/zhaoshang/list.htm">我的招商需求</a></li>',
                    '<li><a href="//' + Magix.local('pubHost') + '/myunion.htm#!/report/site/site" data-login="true">效果报表</a></li>',
                    '<li><a href="http://' + Magix.local('wwwHost') + '/account/overview.htm" target="_blank">结算中心</a></li>',
                  '</ul>',
                '</div>',
              '</div>',
            '</div>',
          '</li>',
          '<li class="menu menu-backhome">',
            '<div class="menu-hd">',
              '<a href="/">返回联盟首页</a> ',
            '</div>',
          '</li>'
        ].join(''))
        $('#J_nav_help').attr('href', 'http://help.alimama.com/#!/u/index')
        $('#J_nav_rule').attr('href', 'http://rule.alimama.com/#!/announce/business/announce-list?id=8307063')

        me._refreshSiteNav()
      }
      window.MMSiteNav['afterProductListRender'] = function () {
        $('#J_products_selected_pannel').prepend([
          '<ul class="menu-info-list">',
            '<li>账户ID：<strong>' + Magix.local('memberid') + '</strong></li>',
            '<li>账户等级：' + Util.getTkLevel(Magix.local('tkMemberRank')) + '</li>',
          '</ul>'
        ].join(''))
      }
    },
    _refreshSiteNav: function () {
      var me = this
      var loc = me.location
      var pn = loc.path
      var $backhome = $('.menu-backhome')

      if (pn == '/') {
        $backhome.hide()
      } else {
        $backhome.show()
      }
    }
  })
})