define(
  'app/exts/dialog/mask',
  [
    'jquery',
    'underscore',
    'brix/base',
    'brix/event',
    'css!app/exts/dialog/mask.css'
  ],
  function($, _, Brick, EventManager) {
    var isOn = 0
    var start_index = 0
    var idArr = []
    return Brick.extend({
      constructor: function() {
        // if (arguments.length) {
        //   this.options = _.extend({}, this.options, arguments[0])
        // }
        // this.render()
        this._id = start_index++
      },
      options: {
        zIndex: 99998
      },
      render: function() {
        this.$mask = $('<div class="dialog-mask" bx-click="click"></div>').css('z-index', this.options.zIndex).hide()
          .appendTo(document.body)

        var manager = new EventManager()
        manager.delegate(this.$mask, this)
      },
      show: function () {
        this.$mask.show()
        if(idArr.indexOf(this._id) === -1){
          idArr.push(this._id)
        }
        this._toggleScroll()
      },
      hide: function () {
        this.$mask.hide()
        var index = idArr.indexOf(this._id)
        if(index + 1){
          idArr.splice(index, 1)
        }
        this._toggleScroll()
      },
      _toggleScroll: function(isAdd){
        if(isOn && !idArr.length){
          $('html').css({
            'overflow': 'auto',
            'position': 'static',
            'margin-right': '0'
          })
          isOn = 0
        }
        if(!isOn && idArr.length){
          $('html').css({
            'overflow': 'hidden',
            'position': 'relative',
            'margin-right': this.getScrollbarWidth() + 'px'
          })
          isOn = 1
        }
      },
      click: function (e) {
        this.trigger('click')
      },
      getScrollbarWidth: function () {
        if (!this.scrollBarWidth) {
          var $test = $('<div></div>')
          $test.css({
            width: '100px',
            height: '1px',
            'overflow-y': 'scroll'
          })

          $('body').append($test)
          this.scrollBarWidth = $test[0].offsetWidth - $test[0].clientWidth
          $test.remove()
        }
        return this.scrollBarWidth
      },
      destroy: function () {
        var index = idArr.indexOf(this._id)
        if(index + 1){
          idArr.splice(index, 1)
        }
        this._toggleScroll()
        this.$mask.remove()
      }
    })
  }
)