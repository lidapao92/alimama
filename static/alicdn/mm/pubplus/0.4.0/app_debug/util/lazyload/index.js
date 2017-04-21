define('app/util/lazyload/index', [
  'jquery',
  'underscore',
  'magix'
], function($, _, Magix) {
  var LazyRunFlag = '~^'

  return {
    list: [],
    /**
     * 矩形相交
     * @param  {RectangleInfo} rect1
     * @param  {RectangleInfo} rect2
     * @return {Boolean}
     */
    intersect: function(rect1, rect2) {
      return Math.abs(rect1.x - rect2.x) <= (rect1.hWidht + rect2.hWidht) &&
        Math.abs(rect1.y - rect2.y) <= (rect1.hHeight + rect2.hHeight)
    },
    /**
     * 获取DOM的中心点信息
     * @param  {String} id id
     * @return {RectangleInfo} 中心点描述信息
     */
    getCenter: function(id) {
      var node = $(id)
      var offset = node.offset() || {
        left: -999,
        top: -999
      }
      var halfWidth = node.width() / 2
      var halfHeight = node.height() / 2
      return {
        hWidht: halfWidth,
        hHeight: halfHeight,
        x: offset.left + halfWidth,
        y: offset.top + halfHeight
      }
    },
    /**
     * 获取窗口中心点信息
     * @param  {[type]} threshold [description]
     * @return {[type]} [description]
     */
    viewportCenter: function(threshold) {
      threshold |= 0
      threshold /= 2
      var viewportHalfWidth = $(window).width() / 2
      var viewportHalfHeight = $(window).height() / 2
      return {
        hWidht: viewportHalfWidth + threshold,
        hHeight: viewportHalfHeight + threshold,
        x: viewportHalfWidth + $(window).scrollLeft(),
        y: $(window).scrollTop() + viewportHalfHeight
      }
    },
    /**
     * 添加加载荐
     * @param {String} zone 所属DOM节点
     * @param {Array} items 待加载的子项
     * @param {Integer} threshold
     * @param {Function} callback
     */
    add: function(zone, items, threshold, callback) {
      var me = this
      var list = me.list
      list.push({
        zone: zone,
        items: items,
        callback: callback,
        threshold: threshold
      })
      me.start()
    },
    /**
     * 加载子项
     * @param  {LazyLoadInfo} one
     * @param  {RectangleInfo} vCenter 窗口中心点
     * @return {Boolean}
     */
    loadItems: function(one, vCenter) {
      var items = one.items
      if (items === LazyRunFlag) {
        one.items = null
        Magix.toTry(one.callback, one)
      } else {
        var ilen = items.length
        var me = this
        while (ilen--) {
          var item = items[ilen]
          var itemCenter = me.getCenter(item)
          if (me.intersect(vCenter, itemCenter)) {
            items.splice(ilen, 1)
            Magix.toTry(one.callback, $(item),one )
          }
        }
      }
    },
    /**
     * 加载全部或某个区域
     * @param  {String} [zone]
     */
    load: function(zone) {
      var me = this
      var list = me.list
      if (list.length) {
        var vCenter = me.viewportCenter(140)
        for (var i = 0; i < list.length; i++) {
          var one = list[i]
          if (one.threshold) vCenter = me.viewportCenter(one.threshold)
          if (!zone || one.zone == zone) {
            if (!one.items || !one.items.length) {
              list.splice(i--, 1)
            } else {
              var zoneCenter = me.getCenter('#' + one.zone)
              if (me.intersect(vCenter, zoneCenter)) {
                me.loadItems(one, vCenter)
              }
            }
          }
        }

      }
      if (!list.length) {
        //console && console.log('stop')
        me.stop()
      }
    },
    /**
     * 开始监听执行
     */
    start: function() {
      var me = this
      if (!me.started) {
        me.started = true
        //ihpone4 滚动到懒加载的地方，刷新，浏览器滚动条先在顶部，后到懒加载的地方，但没触发scroll事件
        me.timer = setInterval(function() {
          if ($(window).scrollTop() > 0) {
            clearInterval(me.timer)
            me.load()
          }
        }, 1000)
        var resizeTimer
        $(window).on('scroll resize orientationchange', me.handler = function() {
          clearInterval(me.timer)
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(function() {
            me.load()
          }, 30)
        })
      }
    },
    /**
     * 停止监听
     * @return {[type]} [description]
     */
    stop: function() {
      var me = this
      me.started = false
      clearInterval(me.timer)
      $(window).off('scroll resize orientationchange', me.handler)
    }
  }
})