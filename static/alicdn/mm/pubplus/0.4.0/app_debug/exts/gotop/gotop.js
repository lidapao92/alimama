define('app/exts/gotop/gotop', [
  'jquery',
  'underscore',
  'brix/base',
  'brix/event',
  'css!app/exts/gotop/gotop.css'
], function ($, _, Brick, EventManager) {
  var TMPL = '<div class="gotop pubfont icon-zhankaishouqi" bx-click="gotop" title="返回顶部"></div>'

  return Brick.extend({
    render: function() {
      var me = this
      var $el = $(me.element)
      $el.html(TMPL)

      var manager = new EventManager()
      manager.delegate($el, this)

      me.handle = function () {
        me.scroll()
      }

      me.scroll()
      $(window).on('scroll', me.handle)
    },
    gotop: function () {
      $('body,html').animate({
        scrollTop: 0
      }, 250)
    },
    scroll: function () {
      var me = this
      var $el = $(me.element)
      var elHeight = $el.outerHeight()
      var viewportHeight = $(window).height()
      var scrollTop = $(window).scrollTop()
      var $gotopNode = $el.find('.gotop')

      if (scrollTop > viewportHeight) {
        $gotopNode.show()
      } else {
        $gotopNode.hide()
      }
    },
    destroy: function() {
      var me = this
      $(window).off('scroll', me.handle)
    }
  })
})