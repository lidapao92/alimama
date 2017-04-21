define('app/util/anim/anim', function() {
  return {
    btnAnim: function ($target, fn) {
      var $span = $target.find('span')
      
      $span.addClass('bx-anim-btn-text endtext')

      // 因为所有动画完成大约需要1秒钟时间
      fn && setTimeout(function () {
        fn()
      }, 1000)
    }
  }
})
