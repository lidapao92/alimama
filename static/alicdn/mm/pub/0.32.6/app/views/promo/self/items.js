Magix.tmpl("app/views/promo/self/items","<div bx-tmpl=\"q\" bx-datakey=\"q\"> <ul class=\"med-lavaLamp clearfix\" bx-name=\"lavalamp\" bx-config=\"{fx: 'easeNone',speed: 0.2}\"> <li class=current> <h2><span>单品推广</span></h2> </li> <li> <h2><a href=\"#!/promo/self/shops\" data-spm-click=\"gostr=/tblm.88.1;locaid=d938e7079\" atp=\"{ptype:'items',ctype:'shops'}\">店铺推广</a></h2> </li> </ul> <div> <div class=self-search> <div class=\"bd clearfix\"> <form action=\"/promo/search/index.htm\" target=_blank id=J_search_form> <input type=hidden name=queryType value=2> <div class=\"search-panel ks-combobox\" bx-name=\"combobox\" bx-path=\"components/combobox/\" id=J_items_combobox> <input type=text autofocus=true class=ks-combobox-input id=q name=q value=\"{{q}}\" placeholder=\"请输入你要搜索的单品名称或URL\" autocomplete=off aria-haspopup=true aria-combobox=list role=combobox combobox=off mx-keydown=search bx-name=\"placeholder\" bx-path=\"components/placeholder/\"  /> </div> <a class=\"iconfont search-btn\" href=\"#\" mx-click=search data-spm-click=\"gostr=/tblm.88.1;locaid=d4808ccd4\">&#337;</a> </form> </div> </div> {{#q}} <vframe id=magix_vf_items_query> <div class=wrap-loading></div> </vframe> <vframe id=magix_vf_items_list> <div class=wrap-loading></div> </vframe> {{/q}} {{^q}} <vframe id=magix_vf_items_hot> <div class=wrap-loading></div> </vframe> {{/q}} </div> </div>");
KISSY.add('app/views/promo/self/items', function (S, View, VOM, Router, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            this.observeLocation(['q']);
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var q = loc.get('q');
            me.setViewPagelet({ q: q || '' }, function () {
                me.mountItemsFrame();
                me.components();
            }, function () {
                me.mountItemsFrame();
                me.components();
            });
        },
        mountItemsFrame: function () {
            var me = this;
            var loc = me.location;
            var q = loc.get('q');
            var vframeQuery = VOM.get('magix_vf_items_query');
            var vframeList = VOM.get('magix_vf_items_list');
            var vframeHot = VOM.get('magix_vf_items_hot');
            var viewQueryPath, viewlistPath, viewHotPath;
            if (q) {
                viewQueryPath = 'app/views/promo/self/items_query';
                viewlistPath = 'app/views/promo/self/items_list';
                vframeQuery.mountView(viewQueryPath);
                vframeList.mountView(viewlistPath);
            } else {
                viewHotPath = 'app/views/promo/self/items_hot';
                vframeHot.mountView(viewHotPath);
            }
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var combobox = pagelet.getBrick('J_items_combobox').basicComboBox;
            combobox.on('click', function (ev) {
                var q = $('#q').val();
                if (q) {
                    me.triggerSearchBtnClick();
                }
            });
        },
        triggerSearchBtnClick: function () {
            Util.triggerMouseEvent($('.search-btn')[0], 'mousedown');
            Util.triggerMouseEvent($('.search-btn')[0], 'click');
        },
        events: {
            click: {
                search: function (e) {
                    e.halt();
                    var me = e.view;
                    var q = $('#q').val();
                    if (q) {
                        $('#J_search_form')[0].submit();
                    }
                }
            },
            keydown: {
                search: function (e) {
                    var me = e.view;
                    var q = $('#q').val();
                    if (q && e.domEvent.keyCode == 13) {
                        me.triggerSearchBtnClick();
                    }
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'magix/router',
        'node',
        'app/models/modelmanager',
        'app/util/util',
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
        'app/util/datepicker/datepicker',
        'app/util/dialog/dialog',
        'app/util/format/format',
        'app/util/globaltip/globaltip',
        'app/util/robot/sourceid',
        'app/util/spmlog/spmlog',
        'app/util/mathextend/mathextend',
        'app/util/tooltip/tooltip',
        'app/util/widgetds/widgetds',
        'app/util/rank/rank',
        'app/util/reporttip/reporttip',
        'app/util/vcode/vcode',
        'app/util/pagination/index',
        'app/util/fields/fields',
        'app/util/mouseevent/index',
        'magix/vframe',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});