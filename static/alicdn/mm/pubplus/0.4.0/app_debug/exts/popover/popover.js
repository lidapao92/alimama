define('app/exts/popover/popover', [
  'jquery',
  'underscore',
  'brix/base',
  'brix/loader',
  'app/exts/dialog/position',
  'app/exts/popover/popover.tpl',
  'css!app/exts/popover/popover.css'
], function($, _, Brick, Loader, position, template) {
  return Brick.extend({
    options: {
      placement: 'right', // top bottom left right
      align: '', // left right top bottom
      offset: {},
      width: 'auto',
      height: 'auto',
      elClass: '',

      // 是否将popover添加到body里面，默认是跟着当前节点
      appendToBody: false,

      // popover 触发类型，可选 'click', 'mouse', 'focus', 'show'
      triggerType: 'mouse',

      // 当triggerType 为 click 时， Popover 是否有toggle功能
      toggle: false,

      // 当triggerType 为 show 时，可以设置是否自动隐藏
      autoHide: false,

      // 自动隐藏的等待时间
      autoHideDelay: 3000,

      title: '',
      content: '',

      // 提示类型
      type: 'normal',

      delay: 100
    },
    init: function() {
      if (this.options.element) {
        this.element = this.options.element
      }
    },
    render: function() {
      var me = this
      var options = me.options

      me.$element = $(me.element)
      me.$relatedElement = $(_.template(template)(options))

      me.$relatedElement.css({
        width: options.width,
        height: options.height
      })

      if (options.width == 'same') {
        me.$relatedElement.width(me.$element.outerWidth())
      }

      if (options.appendToBody) {
        me.$relatedElement.appendTo($('body'))
      } else {
        me.$relatedElement.insertAfter(me.$element)
      }

      if (options.triggerType == 'mouse') {
        me.$element.hover(function() {
          me.show()
        }, function() {
          me.hide()
        })

        me.$relatedElement.hover(function() {
          clearTimeout(me._timer)
        }, function() {
          clearTimeout(me._timer)
          me.$relatedElement.hide()
        })
      } else if (options.triggerType == 'click') {
        me.$element.click(function (event) {
          if (options.toggle) {
            if (me.$relatedElement.is(':visible')) {
              me.hide()
            } else {
              me.show()
            }
          } else {
            me.show()
          }
        })
      } else if (options.triggerType == 'focus') {
        me.$element.focus(function (event) {
          me.show()
        }).blur(function (event) {
          me.hide()
        })
      } else if (options.triggerType == 'show') {
        me.show()

        if (options.autoHide) {
          setTimeout(function() {
            me.hide()
          }, options.autoHideDelay)
        }
      }
    },
    show: function() {
      clearTimeout(this._timer)
      this.$relatedElement.show()
      var offset = position(this.$element, this.$relatedElement, this.options.placement, this.options.align)
      var relatedMarginLeft = parseInt(this.$relatedElement.css('margin-left'), 10) || 0
      var relatedMarginTop = parseInt(this.$relatedElement.css('margin-top'), 10) || 0
      this.$relatedElement.offset({
        left: offset.left + relatedMarginLeft + (this.options.offset.left || 0),
        top: offset.top + relatedMarginTop + (this.options.offset.top || 0)
      })
    },
    hide: function() {
      var me = this
      clearTimeout(this._timer)
      this._timer = setTimeout(function() {
        me.$relatedElement.hide()
      }, this.options.delay)
    },
    title: function(title) {
      if (title === undefined || title === null) return this.options.title

      this.options.title = title
      this.$relatedElement.find('.popover-title').html(title)

      return this
    },
    content: function(content) {
      if (content === undefined || content === null) return this.options.content

      this.options.content = content
      this.$relatedElement.find('.popover-content').html(content)

      return this
    },
    destory: function() {
      this.$relatedElement.off()
      this.$relatedElement.remove()
      this.trigger('destory.popover')
    }
  })
})