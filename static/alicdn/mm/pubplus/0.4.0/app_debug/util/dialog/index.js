define('app/util/dialog/index', [
  'jquery',
  'magix',
  'underscore',
  'app/exts/dialog/dialog',
  'app/exts/dialog/position'
], function($, Magix, _, DialogView, Position) {
  return {
    globalDialog: null,

    /**
     * 全局唯一的dialog
     * @param  {object} dialogOptions 配置项
     * @param  {string} viewName      view地址
     * @param  {object} viewOptions   传递给view的参数
     * @return {object}               全局dialog的实例
     */
    show: function (dialogOptions, viewName, viewOptions) {
      var globalDialogId = 'J_global_dialog'

      var options = {
        content: '<div class="block-dialog" id="' + globalDialogId + '"><div bx-name="components/spin"></div></div>',
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

      $.extend(options, dialogOptions)

      if (!options.left) options.left = options.element.offset().left
      if (!options.top) options.top = options.element.offset().top

      this.globalDialog && this.globalDialog.destroy()

      var rootVf = Magix.Vframe.root()
      rootVf.unmountVframe(globalDialogId)

      var dialog = new DialogView(options)

      dialog.on('open.dialog', function(e) {
        // 为了loading组件垂直居中显示
        dialog.$relatedElement.find('[bx-name="components/spin"]').css({
          height: options.height + 'px',
          lineHeight: options.height + 'px'
        })

        // 让view可以拿到dialog实例
        viewOptions = _.extend(viewOptions, {
          dialog: dialog
        })

        // 渲染子view
        rootVf.mountVframe(globalDialogId, viewName, viewOptions)
      })

      dialog.on('close.dialog', function() {
        function unmountVframe() {
          rootVf.unmountVframe(globalDialogId)
        }

        if (dialog.options.align == "center") {
          unmountVframe()
        } else {
          //需要加个延时，不然dialog组件里没内容就没高度了，囧
          //dialog组件里是150毫秒，所以这里弄成200毫秒
          setTimeout(unmountVframe, 200)
        }
      })
      this.globalDialog = dialog
      this.globalDialog.open()

      return dialog
    },
    hide: function () {
      if (this.globalDialog) {
        this.globalDialog.destroy()
      }
    },
    showConfirm: function (opts) {
      var me = this
      var dialogConfig = {
        width: opts.width || 400,
        height: opts.height || 230,
        closable: opts.closable || false
      }
      var viewName = 'app/views/common/confirm'
      var viewOptions = {
        type: opts.type,
        title: opts.title,
        msg: opts.msg,
        submitMsg: opts.submitMsg || '确定',
        closeMsg: opts.closeMsg,
        closeCallback: opts.closeCallback,
        submitCallback: opts.submitCallback,
        spmc: opts.spmc,
        confirmCls: opts.confirmCls
      }
      this.show(dialogConfig, viewName, viewOptions)

      if (opts.autoHide) {
        setTimeout(function () {
          me.hide()
        }, 2000)
      }
    }
  }
})