define('app/exts/erobot/erobot', [
  'jquery',
  'underscore',
  'magix',
  'brix/base',
  'brix/event',
  'app/exts/erobot/erobot.tpl',
  'css!app/exts/erobot/erobot.css'
], function ($, _, Magix, Brick, EventManager, template) {
  var pathmap = {
    'default': 464,
    '/': 463,
    '/promo/search/index.htm': 472,
    '/manage/zhaoshang/list.htm': 465
  }

  function getSourceId(path) {
    var sourceId = pathmap[path]
    if (!sourceId) {
      sourceId = pathmap['default']
    }
    return sourceId
  }

  return Brick.extend({
    render: function() {
      var me = this
      var $el = $(me.element)
      var sourceId = getSourceId(Magix.Router.parse().path)
      $el.html(_.template(template)({
        sourceId: sourceId
      }))

      var manager = new EventManager()
      manager.delegate($el, me)

      var awRendered = false

      // 全局的anywhere只需要初始化一次
      if (window.AW && !window.AW.inited) {
        window.AW && window.AW.init({
          sourceId: getSourceId(),
          bizCode: 'PCMaMaAnyWhereWindow',
          logoWidth: 30,
          onRendered: function () {
            // 只有每次点击链接的时候才显示浮层
            if (awRendered) {
              window.AW.openDialog({
                isFirstAnswer: true
              })
            }
            awRendered = true
          }
        })
        window.AW.inited = true
      }

      Magix.Router.on('changed', function (e) {
        if (e.isPath) {
          me._refresh(e.location.path)
        }
      })
    },
    _refresh: function (pathName) {
      var me = this
      var $el = $(me.element)
      var sourceId = getSourceId(pathName)
      $el.find('.erobot-trigger').attr('sourceId', sourceId)
    },
    show: function (e) {
      e.preventDefault()
      var me = this
      var curNode = $(e.currentTarget)
      var sourceId = curNode.attr('sourceId')

      window.AW && window.AW.refresh({
        sourceId: sourceId
      })
    }
  })
})