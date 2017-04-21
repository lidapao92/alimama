define('app/ini', [
  'jquery',
  'magix',
], function($, Magix) {
  var MainView = 'app/views/layout/default'
  var Routes = {
      'app/views/layout/search': [
        {path: '/promo/search/index.htm'}
      ],
      'app/views/layout/channel': [
        {path: '/promo/item/channel/index.htm'}
      ],
      'app/views/layout/content': [
        {path: '/index.htm'},
        {path: '/'}
      ],
      'app/views/layout/manage': [
        {path: '/promo/selection/list.htm', isLogin: true},
        {path: '/promo/selection/detail.htm', isLogin: true},
        {path: '/manage/selection/list.htm', isLogin: true},
        {path: '/manage/selection/detail.htm', isLogin: true},
        {path: '/manage/zhaoshang/list.htm', isLogin: true},
        {path: '/manage/zhaoshang/detail.htm', isLogin: true},
        {path: '/manage/zhaoshang/create.htm', isLogin: true}
      ],
      'app/views/layout/default': [
        {path: '/manage/user/privilege.htm', isLogin: true}
      ],
      'app/views/layout/trade': [
        {path: '/promo/item/oe_channel/index.htm'}
      ],
      'app/views/layout/empty':[
        {path:'/protocol/tblm_sdk.htm', isLogin: true}
      ],
      'app/views/layout/talent':[
        {path:'/talent/index.htm', isLogin: true}
      ]
    }

  return {
    defaultView: MainView,
    defaultPath: '/index.htm',
    unfoundView: 'app/views/common/404',
    tagName: 'div',
    extensions: [
      'app/view',
      'app/adjust',
      'app/login',
      'app/vclick',
      'app/anim'
    ],
    routes: function(pathname) {
      if (!$.isEmptyObject(Routes)) {
        var s
        $.each(Routes, function(k, item) {
          $.each(item, function(i, v) {
            if (v.path == pathname) {
              if (v.isLogin) {
                Magix.checkToLogin(true)
              }
              s = k
              return false
            }
          })
          if (s) return false
        })
        if (s) return s
        return this.unfoundView
      }
      return this.defaultView
    },
    error: function(e) {
      if (window.JSTracker) {
        window.JSTracker.error(e.message)
      } else if (window.console) {
        window.console.error(e.stack)
      }
    }
  }
})