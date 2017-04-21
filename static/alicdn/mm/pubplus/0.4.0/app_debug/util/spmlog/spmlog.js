define('app/util/spmlog/spmlog', [
  'jquery',
  'magix',
  'app/util/spmlog/pathmap'
], function($, Magix, Pathmap) {
  return {
    getPageId: function (pathname, subPath) {
      if (!Pathmap[pathname]) return

      var pageId

      if (subPath) {
        pageId = Pathmap[pathname]['pageId'][subPath]
      } else {
        pageId = Pathmap[pathname]['pageId']
      }
        
      return pageId
    },
    upSPMB: function (pathname, subPath) {
      var pageId = this.getPageId(pathname, subPath)

      if (!pageId) return

      $('body').attr('aplus-ab', pageId)
    },
    // 发送PV日志
    sendPV: function (pathname, subPath) {
      var pageId = this.getPageId(pathname, subPath)

      if (!pageId) return
      window.goldlog && window.goldlog.sendPV({
        page_id: pageId
      })
    },
    // 前端生成pvid
    genPVID: function (pathname, subPath) {
      var pageId = this.getPageId(pathname, subPath)

      if (!pageId) return

      var pvid = [
        pageId,
        Magix.local('ip'),
        parseInt(Math.random() * 9999),
        new Date().getTime()
      ].join('_')

      Magix.local('pvid', pvid)
    },
    // 发送虚拟的黄金令箭
    // 比如在不能埋点的组件需要发黄金令箭的时候可以手动调用一下
    sendGhostGoldlog: function (opts) {
      var locaid = opts.locaid || new Date().getTime()
      var actionId = opts.actionId
      var itemId = opts.itemId
      var blockId = opts.blockId
      var t = new Date().getTime()
      var pvid = Magix.local('pvid')
      var params = 't=' + t + '&pvid=' + pvid + '&actionid=' + actionId

      if (!actionId) return

      if (itemId) {
        params += '&itemid=' + itemId
      }

      if (blockId) {
        params += '&blockid=' + blockId
      }

      var $root = $('#magix_vf_root')
      var $ghostClickEl = $('<a href="javascript:void(0);" data-spm-click="gostr=/alimama.11;locaid=' + locaid + ';' + params + '"></a>')
      $root.append($ghostClickEl)
      this.triggerMouseEvent($ghostClickEl[0], 'mousedown')
      $ghostClickEl.remove()
    }
  }
})