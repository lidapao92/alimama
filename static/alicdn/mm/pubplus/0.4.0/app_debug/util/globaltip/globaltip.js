define('app/util/globaltip/globaltip', [
  'jquery',
  'underscore',
  'app/exts/globaltip/index'
], function ($, _, Globaltip) {
  return {
    showGlobalTip: function (content, options) {
      options = options || {}
      options.content = content
      Globaltip.show(options)
    },
    hideGlobalTip: function () {
      Globaltip.hide()
    }
  }
})