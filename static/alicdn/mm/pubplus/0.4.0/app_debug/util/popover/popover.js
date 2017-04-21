define('app/util/popover/popover', [
  'jquery',
  'underscore',
  'magix',
  'app/exts/popover/popover'
], function($, _, Magix, Popover) {
  return {
    showPopover: function (options, viewName, viewOptions) {
      var popoverId = 'popover'

      options = _.extend({
        content: '<div id="' + popoverId + '"></div>',
        triggerType: 'show',
        type: 'normal',
        placement: 'bottom',
        align: 'left',
        width: 200
      }, options)
      
      var popover = this.popover = new Popover(options)
      // 最新版本的brix内部帮我们调了下面两个方法
      // popover.init(options)
      // popover.render()
      
      if (viewName) {
        var rootVf = Magix.Vframe.root()
        popover.on('destory.popover', function() {
          rootVf.unmountVframe(popoverId)
        })
        rootVf.mountVframe(popoverId, viewName, viewOptions)
      }
    },
    hidePopover: function () {
      if (this.popover) {
        this.popover.destory()
        this.popover = null
      }
    },
    showErrorTip: function (options) {
      var popover = $.data(options.element[0], 'errortip')

      if (popover) {
        this.hideErrorTip(options)
      }

      options = _.extend({
        triggerType: 'show',
        type: 'error',
        placement: 'bottom',
        align: 'left',
        width: 200
      }, options)
      
      var popover = new Popover(options)
      // popover.init(options)
      // popover.render()

      $.data(options.element[0], 'errortip', popover)
    },
    hideErrorTip: function (options) {
      var popover = $.data(options.element[0], 'errortip')

      if (popover) {
        popover.destory()
        $.removeData(options.element[0], 'errortip')
      }
    }
  }
})