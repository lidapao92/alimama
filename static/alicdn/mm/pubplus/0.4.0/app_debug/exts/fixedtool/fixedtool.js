define('app/exts/fixedtool/fixedtool', [
  'jquery',
  'underscore',
  'brix/base',
  'css!app/exts/fixedtool/fixedtool.css'
], function ($, _, Brick) {
  var timer = 0
  return Brick.extend({
    render: function() {
      var me = this

      setTimeout(function() {
        me.adjust()
      }, 100)
    },
    adjust: function () {
      var me = this
      var $el = $(me.element)
      var viewportWidth = $(window).width()
      var mainWidth = $('.wrap').width()

      // 有时候会取不到mainWidth，再取一次
      if (!mainWidth && timer < 2) {
        timer ++
        return setTimeout(function() {
          me.adjust()
        }, 100)
      }
      var left = (viewportWidth - mainWidth) / 2 + mainWidth
      $el.css('left', left)
    }
  })
})