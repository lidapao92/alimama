define('app/util/mask/mask', [
  'jquery',
  'underscore',
  'app/exts/mask/index'
], function ($, _, Mask) {
  return {
    globalMask: null,
    showMask: function (options) {
      var me = this
      var confirmCallback = options.confirmCallback
      var cancelCallback = options.cancelCallback
      if (me.globalMask) {
        me.globalMask.destroy()
      }

      me.globalMask = new Mask(options)
      // me.globalMask.options = _.extend({}, me.globalMask.options, options)
      // me.globalMask.init()
      // me.globalMask.render()

      me.globalMask.show(options)

      me.globalMask.on('confirm.mask', function(ev) {
        confirmCallback && confirmCallback(ev)
        me.globalMask.hide()
      })

      me.globalMask.on('cancel.mask', function(ev) {
        cancelCallback && cancelCallback(ev)
        me.globalMask.hide()
      })
    },
    hideMask: function () {
      var me = this
      if (me.globalMask) {
        me.globalMask.hide()
      }
    }
  }
})