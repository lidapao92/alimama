define(
  'app/views/promo/common/selection/selection_bar',
  [
    'jquery',
    'underscore',
    'magix',
    'brix/loader',
    'app/util/dialog/index',
    'app/util/index',
    'app/exts/dialog/mask'
  ],
  function($, _, Magix, Loader, DialogHelper, Util, Mask) {

    var MAX_LENGTH = 200

    // 普通商品、淘宝客商品暂存架localStorage名字
    var ID2CACHE = {
      1: 'selection',
      2: 'selection_tbk'
    }

    function Selection(strId) {
      this.strId = strId
      this.data = this._getData()
      this.data = this.data && this.data.length ? this.data : []
      this.maxLength = MAX_LENGTH
    }

    Selection.prototype._getData= function (){
      if (localStorage) {
        var s = localStorage.getItem(this.strId)
        return s && JSON && JSON.parse(s);
      }
      return null
    }

    Selection.prototype._syncData = function (){
      if (localStorage) {
        var s = JSON && JSON.stringify(this.data)
        localStorage.setItem(this.strId, s)
      }
    }

    Selection.prototype.add = function(id, pic) {
      var r = this._add(id, pic)
      if (r === true) {
        this._syncData()
      }
      return r
    }

    Selection.prototype._add = function(id, pic) {
      if (_.findWhere(this.data, {id: id})) {
        return -1
      }
      if (this.data.length >= this.maxLength) {
        return -2
      }

      this.data.splice(0, 0, {id:id, pic:pic})
      return true
    }

    Selection.prototype.remove = function(id) {

      var items = this.data
      for (var i = 0, l = items.length; i < l; i++) {
        if (items[i].id == id) {
          items.splice(i,1)
          this._syncData()
          return true
        }
      }
      return false
    }
    Selection.prototype.removeAll =  function() {
      this.data.splice(0, this.data.length)
      this._syncData()
    }

    Selection.prototype.batch = function(items) {
      var data = this.data
      var r = true
      var i = 0,l = items.length
      var count = 0

      for (; i < l; i++) {
        r = this._add(items[i].id, items[i].pic)
        if(r === true) {
          count ++
        }
        if (r === -2) {
          break
        }
      }
      this._syncData()
      return count
    }
    Selection.prototype.isExist =  function(id) {
      return _.findWhere(this.data, {id: id})
    }


     return Magix.View.extend({tmpl:" <div class=\"selection-bar {{isShowItems  ? 'selection-bar-show' : ''}}\" > <div class=selection-selected> <div class=\"selection-tab-wrap wrap clearfix\"> <ul class=\"selection-tabs clearfix\"> <li class=\"tab mr10{{groupType==1?' current':''}}\"><a href=\"javascript:void(0);\" mx-click=\"tabTo(1)\" data-spm-click=\"gostr=/alimama.11;locaid=d634e6751\">普通商品<span class=num t-if=n_sel.length>{{n_sel.length}}</span></a></li> <li class=\"tab{{groupType==2?' current':''}}\"><a href=\"javascript:void(0);\" mx-click=\"tabTo(2)\" data-spm-click=\"gostr=/alimama.11;locaid=d87efd6fa\">高佣活动商品<span class=num t-if=tbk_sel.length>{{tbk_sel.length}}</span></a></li> </ul> <a class=\"clear-btn fr\" mx-click=\"clearAll()\" data-spm-click=\"gostr=/alimama.11;locaid=dab866a93\">清空已选</a> </div> <div class=\"selection-item-wrap clearfix\" t-if=isNoFirstShow> <div class=wrap> <ul id=J_selection-items class=\"selection-items clearfix\" t-if=items.length> <li t-for=\"(index, item) in items\"> <img src=\"{{item.pic | adaptImg100}}\"> <a href=\"#\" class=delete mx-click=\"remove({{item.id}})\" data-spm-click=\"gostr=/alimama.11;locaid=d573c5a45\"><i class=\"pubfont icon-guanbixiao\"></i></a> </li> </ul> <div class=\"selection-items no-data\" t-unless=items.length> <p><i class=bg-neirongkong></i></p> <p class=desc>您还没有选取任何{{groupType == 2 ? '高佣活动': '普通'}}商品哦~</p> </div> </div> </div> </div> <div class=\"wrap selection-main\"> <a href=\"#\" class=\"select-btn select-all {{isShowItems?'select-hidden':''}}\" mx-click=\"selectAll()\" data-spm-click=\"gostr=/alimama.11;locaid=d7af8dd12{{groupType}};pvid={{pvid}}&actionid=1002\"><i class=\"pubfont icon-xuanququanbu f14 color-l\"></i> 选取全页商品</a> <a href=\"javascript:void(0)\" class=\"btn-brand add-selection{{items.length == 0 ? ' btn-disable' : ''}}\" data-login=true mx-click=\"addSelection()\" data-spm-click=\"gostr=/alimama.11;locaid=dcc9e5341\">加入选品库</a> <a href=\"/manage/selection/list.htm\" data-spm-click=\"gostr=/alimama.11;locaid=deb47ad4e\" data-login=true class=batch-promo>我的选品库</a> <a id=J_bar_selected href=\"#\" mx-click=\"toggleItemsView()\" data-spm-click=\"gostr=/alimama.11;locaid=d1f5368b1\" class=\"select-btn selected-promo\">已选取 <strong class=color-brand>{{items.length}}</strong> /{{maxLength}}个{{groupType==1?'普通':'高佣活动'}}商品 <i class=\"pubfont icon-zhankaishouqi f14\"></i> </a> </div> </div> ",      init: function (opts) {
        var me = this

        this.sel_obj = {
          'selection': new Selection('selection'),
          'selection_tbk': new Selection('selection_tbk')
        }
        this.selection = this.sel_obj[ID2CACHE[this.oriGroupType = opts.groupType]]
        this.initData()
        this.mask = new Mask({ zIndex: 10001 })

        this.mask.on("click", function(){
          me.toggleItemsView()
        })
        me.on("destroy", function(){me.destroy()})
      },
      initData: function() {
        this.data = {}
        this.data.isShowItems =  false
        this.data.items = this.selection.data
        this.data.maxLength = this.selection.maxLength
        this.data.isNoFirstShow = false
        this.data.groupType = this.oriGroupType
        this.data.n_sel = this.sel_obj['selection']['data']
        this.data.tbk_sel = this.sel_obj['selection_tbk']['data']
      },
      render: function() {
        var me = this
        me.setView()
      },
      _setView: function() {
        var me = this
        this.$bar = this.$bar && this.$bar[0] ? this.$bar : $(".selection-bar")

        me.setView()
        if (me.data.isShowItems) {
          this.mask.show()
          this.bar_right = this.bar_right || this.$bar.css("paddingRight")
          this.$bar.css("paddingRight", this.mask.getScrollbarWidth())
        } else {
          this.mask.hide()
          this.$bar.css("paddingRight", this.bar_right)
        }
      },

      isDisabled: function() {
        return this.data.items.length === 0
      },

      addItem: function(opt){
        var me = this
        var v = this.selection.add(opt.id, opt.pic)
        if (v === true) {

          // 为了支持动画，添加的动作是 700ms
          setTimeout(function(){
            me.addItemSetView()
          },700)
        }
        return v
      },
      addItemSetView: function() {
        this._setView()
        this.showAddOne(1)
      },

      // +1 动画
      showAddOne: function(count){
        var me = this
        me.selected_promo = me.selected_promo || $(".selected-promo")

        var tmpl = '<span id="J_add_one" class="add-one">+' + count + '</span>'
        $("#J_add_one").remove()
        me.selected_promo.append(tmpl)

        setTimeout(function(){
          $("#J_add_one").addClass("add-one-show")
        },10)
      },
      selectAll: function(e) {
        e.preventDefault()
        var items = this.vom.get("J_item_list").invokeView("getAllItems")
        var count = this.selection.batch(items)
        if (count > 0 || this.data.items.length < this.selection.maxLength) {
          this._setView();
          this.showAddOne(count)
        } else {
          Util.showGlobalTip("已选商品个数已满"+ MAX_LENGTH + "个，先将已选商品加入选品库吧！")
        }
      },
      toggleItemsView: function(e) {
        e && e.preventDefault()
        var me = this
        var oriGroupType = this.oriGroupType
        this.selection = this.sel_obj[ID2CACHE[oriGroupType]]
        this.data.isNoFirstShow = true
        this.data.isShowItems = !this.data.isShowItems
        this.data.groupType = oriGroupType
        this.data.items = this.selection.data
        this.data.maxLength = this.selection.maxLength
        this._setView()
      },
      addSelection: function(e) {
        var me = this
        // e.preventDefault()

        if (me.isDisabled()) {
          return false
        }

        var dialogConfig = {
          width: 660,
          height: 405,
          closable: false
        }
        var viewName = 'app/views/promo/common/selection/add'
        var items = _.map(me.data.items, function(i) {return i.id})
        var viewOptions = {
          code: 'item',
          items: items,
          groupType: me.data.groupType,
          triggerView: me,
          submitCallback: function() {
            me.addSelectionCallback()
          }
        }
        DialogHelper.show(dialogConfig, viewName, viewOptions)
      },
      addSelectionCallback: function() {
        var me = this;

        // 需要确认
        var dialogConfig = {
          width: 400,
          height: 230,
          closable: false
        }
        var viewName = 'app/views/common/confirm'
        var viewOptions = {
          confirmCls: 'add-ok',
          type: 'success',
          msg: '添加成功',
          submitMsg: '<a target="_blank" style="color:#fff;display:block;" vclick-ignore="true" href="/manage/selection/list.htm">查看选品库</a>',
          closeMsg: '继续选品',
          extraMsg: '<span class="pubfont icon-shuoming color-l f14 mr5"></span><span class="color-m">选品招商API已上线，取链更高效。</span><a href="http://club.alimama.com/read-htm-tid-6713910.html" class="color-brand" target="_blank">去看看</a>',
          spmc: 1998924763,
          closeCallback: function() {
            //me._clearAll()
          }
          // submitCallback: function() {
          //   // 去 查看精品库
          //   me.navigate("/manage/selection/list.htm")
          // }
        }
        DialogHelper.show(dialogConfig, viewName, viewOptions)

        me._clearAll()
      },

      remove: function(e, id){
        e.preventDefault()
        this.selection.remove(id)
        //if (this.data.items.length == 0 ){
        //  this.data.isShowItems = false
        //}
        //this.data.n_sel_length = this.sel_obj['selection']['data']['length']
        //this.data.tbk_sel_length = this.sel_obj['selection_tbk']['data']['length']
        this._setView()

      },
      _clearAll: function() {
        this.selection.removeAll()
        //this.data.isShowItems = false
        //this.initData()
        var me = this
        //var oriGroupType = this.oriGroupType
        //this.selection = new Selection(ID2CACHE[oriGroupType])
        //this.data.isNoFirstShow = true
        //this.data.isShowItems = false
        //this.data.groupType = oriGroupType
        //this.data.items = this.selection.data
        //this.data.maxLength = this.selection.maxLength
        this._setView()
      },
      clearAll: function() {
        var me = this

        // 需要确认
        var dialogConfig = {
          width: 400,
          height: 170,
          closable: false
        }
        var viewName = 'app/views/common/confirm'
        var viewOptions = {
          msg: '您确认要清空已选'+(this.data.groupType == 1?'普通':'高佣活动')+'商品吗？',
          submitMsg: "确认",
          closeMsg: "取消",
          submitCallback: function() {
            me._clearAll();
          }
        }
        DialogHelper.show(dialogConfig, viewName, viewOptions)


      },
      filters: {
        adaptImg100: function(url){
          return this.adaptImg(url, "100x100")
        }
      },
      tabTo: function(e, groupType){
        this.selection = this.sel_obj[ID2CACHE[groupType]]
        this.data.groupType = groupType
        this.data.items = this.selection.data
        this.data.maxLength = this.selection.maxLength
        this.setView()
      },
      destroy: function(){
        this.mask && this.mask.destroy && this.mask.destroy()
      }
    })

  }
)