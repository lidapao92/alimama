/*
  http://jqueryui.com/dialog
 */
define(
  'app/exts/dialog/dialog',
  [
    'jquery',
    'underscore',
    'components/base',
    'brix/loader',
    'brix/event',
    'app/exts/dialog/position',
    'app/exts/dialog/mask',
    'app/exts/dialog/dialog.tpl',
    'css!app/exts/dialog/dialog.css'
  ],
  function(
    $,
    _,
    Brix,
    Loader,
    EventManager,
    position,
    Mask,
    template
  ) {
    /*
      var Dialog = require('components/dialog')
      var content = '\
        <div class="dialog-header">\
          <h4 class="dialog-title">abc</h4>\
        </div>\
      '
      var dialog = new Dialog({
        content: content,
        modal: true,
        left: 100,
        top: 100
      })
      dialog.on('open.dialog',function(){
        debugger
      })
      dialog.open()
     */

    var TRANSITION_DURATION = 150
    var EASING = 'swing'
    var NAMESPACE = '.dialog'

    function Dialog() {
      // 支持构造函数
      if (arguments.length) {
        this.options = _.extend({}, this.options, arguments[0])
        this.init()
        this.render()
        this.fill()
      }
    }

    _.extend(Dialog.prototype, Brix.prototype, {
      options: {
        placement: 'right', // top bottom left right
        align: 'top', // left right top bottom
        left: undefined,
        top: undefined,
        width: 'auto',
        height: 'auto',
        offset: {
          left: 0,
          top: 0
        },

        content: '',

        closable: true, // 是否可关闭
        modal: false, // 是否模块对话框
        singleton: true // 是否单例模式
      },
      init: function() {
        this.$element = $(this.element || this.options.element)
        this.$manager = new EventManager('bx-')

        // 支持自定义 CSS 样式
        if (this.options.css) require('css!' + this.options.css)

        if (this.options.content.indexOf('<') === -1) this.options.content = '<div class="dialog-body">' + this.options.content + '<div>'

        return this
      },
      render: function() {
        this.$manager.delegate(this.$element, this)
        this._autoHide()
      },
      destroy: function() {
        var type = 'keyup.dialog_autohide_' + this.clientId
        $(document.body).off(type)

        if (this.$manager) this.$manager.undelegate(this.$element)

        Loader.destroy(this.$relatedElement[0])
        this.$relatedElement.remove()
        this.mask && this.mask.destroy()
      },
      fill: function() {
        var html = _.template(template)(this.options)
        this.$relatedElement = $('div.dialog.dialog-singleton')

        if (!this.options.singleton || !this.$relatedElement.length) {
          this.$relatedElement = $(html).appendTo(document.body).hide()
        }

        if (this.options.singleton) {
          this.$relatedElement
            .removeClass('dialog-top dialog-bottom dialog-left dialog-right')
            .addClass('dialog-' + this.options.placement)
            .find('.dialog-close')[
              this.options.closable ? 'removeClass' : 'addClass'
            ]('hide').end()
            .find('.dialog-content').html(this.options.content)
        }

        Loader.boot(this.$relatedElement[0])

        this.$relatedElement.css({
          width: this.options.width,
          // height: this.options.height,
          minHeight: this.options.height
        })

        if (this.options.modal) {
          if (!this.mask) {
            this.mask = new Mask()
          }
        }

        this.$manager.delegate(this.$relatedElement, this)
        return this
      },
      open: function() {
        if (!this.element &&
          this.options.element &&
          (this.options.element !== this.$element[0])
        ) this.$element = $(this.options.element)

        this.fill()

        var offset = this._offset()

        if (this.options.align == 'center') {
          offset.top -= $(window).scrollTop()

          // 居中显示
          this.$relatedElement
            .css(_.extend(offset, {position: 'fixed'}))
            .show()
        } else {
          this.$relatedElement.show()
            .stop()
            .css(
              position.start(this.$relatedElement, offset)
            )
            .animate(
              position.end(this.$relatedElement, offset),
              TRANSITION_DURATION,
              EASING
            )
        }

        if (this.options.modal) {
          this.mask.show()
        }

        this.trigger('open' + NAMESPACE)

        return this
      },
      close: function() {
        if (!this.$relatedElement || !this.$relatedElement.length) return this

        var that = this
        var offset = this._offset()

        if (this.options.align == 'center') {
          this.$relatedElement
            .hide()
        } else {
          this.$relatedElement
            .stop()
            .animate(
              position.start(this.$relatedElement, offset),
              TRANSITION_DURATION,
              EASING,
              function() {
                that.$relatedElement.hide()
              }
            )
        }

        if (this.options.modal) {
          this.mask.hide()
        }

        this.trigger('close' + NAMESPACE)
        return this
      },
      _offset: function() {
        var offset

        if (this.options.align == 'center') {
          offset = position('', this.$relatedElement)
        } else {
          offset = this.options.left !== undefined && this.options.top !== undefined ? {
            left: this.options.left,
            top: this.options.top
          } : position(this.$element, this.$relatedElement, this.options.placement, this.options.align)
        }

        offset = {
          left: offset.left + (this.options.offset.left || 0),
          top: offset.top + (this.options.offset.top || 0)
        }
        return offset
      },
      _autoHide: function() {
        var that = this
        var type = 'keyup.dialog_autohide_' + this.clientId
        $(document.body).off(type)
          .on(type, function(event) {
            if (event.keyCode === 27) that.close()
          })
      }
    })

    return Dialog
  }
)