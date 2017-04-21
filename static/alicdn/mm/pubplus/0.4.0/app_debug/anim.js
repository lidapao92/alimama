define('app/anim', [
  'jquery'
], function($, Anim) {
  $('body').on('animationend', '.endtext', function(e) {
    var $current = $(e.currentTarget)

    $current
      .attr('data-text', $current.html())
      .html('')

    if ($current.attr('data-loading')) {
      $current.addClass('bx-anim-btn-loading')

      //反馈抖动提示
      setTimeout(function() {
        $current
          .removeClass('bx-anim-btn-loading')
          .parent().addClass('bx-anim-btn-shake endshake')

        $current.html('<span class="brixfont f14">&#xe61d;</span>')
      }, 2000)
    } else {
      $current.parent().addClass('bx-anim-btn-shake endshake')
      $current.html('<span class="brixfont f14">&#xe61d;</span>')
    }

    $current.removeClass('bx-anim-btn-text endtext')
  })

  $('body').on('animationend', '.endshake', function(e) {
    var $current = $(e.currentTarget)
    var $span = $current.find('span')

    $span.html($span.attr('data-text'))
    $current.removeClass('bx-anim-btn-shake endshake')
  })
})