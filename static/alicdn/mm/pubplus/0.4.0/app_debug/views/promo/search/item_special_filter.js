define('app/views/promo/search/item_special_filter', [
  'jquery',
  'underscore',
  'magix',
  'brix/loader',
  'app/util/plugin/serializejson'
], function($, _, Magix, Loader) {
   return Magix.View.extend({tmpl:" <div class=filter-groups> <div class=filter-groups-inner> <div class=filter-row> <div class=filter-head> <span class=filter-head-name>高级设置：</span> </div> <div class=filter-body> <div class=\"filter-inner clearfix\"> <span class=filter-tag-drop _ie_fix_ mx-mouseenter=\"filterShow(1)\" mx-mouseleave=\"filterHide(1)\"> <form class=filter-tag-drop-form> {{#itemRequire}} <span class=filter-tag-hd>商品要求<i class=pubfont>&#xe60e;</i></span> <span class=filter-tag-bd> <div class=\"filter-tag-bd-line clearfix\"> <span class=filter-tag-wrap> <span class=color-d>库存</span> <input mx-keyup=parseNum name=startQuantity class=\"filter-input input\" type=text value=\"{{startQuantity}}\"> <span class=color-l>件及以上</span> </span> <span class=filter-tag-wrap> <span class=color-d>月付款</span> <input mx-keyup=parseNum name=startPayUv30 class=\"filter-input input\" type=text value=\"{{startPayUv30}}\"> <span class=color-l>人及以上</span> </span> <span class=filter-tag-wrap> <span class=color-d>让利</span> <input mx-keyup=parseNum name=startRlRate bx-name=\"app/exts/popover/popover\" bx-options=\"{\n                    placement: 'bottom',\n                    align: 'left',\n                    type: 'alert',\n                    width: 142,\n                    triggerType: 'focus',\n                    content: '让利为 0％ 至 100%， 数值越大，商品越便宜'\n                  }\" class=\"filter-input input\" type=text value=\"{{startRlRate}}\"> <span class=color-l>%及以上</span> </span> <span class=filter-tag-wrap> <label for=hGoodRate goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d10799d76\"><input id=hGoodRate name=hGoodRate class=filter-checked type=checkbox {{#hGoodRate}}checked{{/hGoodRate}}>好评率高于行业均值</label> </span> <span class=filter-tag-wrap> <label for=jhs goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=da8272ad9\"><input id=jhs name=jhs class=filter-checked type=checkbox {{#jhs}}checked{{/jhs}} >聚划算商品</label> </span> </div> <div class=\"filter-tag-bd-line clearfix\"> <span class=filter-tag-wrap> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=da966c256\"><input name=typeTag class=filter-checked type=radio value=qqg {{#ifCond typeTag 'qqg'}}checked{{/ifCond}}>全球购</label> </span> <span class=filter-tag-wrap> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d6bc7d8c1\"><input name=typeTag class=filter-checked type=radio value=zgzz {{#ifCond typeTag 'zgzz'}}checked{{/ifCond}}>中国质造</label> </span> </div> <div class=\"filter-tag-bd-line tc\"> <span class=\"btn btn-brand btn-small\" mx-click=\"submit()\" data-spm-click=\"gostr=/alimama.11;locaid=d63c696f1\">确认</span> </div> </span> {{/itemRequire}} </form> </span> <span class=filter-tag-drop _ie_fix_ mx-mouseenter=\"filterShow(2)\" mx-mouseleave=\"filterHide(2)\"> <form class=filter-tag-drop-form> {{#shopRequire}} <span class=filter-tag-hd>店铺要求<i class=pubfont>&#xe60e;</i></span> <span class=filter-tag-bd> <div class=\"filter-tag-bd-line clearfix\"> {{^../_isTmall}} <span class=\"filter-tag-wrap filter-tag-wrap-level\"> <span class=color-d>卖家等级</span> <select name=startRatesum bx-name=\"components/dropdown\"> {{#_rates}} <option {{#selected}} selected=selected {{/selected}} value=\"{{value}}\">{{name}}</option> {{/_rates}} </select> <span class=color-l>及以上</span> </span> {{/../_isTmall}} <span class=filter-tag-wrap> <span class=color-d>DSR</span> <select name=startDsr bx-name=\"components/dropdown\"> {{#_dsrs}} <option {{#selected}} selected=selected {{/selected}} value=\"{{value}}\">{{name}}</option> {{/_dsrs}} </select> <span class=color-l>及以上</span> </span> <span class=filter-tag-wrap> <span class=color-d>月销量</span> <input mx-keyup=parseNum name=startSpay30 class=\"filter-input input\" type=text value=\"{{startSpay30}}\"> <span class=color-l>笔及以上</span> </span> </div> <div class=\"filter-tag-bd-line clearfix\"> {{^../_isTmall}} <span class=filter-tag-wrap> <label for=xfzbz goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=dc74294a4\"><input id=xfzbz name=xfzbz class=filter-checked {{#xfzbz}}checked{{/xfzbz}} type=checkbox>消费者保障</label> </span> {{/../_isTmall}} <span class=filter-tag-wrap> <label for=qtth goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d4c864d08\"><input id=qtth name=qtth class=filter-checked {{#qtth}}checked{{/qtth}} type=checkbox>7天无理由退换货</label> </span> <span class=filter-tag-wrap> <label for=lRfdRate goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=dcd6e86a5\"><input id=lRfdRate name=lRfdRate class=filter-checked {{#lRfdRate}}checked{{/lRfdRate}} type=checkbox>退款率低于行业均值</label> </span> <span class=filter-tag-wrap> <label for=hSellerGoodrat goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d35534f23\"><input id=hSellerGoodrat name=hSellerGoodrat class=filter-checked {{#hSellerGoodrat}}checked{{/hSellerGoodrat}} type=checkbox>好评率高于行业均值</label> </span> <span class=filter-tag-wrap> <label for=hSpayRate30 goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=de602dd70\"><input id=hSpayRate30 name=hSpayRate30 class=filter-checked {{#hSpayRate30}}checked{{/hSpayRate30}} type=checkbox>成交转化率高于行业均值</label> </span> {{^../_isTmall}} <span class=filter-tag-wrap> <label for=jpmj goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=de08e8191\"><input id=jpmj name=jpmj class=filter-checked {{#jpmj}}checked{{/jpmj}} type=checkbox>金牌卖家</label> </span> {{/../_isTmall}} </div> <div class=\"filter-tag-bd-line tc\"> <span class=\"btn btn-brand btn-small\" mx-click=\"submit()\" data-spm-click=\"gostr=/alimama.11;locaid=de7058077\">确认</span> </div> </span> {{/shopRequire}} </form> </span> <span class=filter-tag-drop _ie_fix_ mx-mouseenter=\"filterShow(3)\" mx-mouseleave=\"filterHide(3)\"> <form class=filter-tag-drop-form> {{#imgRequire}} <span class=filter-tag-hd>图片要求<i class=pubfont>&#xe60e;</i></span> <span class=filter-tag-bd> <div class=\"filter-tag-bd-line clearfix\"> <span class=filter-tag-wrap> <span class=color-d>牛皮廯程度</span> <i class=\"pubfont color-l icon-shuoming f14\" bx-name=\"app/exts/popover/popover\" bx-options=\"{\n                    placement: 'bottom',\n                    align: 'right',\n                    offset: {\n                      left: 8,\n                      top: 8\n                    },\n                    width: 100,\n                    content: '图片区域加了醒目的文字或水印等信息'\n                  }\" ></i> <select name=npxType bx-name=\"components/dropdown\"> {{#_npxs}} <option {{#selected}} selected=selected {{/selected}} value=\"{{value}}\">{{name}}</option> {{/_npxs}} </select> </span> <span class=filter-tag-wrap> <span class=color-d>图片综合质量</span> <i class=\"pubfont color-l icon-shuoming f14\" bx-name=\"app/exts/popover/popover\" bx-options=\"{\n                    placement: 'bottom',\n                    align: 'right',\n                    offset: {\n                      left: 8,\n                      top: 8\n                    },\n                    width: 100,\n                    content: '对图片美观度的评价'\n                  }\" ></i> <select name=picQuality bx-name=\"components/dropdown\"> {{#_pics}} <option {{#selected}} selected=selected {{/selected}} value=\"{{value}}\">{{name}}</option> {{/_pics}} </select> </span> </div> <div class=\"filter-tag-bd-line tc\"> <span class=\"btn btn-brand btn-small\" mx-click=\"submit()\" data-spm-click=\"gostr=/alimama.11;locaid=d4f3992aa\">确认</span> </div> </span> {{/imgRequire}} </form> </span> </div> </div> </div> </div> </div> ",    init: function (e) {
      this.data = e.data._special
    },
    render: function() {
      var me = this
      me.setViewHTML()
    },
    //父级可以调用这个，来更新当前filter
    refresh: function(data) {
      var me = this
      me.data = data._special
      me.render()
    },
    submit: function(e) {
      var curNode = $(e.currentTarget)
      var form = curNode.parents('.filter-tag-drop-form')
      var parent = curNode.parents('.filter-tag-drop')

      var data = form.serializeJSON({
        checkboxUncheckedValue: '',
        parseWithFunction: function(inputValue, inputName) {
          //这个插件会把checkbox的值设置为'on'我们需要注入改掉
          if (inputValue === 'on') {
            return '1'
          } else {
            return inputValue
          }
        }
      })
      parent.removeClass('filter-tag-drop-show')

      data['toPage'] = 1

      this.navigate(data)
    },
    parseNum: function(e) {
      var curNode = $(e.currentTarget);
      if(/[^(\d*\.?\d*)]/.test(curNode.val())){
        curNode.val('');
      }
      e.preventDefault()

    },
    filterShow: function(e, key) {
      var curNode = $(e.currentTarget)

      curNode.siblings('.filter-tag-drop').removeClass('filter-tag-drop-show')

      //比较复杂，需要同时处理移入的延迟和移除的延迟
      var timerHide = this.getManaged('timerSp'+key)
      timerHide && clearTimeout(timerHide)

      var timerShow = setTimeout(function() {
        curNode.addClass('filter-tag-drop-show')
      },150)
      this.manage('timerShow', timerShow)

    },
    filterHide: function(e, key) {
      var curNode = $(e.currentTarget)

      var timerShow = this.getManaged('timerShow')
      timerShow && clearTimeout(timerShow)

      var timerHide = setTimeout(function() {
        curNode.removeClass('filter-tag-drop-show')
      }, 500)
      this.manage('timerSp'+key, timerHide)
    }
  })
})