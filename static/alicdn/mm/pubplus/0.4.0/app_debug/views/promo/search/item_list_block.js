define(
  'app/views/promo/search/item_list_block', [
    'jquery',
    'underscore',
    'magix',
    'brix/loader',
    'app/util/dialog/index',
    'app/util/index',
    'cookie',
    'app/exts/dialog/mask',
    'app/util/plugin/easing'
  ],
  function($, _, Magix, Loader, DialogHelper, util, Cookie, Mask) {
     return Magix.View.extend({tmpl:"<div class=\"search-result-wrap search-result-wrap-block clearfix\"> <div class=\"block-search-box tag-wrap\" t-for:lazy=\"(key,list) in lists\"> <div class=pic-box> <a class=\"search-box-img img-loading\" href=\"{{{list.auctionUrl}}}\" target=_blank goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d30ccd691;itemid={{list.auctionId}}&pvid={{pvid}}&actionid=1000\"> <span class=empty-icon-bg></span> <img src=\"//img.alicdn.com/tps/TB1Q736LXXXXXXpXFXXXXXXXXXX-32-32.png\" data-src=\"{{list.pictUrl|adaptImg220}}\" /> </a> </div> <div class=box-content _ie_fix_ mx-mouseenter=\"showContent()\" mx-mouseleave=\"hideContent()\"> <div class=content-line> <p t-class:p-title=\"list.couponAmount ? false : true\"> <a class=color-m t-class:content-title=\"list.couponAmount ? true : false\" href=\"{{list.auctionUrl}}\" target=_blank title=\"{{list._title}}\" goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d5d3d3cdd;itemid={{list.auctionId}}&pvid={{pvid}}&actionid=1000\">{{{list.title}}}</a> </p> </div> <div class=\"content-line tags-container\" t-if=list.couponAmount> <span class=\"tag tag-coupon\" t-if=list.couponAmount> <span class=icon></span> <span class=money>{{list.couponAmount}}元</span> </span> </div> <div class=\"content-line clearfix mt5\"> <span class=\"fl color-d number number-16\"> {{{list.zkPrice|toMoneySymbol}}} </span> <span class=fr t-unless=list.isSellNumHide> <span class=color-l>月销：</span> <span class=color-d>{{list.biz30day}}</span> </span> </div> <div class=\"content-line clearfix\"> <span class=\"fl color-brand\"> <span>比率：</span> <span class=\"number number-16\" > {{{list.tkRate|toPercentage}}} </span> </span> <span class=fr> <span class=color-l>佣金：</span> <span class=\"number number-thin number-16\">{{{list.tkCommFee|toMoneySymbol}}}</span> </span> </div> </div> <div class=box-shop-info t-class:dxjh-guide-show=\"key==0\"> <div class=shop-title _ie_fix_ mx-mouseenter=\"showShopInfo({{list.sellerId}},{{list.userType}})\" mx-mouseleave=\"hideShopInfo({{list.sellerId}})\"> <span class=shop-hd> <span class=\"pubfont icon-dianpu shop-icon\"></span> <a vclick-ignore=true title=\"点击进入店铺推广详情页\" href=\"/myunion.htm?#!/promo/self/shop_detail?userNumberId={{list.sellerId}}\" data-spm-click=\"gostr=/alimama.11;locaid=dab027959\" target=_blank>{{{list.shopTitle}}}</a> </span> <div class=shop-bd mx-vframe=true></div> </div> <div class=\"tags-container fr\"> {{#if(list.tkMktStatus)}} <a href=\"http://club.alimama.com/read-htm-tid-6858464-ds-1.html\" title=\"查看营销计划介绍\" class=\"tag tag-mkt mr10\" target=_blank> <em class=icon-ying-bg></em> </a> {{/if}} {{#if(!list.tkMktStatus && list.includeDxjh)}} <a href=\"#\" data-login=true mx-click=\"showDxjh({{list.sellerId}},{{list.auctionId}})\" data-spm-click=\"gostr=/alimama.11;locaid=d0878f2b0\" title=\"点击申请定向计划\" class=\"tag tag-plan mr10\"> <span class=icon-wrap> <em class=\"pubfont icon-dingxiangjihua\"></em> <em class=\"pubfont icon-gengduoyongjin\"></em> </span> </a> {{/if}} <span t-if=\"list.userType == 1\" class=\"tag tag-tmall mr10\" title=\"天猫店铺\"></span> </div> </div> <div class=box-btn-group> <a href=\"javascript:void(0);\" data-login=true mx-click=\"code({{list.auctionId}})\" data-spm-click=\"gostr=/alimama.11;locaid=d64736c94\" class=box-btn-left>立即推广</a><em class=box-btn-divid></em><a href=\"javascript:void(0);\" mx-click=\"selectItem({{key}})\" data-spm-click=\"gostr=/alimama.11;locaid=d272c3d68;itemid={{list.auctionId}}&pvid={{pvid}}&actionid=1001\" class=box-btn-right> <span class=pubfont>&#xe609;</span> 选取 </a> </div> </div> </div>",      init: function(e) {
        this.data = {
          lists: e.lists
        }
      },
      render: function() {
        var me = this

        me.setView().then(function(){
          //window.aliww()
          me.lazyload(me.id)
        })
      },
      showShopInfo:function(e,sellerId,userType){
        var node = $(e.currentTarget)
        var viewContainerId = node.find('.shop-bd').attr('id')
        var me = this

        if (!node.hasClass('loaded')) {
          //初始化view
          me.vom.get(viewContainerId) && me.vom.get(viewContainerId).mountView('app/views/promo/common/shop/shop_info',{
            sellerId:sellerId,
            isTmall:userType == 1 ? true : false
          })
          node.addClass('loaded')
        }
        var timer = setTimeout(function() {
          node.addClass('shop-title-hover')
        },150)
        me.manage('timerShop', timer)

      },
      hideShopInfo:function(e){
        var me = this
        var timer = me.getManaged('timerShop')
        timer && clearTimeout(timer)
        $(e.currentTarget).removeClass('shop-title-hover')
      },
      showContent:function(e) {
        var me = this
        var node = $(e.currentTarget)
        var timer = setTimeout(function() {
          node.addClass('content-hover')
        },150)
        me.manage('timerContent', timer)
      },
      hideContent:function(e) {
        var me = this
        var timer = me.getManaged('timerContent')
        timer && clearTimeout(timer)
        $(e.currentTarget).removeClass('content-hover')
      },
      code:function(e,itemId){
        this.getCode({
          code: 'item',
          itemId: itemId,
          // scenes=1代表普通单品
          scenes: 1,
          // 以下字段用于埋点
          spmc: 1998910286
        })
        e.preventDefault()
      },
      showDxjh: function(e, sellerId, itemId) {
        var dialogConfig = {
          width: 650,
          height: 360,
          closable: true
        }
        var viewName = 'app/views/promo/common/campaign/list'

        DialogHelper.show(dialogConfig, viewName, {
          spmc: 1998910289,
          itemId: itemId,
          userNumberId: sellerId,
          triggerFn: arguments.callee,
          triggerArgs: arguments,
          triggerView: this
        })
        e.preventDefault()
      },
      selectItem:function(e,key){
        var me = this
        var node = $(e.currentTarget)
        var target = $('#J_bar_selected')
        var sOffset = node.offset();
        var eOffset = target.offset();
        var info = me.data.lists[key]
        var itemAnimate

        var result = me.vom.get('J_selection_bar').invokeView('addItem',{
          id:info.auctionId,
          pic:info.pictUrl
        })

        var imgsrc = this.adaptImg(info.pictUrl, window.devicePixelRatio > 1 ? "400x400" :"220x220")

        if (target && result === true) {
          itemAnimate = $('<img style="box-shadow: 0 2px 4px 0 rgba(32, 32, 64, 0.16);border:2px solid #666\9;" src="'+imgsrc+'" />')
          itemAnimate.css({
            'position': 'absolute',
            'top': sOffset.top - 240,
            'left': sOffset.left - 50,
            'width':80,
            'height':80,
            'z-index': '1001'
          })

          $('body').append(itemAnimate)

          itemAnimate.animate({
            left: eOffset.left + 100,
            top: eOffset.top - 20,
            width:10,
            height:10
            }, 700, 'easeInBack', function(){
              itemAnimate.remove();
            })
        }

        if (result == -1) {
          util.showErrorTip({
            element: node,
            content: '该商品已选取',
            autoHide: true,
            width: 80
          })
        }

        if (result == -2) {
          util.showErrorTip({
            element: node,
            content:'已选商品已达选品库上限',
            autoHide: true,
            width: 107
          })
        }

        e.preventDefault()
      }
    })
  }
)