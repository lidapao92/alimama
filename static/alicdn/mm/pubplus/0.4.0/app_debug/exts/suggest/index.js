define('app/exts/suggest/index', [
  'jquery',
  'underscore',
  'components/suggest',
  'brix/loader'
], function($, _, Suggest, Loader) {
  var NAMESPACE = '.suggest'
  var NAMESPACE_INTERNAL = '.internal'

  function inherit(A, B) {
    var F = function(){}
    F.prototype = B.prototype
    var AP = new F()
    A.superclass = B.prototype
    A.prototype = _.extend(AP, A.prototype)
    A.prototype.constructor = A
  }
  var NAMESPACE = '.suggest'
  var NAMESPACE_INPUT = '.input'
  var NAMESPACE_DONE = '.done'
  var NAMESPACE_INTERNAL = '.internal'

  function ExSuggest(){}
  ExSuggest.prototype = {
    init: function() {
      var self = this
      self._handlerHooks['13'] = function(event, items, active, index){
        self._select(items, active, index)
      }
    },
    _select: function(items, active, index) {
      // _select()
      if (!items) {
        var mapped = this._items()
        items = mapped.items
        active = mapped.active
        index = mapped.index
      }

      var value =  this.$element.val()
      if (active.length) {
        value = $.trim(active.text())
        this.$element.val(value)
      }

      var type = 'change' + NAMESPACE + NAMESPACE_DONE
      var event = $.Event(type, {
        target: this.element
      })
      this.trigger(event, value)

      // TODO 自动在组件原始节点上触发 change 事件
      // this.$element.trigger('change')

      this.close().focus()

      return this

    },
    render: function() {
      var self = this
      ExSuggest.superclass.render.apply(self,arguments)
      self.on('change.suggest.input', function(event, value) {
        $.ajax({
          url: '//suggest.taobao.com/sug',
          data: {
            code: "utf-8",
            q: value
          },
          async: true,
          dataType: 'jsonp',
          jsonp: "callback"
        }).then(function(data) {
          self.data(
            data.result
            //_.filter(data.result, function(item, index){
            //  return ('' + item[0]).toLowerCase().indexOf(value.toLowerCase()) !== -1
            //})
          )
        })
      })
    },
    _bindEvent: function() {
      var self = this
      ExSuggest.superclass._bindEvent.apply(self, arguments)
      self.$menu.on('mouseover' + NAMESPACE + NAMESPACE_INTERNAL, function(e){
        var items = self._items()
        var indx = items.all.index($(e.target))
        if (indx + 1) {
          self._moveTo(items.all, items.active, indx)
        }
      })
    },
    _highlight: function(item, value) {
      if (!value) return item

      var value_re = new RegExp(value, 'ig')
      return ('' + item[0]).replace(value_re, function(matched) {
        return '<span class="highlight">' + matched + '</span>'
      })
    },
    _fill: function(data) {
      ExSuggest.superclass._fill.apply(this, arguments)
      this.$menu
        .find('> li:first-child').removeClass('active')

      return this
    }
  }
  inherit(ExSuggest, Suggest)
  return ExSuggest
})
