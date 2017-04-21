KISSY.add('app/util/spmlog/spmlog', function(S, Node, Pathmap) {
  var $ = Node.all

  return {
    // 前端生成pvid
    genPVID: function (pathname) {
      if (!Pathmap[pathname]) {
        return Magix.local('pvid', '')
      }

      var pvid = [
        Pathmap[pathname].pageId,
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
      var actionid = opts.actionid
      var pvid = Magix.local('pvid')
      if (!actionid) return

      var $root = $('#magix_vf_root')
      var $ghostClickEl = $('<a href="javascript:void(0);" data-spm-click="gostr=/tblm.88.1;locaid=' + locaid + ';pvid=' + pvid + '&actionid=' + actionid + '"></a>')
      $root.append($ghostClickEl)
      this.triggerMouseEvent($ghostClickEl[0], 'mousedown')
      $ghostClickEl.remove()
    }
  }
}, {
  requires: [
    'node',
    'app/util/spmlog/pathmap'
  ]
})