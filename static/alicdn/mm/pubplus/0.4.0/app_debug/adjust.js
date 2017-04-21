define('app/adjust', [
  'jquery',
  'magix'
], function($, Magix) {
  var body = $('body')

  function _detect() {
    if (body.width() < 1190) {
      window.PUB_WRAP_WIDTH = 1000
      body.addClass('body1000')
    } else {
      window.PUB_WRAP_WIDTH = 1190
      body.removeClass('body1000')
    }
  }
  _detect()
  $(window).on('resize', _detect)
})