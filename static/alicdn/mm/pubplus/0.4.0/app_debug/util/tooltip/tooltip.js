define('app/util/tooltip/tooltip', [
  'jquery',
  'magix',
  'underscore',
  'app/exts/dialog/dialog'
], function($, Magix, _, DialogView, Position) {
  return {
    globalTooltip: null,

    /**
     * 全局唯一的dialog
     * @param  {object} tooltipConfig 配置项
     * @param  {string} viewName      view地址
     * @param  {object} viewOptions   传递给view的参数
     * @return {object}               全局tooltip的实例
     */
    showTooltip: function (tooltipConfig, viewName, viewOptions) {
      var globalToolId = 'J_tooltip_dialog'

      var options = {
        content: '<div class="block-tool-tip" id="' + globalToolId + '"></div>',
        width: 500,
        modal: true,
        element: $("#magix_vf_main"),
        align: 'center',
        placement: 'top',
        offset: {
          left: 0,
          top: 0
        }
      }

      $.extend(options, tooltipConfig)

      if (!options.left) options.left = options.element.offset().left
      if (!options.top) options.top = options.element.offset().top

      this.globalToolTip && this.globalToolTip.destroy()

      var rootVf = Magix.Vframe.root()
      rootVf.unmountVframe(globalToolId)

      var tooltip = new DialogView(options)

      tooltip.on('open.dialog', function(e) {
        rootVf.mountVframe(globalToolId, viewName, viewOptions)
      })

      tooltip.on('close.dialog', function() {
        rootVf.unmountVframe(globalToolId)
      })
      this.globalToolTip = tooltip
      this.globalToolTip.open()

      return tooltip
    },
    hideTooltip: function () {
      if (this.globalToolTip) {
        this.globalToolTip.destroy()
      }
    }
  }
})