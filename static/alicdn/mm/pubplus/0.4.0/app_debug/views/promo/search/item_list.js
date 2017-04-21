define(
  'app/views/promo/search/item_list',
  [
    'jquery',
    'underscore',
    'magix',
    'brix/loader',
    'app/util/index'
  ],
  function($, _, Magix, Loader, Util) {
     return Magix.View.extend({tmpl:" {{#hasLists}} <div id=J_search_results mx-vframe=true> <div bx-name=\"components/spin\"></div> </div> <div bx-name=\"app/exts/pagination/pagination\" data-total=\"{{paginator.items}}\" data-limit=\"{{paginator.itemsPerPage}}\" data-cursor=\"{{pageNo}}\"></div> {{/hasLists}} {{^hasLists}} <div class=\"no-data no-data-list tc f14\"> <i class=bg-search-empty></i> <p class=desc>抱歉，没有找到相关商品</p> <p class=op>换个搜索词，或者减少筛选条件试试吧。</p> </p> </div> {{/hasLists}} ",      init: function (e) {
        this.data = e.data
        //type的区分直接这一级监听就行了,因为数据没有变化
        this.observeLocation('type')
      },
      mountList:function(){
        var me = this
        var view = me.vom.get('J_search_results')
        var viewType = me.location.get('type') == 'table' ? 'item_list_table' : 'item_list_block'

        var childView = view.mountView('app/views/promo/search/' + viewType,{
          lists: me.data.pageList
        })
        me.manage('childView',childView)
      },
      refresh:function(data){
        var me = this
        me.data = data
        me.render()
      },
      render: function() {
        var me = this
        //通过url拿到分页参数
        me.data.pageNo = me.location.get('toPage') || 1
        me.data.hasLists = me.data.pageList && me.data.pageList.length > 0 ? true : false
        me.setViewHTML().then(function(){
          //没数据就不用去加载了
          if (me.data.hasLists) {
            me.mountList()
            me._bind()
          }
        })
      },
      getAllItems:function(){
        var me = this
        if (!me.data.hasLists) {
          return []
        }
        return _.map(me.data.pageList,function(list){
          return {
            id:list.auctionId,
            pic:list.pictUrl
          }
        })

      },
      _bind:function(){
        var me = this
        var pagination = Loader.query('app/exts/pagination/pagination')[0]

        pagination && pagination.on('chg.pagination',function(event, state) {
          me.navigate({
            toPage:state.cursor,
            perPageSize:state.limit
          })
          $(document).scrollTop(0)
        })
      }
    })
  }
)