/**
 * 项目启动文件
 */

// 全局变量
UserInfo = {}

KISSY.use('cookie', function (S, cookie) {
  S.mix(UserInfo, {
    _tb_token_: cookie.get('_tb_token_') || 'test'
  })
})

// 配置上传组件
KISSY.config({
  packages: [
    {
      name: 'kg',
      path: '//g.alicdn.com/kg/',
      charset: 'utf-8',
      ignorePackageNameInUri: true
    }
  ]
})

// 登陆判断
KISSY.ajax({
  url: '/common/getUnionPubContextInfo.json',
  dataType: 'json'
}).then(function (resp) {
  var data = resp[0].data

  // 区分测试环境和线上环境
  if (data.env == 'test') {
    UserInfo.pubHost = 'http://pub.alimama.net'
    UserInfo.wwwHost = 'http://www.alimama.net'
    UserInfo.advHost = 'http://ad.alimama.net'
  } else {
    UserInfo.pubHost = 'http://pub.alimama.com'
    UserInfo.wwwHost = 'http://www.alimama.com'
    UserInfo.advHost = 'http://ad.alimama.com'
  }

  // 未登录则跳转到统一登陆页
  if (data.noLogin) {
    location.href = data.loginUrlPrefix + encodeURIComponent(location.href)
  }

  // 没有权限则跳转到pub首页
  if (data.hasPubPermission == 0) {
    location.href = UserInfo.pubHost
  }

  window.imgUrlPrefix = data.imgUrlPrefix
  KISSY.mix(UserInfo, data)

  KISSY.use('magix/magix', function(){
    Magix.local('ip', data.ip)
  })

  // 启动 Magix
  Magix.start({
    appHome: window.TBCDN,
    appCombine: true,
    iniFile: 'app/ini',
    extensions: ['app/extview'],
    debug: window.DEBUG
  })

  // 淘客等级信息插入失败
  if (data.tkMemberRank == -1) {
    KISSY.use('app/util/util', function (S, Util) {
      Util.showGlobalTip('系统错误，请刷新')
    })
  }

  // feedback
  KISSY.getScript('http://g.tbcdn.cn/mm/fbsdk/1.0.0/feedback.min.js', function () {
    Feedback.config({
      nickname: data.nickname,
      forms: [{
        id: 13
      }]
    })
  })
})