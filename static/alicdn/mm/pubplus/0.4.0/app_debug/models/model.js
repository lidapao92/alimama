define('app/models/model', [
  'jquery',
  'underscore',
  'magix',
  'app/util/index'
], function ($, _, Magix, Util) {
  var DEFAULT = {
    ajaxSetting: {
      method: 'POST',
      dataType: 'json'
    }
  }

  return Magix.Model.extend({
    sync: function(callback) {
      var me = this
      var ajaxSetting = DEFAULT.ajaxSetting
      var formParams = me.getFormParams()
      var urlParams = me.getUrlParams()
      var url = me.get('url')
      var method = me.get('method') || ajaxSetting.method
      var dataType = me.get('dataType') || ajaxSetting.dataType
      var skipTip = me.get('skipTip') === true ? true : false
      var actionId = me.get('actionId')
      var itemId = urlParams.itemId || urlParams.auctionid || formParams.itemId || formParams.auctionid
      var blockId = urlParams.blockId || formParams.blockId

      $.extend(formParams, {
        t: (+new Date()),
        _tb_token_: Magix.local('token'),
        pvid: Magix.local('pvid')
      })

      $.ajax({
        // 转换成字符串路径
        url: Magix.toUrl(url, urlParams),
        dataType: dataType,
        data: formParams,
        type: method
      }).done(function (data, textStatus, xhr) {
        // 防爬
        if (data.status == 1111) {
          return Util.showGlobalTip('一瞬间，风起人涌，交通拥堵，请稍后重试！')
        }

        if (!data.info.ok) {
          // 其他错误
          switch (data.info.message) {
            case 'nologin':
              Magix.toLogin(true)
              break
            case 'unsafe':
              Magix.toLogin(true)
              break
            default:
              if (skipTip) {
                callback(null, data)
              } else {
                Util.showGlobalTip(data.info.message)
              }
          }
        } else {
          var pvid = data.info.pvid
          var curPageId = Util.getPageId(Magix.Router.parse().path)

          // 保存pvid用于数据统计
          if (pvid) {
            // 如果当前页面接口返回pvid解析出来的pageId和定义好的pageId不相符，就忽略掉
            // 这里有两种情况：
            // 1、当前页面通过path来定义pageId，如搜索页
            // 2、当前页面通过params来定义pageId，如频道页
            // 后端返回的pvid格式为：
            // 10_10.121.30.28_123_1234556676 
            // pageId_ip_随机数_时间戳
            if ($.isPlainObject(curPageId)) {
              _.each(curPageId, function (v, k) {
                if (v == pvid.split('_')[0]) {
                  Magix.local('pvid', pvid)
                }
              })
            } else {
              if (curPageId == pvid.split('_')[0]) {
                Magix.local('pvid', pvid)
              }
            }
          }

          callback(null, data)
        }
      }).fail(function (xhr, textStatus, err) {
        // 没权限跳回登录页
        if (xhr.status === 403) {
          Magix.toLogin(true)
        }
        Util.showGlobalTip(err || '系统错误，请重试！')
      })

      // 每次请求后端接口都会向黄金令箭发一个请求
      if (actionId) {
        Util.sendGhostGoldlog({
          // 涉及到宝贝的时候有itemId
          itemId: itemId,
          // blockId用于区分更细粒度的所属区块位置
          blockId: blockId,
          actionId: actionId
        })
      }
    }
  })
})