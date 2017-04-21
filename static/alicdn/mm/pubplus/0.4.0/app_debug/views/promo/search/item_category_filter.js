define(
  'app/views/promo/search/item_category_filter',
  [
    'jquery',
    'underscore',
    'magix',
    'brix/loader'
  ],
  function($, _, Magix, Loader) {
     return Magix.View.extend({tmpl:" <div class=\"filter-top-nav clearfix\"> <a class=\"fr search-tutorial\" href=\"http://shuyuan.taobao.com#!/selftutorial/detail?id=479\" target=_blank goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=db6d9ecc7\" t-if=\"selected.length + specialRequire.length <= 5\"> <span class=\"pubfont icon-shipin color-brand f14 mr5\"></span> <span>超级搜索视频教程</span> </a> <a href=\"#\" class=top-nav-text mx-click=allCat data-spm-click=\"gostr=/alimama.11;locaid=d78e3c6de\">所有分类</a> <em class=\"top-nav-arrow pubfont\">&#xe606;</em> <a t-for=\"se in selected\" mx-click=\"del({{se.type}},{{se.key}})\" data-spm-click=\"gostr=/alimama.11;locaid=d9c53e33e\" class=top-nav-tag title=\"{{{se.text}}}\" href=\"javascript:void(0);\" > {{{se.text}}} <span class=\"top-nav-tag-x pubfont\">&#xe60d;</span> </a> <a t-for=\"sr in specialRequire\" mx-click=\"delSr('{{sr.key}}')\" data-spm-click=\"gostr=/alimama.11;locaid=d3ae8171c\" class=top-nav-tag title=\"{{{sr.text}}}\" href=\"javascript:void(0);\" > {{{sr.text}}} <span class=\"top-nav-tag-x pubfont\">&#xe60d;</span> </a> <span class=top-nav-text>共 {{totalCount|total}} 件商品</span> </div> <div class=\"filter-groups overflow_hide\" id=J_top_category_container> <div class=\"filter-groups-inner filter-groups-inner-first\" t-if=_firstNavigator> <div class=\"filter-row filter-row-hide-toggle\" mx-click=\"select({{_firstNavigator.type}},{{_firstNavigator.id}})\" data-spm-click=\"gostr=/alimama.11;locaid=d105ade90\"> <div class=filter-head> <span class=filter-head-name>{{_firstNavigator.name}}：</span> </div> <div class=filter-body> <div class=\"filter-inner clearfix\"> <span class=filter-tag sub-id=\"{{sub.id}}\" t-for=\"sub in _firstNavigator.subIds\"> {{*sub.name}} </span> </div> <div class=filter-btns> <span class=\"btn btn-brand btn-small\" mx-click=\"submit({{_firstNavigator.id}})\" data-spm-click=\"gostr=/alimama.11;locaid=dbc060297\">确认</span> <span class=\"btn btn-gray btn-small\" mx-click=\"hideCategoryRowSelected()\" data-spm-click=\"gostr=/alimama.11;locaid=d853ad40d\">取消</span> </div> </div> <div class=filter-foot> <span t-if=\"_firstNavigator.type == 'property'\" class=filter-btn mx-click=\"showCategoryRowSelected()\" data-spm-click=\"gostr=/alimama.11;locaid=d9e6d420a\">多选</span> <span mx-click=\"toggleCategoryRow()\" data-spm-click=\"gostr=/alimama.11;locaid=d409e75c5\" class=\"filter-toggle filter-toggle-up\"> 收起<i class=pubfont>&#xe60b;</i> </span> <span mx-click=\"toggleCategoryRow()\" data-spm-click=\"gostr=/alimama.11;locaid=d19b84408\" class=\"filter-toggle filter-toggle-down\"> 更多<i class=pubfont>&#xe60e;</i> </span> </div> </div> </div> <div class=\"filter-groups-inner overflow_hide filter-groups-other-category\" id=J_top_category t-if=\"_otherNavigators.length > 0\"> <div class=\"filter-row filter-row-hide-toggle\" mx-click=\"select({{_navigator.type}},{{_navigator.id}})\" data-spm-click=\"gostr=/alimama.11;locaid=d43db8ff1\" t-for=\"_navigator in _otherNavigators\"> <div class=filter-head> <span class=filter-head-name>{{_navigator.name}}：</span> </div> <div class=filter-body> <div class=\"filter-inner clearfix\"> <span class=filter-tag sub-id=\"{{sub.id}}\" t-for=\"sub in _navigator.subIds\"> {{*sub.name}} </span> </div> <div class=filter-btns> <span class=\"btn btn-brand btn-small\" mx-click=\"submit({{_navigator.id}})\" data-spm-click=\"gostr=/alimama.11;locaid=de4c4f4e8\">确认</span> <span class=\"btn btn-gray btn-small\" mx-click=\"hideCategoryRowSelected()\" data-spm-click=\"gostr=/alimama.11;locaid=d9e7f7696\">取消</span> </div> </div> <div class=filter-foot> <span t-if=\"_navigator.type == 'property'\" mx-click=\"showCategoryRowSelected()\" data-spm-click=\"gostr=/alimama.11;locaid=d63119858\" class=filter-btn>多选</span> <span mx-click=\"toggleCategoryRow()\" data-spm-click=\"gostr=/alimama.11;locaid=d138ad60b\" class=\"filter-toggle filter-toggle-up\"> 收起<i class=pubfont>&#xe60b;</i> </span> <span mx-click=\"toggleCategoryRow()\" data-spm-click=\"gostr=/alimama.11;locaid=d7648c49e\" class=\"filter-toggle filter-toggle-down\"> 更多<i class=pubfont>&#xe60e;</i> </span> </div> </div> </div> <div t-if=\"_otherNavigators.length > 0\" class=filter-groups-expend id=J_category_expend_btn> <div class=filter-groups-expend-line></div> <span mx-click=\"toggleCategory()\" data-spm-click=\"gostr=/alimama.11;locaid=d0ebc5f1f\" class=\"toggle-expend toggle-expend-up\">收起筛选<i class=pubfont>&#xe60b;</i></span> <span mx-click=\"toggleCategory()\" data-spm-click=\"gostr=/alimama.11;locaid=d5d523344\" class=\"toggle-expend toggle-expend-down\">展开筛选<i class=pubfont>&#xe60e;</i></span> </div> </div>",      init: function (e) {
        this.data = e.data._category
        //这边的逻辑比较特殊，选项分两种情况
        //对于property可以多选，对于category单选，而且需要组合拼个字符串给开发
        this.catIds = this.data.catIds //前台类目id,多个id以“,”分隔
        this.pidvid = this.data.pidvid //导航属性id及选择的值,多个属性用”;“分隔，属性id与属性值用”:“分隔pidvid=11:42;12:28

      },
      _wrapToggle:function(){
        var wrap = $('#'+this.id)
        var rows,lastTop,rowTop,rowHeight,lastChild
        //需要检查是不是需要有 更多的按钮
        rows = wrap.find('.filter-row')
        rows.addClass('filter-row-hide-toggle')
        rows.removeClass('filter-row-expend')
        rows.each(function(){
          rowTop = $(this).offset().top
          rowHeight = $(this).height()
          lastChild = $(this).find('.filter-tag:last-child')
          if (!lastChild || lastChild.length == 0) return
          lastTop = lastChild.offset().top
          if (lastTop - rowTop >= rowHeight) {
            $(this).removeClass('filter-row-hide-toggle')
          }
        })

      },
      render: function() {
        var me = this
        me.setView().then(function(){
          me._wrapToggle()
        })
      },
      //父级可以调用这个，来更新当前filter
      refresh:function(data){
        var me = this
        me.data = data._category
        me.catIds = me.data.catIds //前台类目id,多个id以“,”分隔
        me.pidvid = me.data.pidvid
        me.render()
      },
      //删除普通筛选项
      navGo:function(){

        var catIdsArray = this.catIds
        var pidvidArray = [];
        for (var key in this.pidvid) {
          pidvidArray.push(key+':'+this.pidvid[key].join(','))
        }

        this.navigate({
          toPage:1,
          catIds:catIdsArray.join(','),
          pidvid:pidvidArray.join(';')
        })

      },
      // 显示所有分类
      allCat: function (e) {
        e.preventDefault()
        var userType = this.location.get('userType')
        this.navigate('/promo/search/index.htm?userType=' + userType)
      },
      //删除高级设置
      delSr:function(e,key){

        var keys = key.split(',')
        var param = {}
        _.each(keys,function(key) {
          param[key] = ''
        })
        param['toPage'] = 1

        this.navigate(param)

      },
      del:function(e,type,id){

        id = parseInt(id) || ''

        if (!id) {
          return
        }

        if (type == 'property') {
          delete this.pidvid[id]
        }

        if (type == 'category') {
          this.catIds = _.without(this.catIds,id)
        }

        this.navGo()

      },
      select:function(e,type,id){

        var curTarget = $(e.currentTarget)
        var target = $(e.target)
        var itemId = parseInt(target.attr('sub-id'))

        id = parseInt(id) || ''

        if (!itemId || !id) return

        //对于多选的情况,直接只是改变样式,由提交按钮去处理统一跳转
        if (curTarget.hasClass('filter-row-select')) {
          target.toggleClass('filter-tag-selected')
          e.preventDefault()
          return
        }

        if (type == 'property') {
          this.pidvid[id] = this.pidvid[id] || []
          this.pidvid[id].push(itemId)
        }

        if (type == 'category') {
          //理论上不会有重复的，因为上一次选择后那一行就没了，不会多选
          this.catIds.push(itemId)
        }

        this.navGo()

      },
      submit:function(e,id){
        //有submit证明是property多选,需要通过样式去找到所有的选中
        var rowNode = $(e.currentTarget).parents('.filter-row')
        var subIds = []

        rowNode.find('.filter-tag-selected').each(function(){
          subIds.push($(this).attr('sub-id'))
        })

        rowNode.removeClass('filter-row-select')
        rowNode.find('.filter-tag-selected').removeClass('filter-tag-selected')
        rowNode.removeClass('filter-row-expend')

        this.pidvid[id] = subIds

        this.navGo()
      },
      hideCategoryRowSelected:function(e){
        var curNode = $(e.currentTarget)
        var rowNode = curNode.parents('.filter-row')
        rowNode.removeClass('filter-row-select')
        rowNode.find('.filter-tag-selected').removeClass('filter-tag-selected')
        rowNode.removeClass('filter-row-expend')
        e.preventDefault()
      },
      showCategoryRowSelected:function(e){
        var curNode = $(e.currentTarget)
        var rowNode = curNode.parents('.filter-row')
        rowNode.addClass('filter-row-select')
        rowNode.addClass('filter-row-expend')
        e.preventDefault()
      },
      toggleCategoryRow:function(e){
        var curNode = $(e.currentTarget)
        var rowNode = curNode.parents('.filter-row')
        rowNode.removeClass('filter-row-select')
        rowNode.find('.filter-tag-selected').removeClass('filter-tag-selected')
        rowNode.toggleClass('filter-row-expend')
        e.preventDefault()
      },
      // toggleCategoryContainer:function(e){
      //   $('#J_top_category_container').slideToggle(100)
      //   $(e.currentTarget).toggleClass('toggle-nav-expend')
      //   e.preventDefault()
      // },
      toggleCategory:function(e){
        $('#J_top_category').toggleClass('show-category')

        $('#J_category_expend_btn').toggleClass('show')
        e.preventDefault()
      },
      parseNum:function(e){
        var curNode = $(e.currentTarget);
        if(/[^(\d*\.?\d*)]/.test(curNode.val())){
            curNode.val('');
        }

        e.preventDefault()

      },
      filters: {
        total: function(value) {
          value = parseInt(value)

          if (!value) return 0
          if (value && value < 10000) return value

          return (value/10000).toFixed(2) + '万'
        }
      }
    })
  }
)