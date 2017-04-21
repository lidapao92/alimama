define('app/views/common/header_search', [
  'jquery',
  'underscore',
  'magix',
  'brix/loader',
  'app/util/index'
], function($, _, Magix, Loader, Util) {
  var channelMap = Util.getChannelMap()

   return Magix.View.extend({tmpl:"<div class=\"header header-search clearfix\" t-class:header-search-tag=typeTagName> <div class=\"head-bd wrap\"> <a class=head-logo href=\"/\" data-spm-click=\"gostr=/alimama.11;locaid=d34b1f9fa\" vclick-ignore=true></a> <div class=channel-dropdown _ie_fix_ mx-mouseenter=channelPanelShow mx-mouseleave=channelPanelHide> <div class=trigger> <span class=\"text color-d\">更多主题</span> <span class=\"pubfont icon-xiala\"></span> </div> <div class=panel> <div class=\"group clearfix\" t-for=\"(key, item) in channelList\"> <div class=option t-for=\"(subKey, subItem) in item\" mx-click=\"channel({{subItem.id}})\" data-spm-click=\"gostr=/alimama.11;locaid=d412b82c7{{subItem.id}}\"> <span t-class:selected=\"channelLabel == subItem.label\">{{subItem.label}}</span> </div> </div> </div> </div> <div class=\"input-group clearfix\"> <div class=input-group-input> <input type=text autofocus=true class=\"search-inp input\" id=q value=\"{{q}}\" placeholder=\"请输入您要搜索的商品名称或链接\" autocomplete=off bx-name=\"app/exts/suggest/index\" /> {{#unless(typeTagName)}} <span class=\"pubfont del icon-hao\" mx-click=delKeyword data-spm-click=\"gostr=/alimama.11;locaid=dc7f05ca1\" t-if=\"q !== ''\"></span> {{/unless}} </div> {{#if(typeTagName)}} <div class=input-group-btn> <button class=\"btn btn-brand search-btn search-btn-tag\" mx-click=\"searchTag()\" data-spm-click=\"gostr=/alimama.11;locaid=d6c3b3551\">搜{{typeTagName}}</button> </div> <div class=\"input-group-btn ml2\"> <button class=\"btn btn-brand search-btn\" mx-click=\"searchAll()\" data-spm-click=\"gostr=/alimama.11;locaid=daf754bf9\">搜全站</button> </div> {{/if}} {{#unless(typeTagName)}} <div class=input-group-btn> <button class=\"btn btn-brand search-btn\" mx-click=\"search()\" data-spm-click=\"gostr=/alimama.11;locaid=d74fa6fa1\">搜索</button> </div> {{/unless}} </div> </div> </div>",    init: function() {
      var me = this
      me.observeLocation({
        path: true,
        params: ['q']
      })
    },
    render: function() {
      var me = this
      var loc = me.location
      var q = $.trim(loc.get('q'))

      me.data = {
        q: q,
        channelList: channelMap
      }
      
      me.setView(function () {
        me._component()
      })
    },
    refresh: function (typeTagName) {
      this.data.typeTagName = typeTagName
      this.setView()
    },
    _component: function () {
      var me = this
      var $el = $('#' + me.id)
      var suggest = Loader.query('app/exts/suggest/index', $el)[0]
      suggest.on('change.suggest.done', function(event, value) {
        // 用于spm埋点统计
        Util.triggerMouseEvent($('.search-btn')[0], 'mousedown')
        Util.triggerMouseEvent($('.search-btn')[0], 'click')
      })
      me.manage('suggest', suggest)
    },
    channelPanelShow: function (e) {
      var curNode = $(e.currentTarget)
      curNode.addClass('channel-dropdown-hover')
    },
    channelPanelHide: function (e) {
      var curNode = $(e.currentTarget)
      curNode.removeClass('channel-dropdown-hover')
    },
    channel: function (e, channelId) {
      // appkey 是用来传给引擎过滤条件用的，搜索的时候需要透传
      var appkey = this.location.get('appkey')
      $('.channel-dropdown').removeClass('channel-dropdown-hover')
      if(['jyj','kdc','qbb','ifs','cdj','hch','diy'].indexOf(channelId)+1){
        this.navigate('/promo/item/oe_channel/index.htm?channel=' + channelId + (appkey ? '&appkey=' + appkey : ''))
      } else {
        this.navigate('/promo/item/channel/index.htm?channel=' + channelId + (appkey ? '&appkey=' + appkey : ''))
      }
    },
    delKeyword: function () {
      var suggest = this.getManaged('suggest')
      suggest.val('')
      this.search()
    },
    searchAll: function () {
      this.navigate({
        typeTag: ''
      })
    },
    searchTag: function () {
      var me = this
      var typeTag = me.location.get('typeTag')
      var suggest = me.getManaged('suggest')
      var value = suggest.val()
      var v = value && $.trim(value)
      v = v.substr(0, 150)
      me.navigate('/promo/search/index.htm?typeTag=' + typeTag + '&q=' + encodeURIComponent(v) + '&_t=' + (new Date()).getTime())
    },
    search: function() {
      var me = this
      var suggest = me.getManaged('suggest')
      var value = suggest.val()
      var v = value && $.trim(value)
      v = v.substr(0, 150)
      // appkey 是用来传给引擎过滤条件用的，搜索的时候需要透传
      var appkey = me.location.get('appkey')
      
      me.navigate('/promo/search/index.htm?q=' + encodeURIComponent(v) + '&_t=' + (new Date()).getTime()  + (appkey ? '&appkey=' + appkey : ''))
    }
  })
})