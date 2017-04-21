Magix.tmpl("app/views/promo/taobao/widget_display_filter","<div class=search-filter bx-tmpl=\"params\" bx-datakey=\"params\"> <div class=filter-panel> <dl> <dt>类型</dt> <dd class=J_labelGroup> <ul class=\"cat clearfix\"> {{#params}} <li {{#if(widgetType==-1)}}class=selected{{/if(widgetType==-1)}}{{^widgetType}}class=selected{{/widgetType}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:-1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=ddfd2e5e8\">全部</a></li> <li {{#if(widgetType==0)}}class=selected{{/if(widgetType==0)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:0}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d03211667\">单品</a></li> <li {{#if(widgetType==1)}}class=selected{{/if(widgetType==1)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d6759ffca\">店铺</a></li> <li {{#if(widgetType==2)}}class=selected{{/if(widgetType==2)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:2}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d10cbdd0d\">关键字</a></li> <li {{#if(widgetType==3)}}class=selected{{/if(widgetType==3)}}> <a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:3}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d9a694976\">人群定向</a> <i class=\"iconfont color-gray cursor-pointer fontsize-13\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,content:'通过丰富的展现形式，多样的模板，提供智能化引擎汇集高转化高佣金率的商品，根据人群特点和搜索特征进行精准投放，快速帮助用户实现流量变现，增长收益。适合各类网站自主推广。<a href=&quot;http://open.alimama.com/api/tdjdemo.php#area3&quot; target=&quot;_blank&quot; class=&quot;color-blue&quot;>了解更多</a>'}\">&#360;</i> </li> <li {{#if(widgetType==9)}}class=selected{{/if(widgetType==9)}}> <a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:9}\" data-spm-click=\"gostr=/tblm.88.1;locaid=de8e197b8\">SPU比价</a> <i class=\"iconfont color-gray cursor-pointer fontsize-13\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,content:'SPU比价组件可以根据商品id输出该商品不同卖家的销售价格和销量列表。'}\">&#360;</i> </li> <li {{#if(widgetType==10)}}class=selected{{/if(widgetType==10)}}> <a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:10}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dae698fec\">同类商品</a> <i class=\"iconfont color-gray cursor-pointer fontsize-13\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,content:'同类商品推荐组件可以根据商品id推荐相类似的商品，提升同类需求转化率。'}\">&#360;</i> </li> <li {{#if(widgetType==4)}}class=selected{{/if(widgetType==4)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:4}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d5fd2272d\">爱淘宝</a></li> <li {{#if(widgetType==5)}}class=selected{{/if(widgetType==5)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:5}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d775c4790\">充值框</a></li> <li {{#if(widgetType==6)}}class=selected{{/if(widgetType==6)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:6}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dfd0b97d4\">搜索框</a></li> <li {{#if(widgetType==8)}}class=selected{{/if(widgetType==8)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:8}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dabe7e839\">文字链</a></li> <li {{#if(widgetType==13)}}class=selected{{/if(widgetType==13)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:13}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d55275ace\">聚划算</a></li> <li {{#if(widgetType==15)}}class=selected{{/if(widgetType==15)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:15}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d06f9bbbc\">旅行线路</a></li> <li {{#if(widgetType==16)}}class=selected{{/if(widgetType==16)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:16}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d325e017a\">旅行门票</a></li> <li {{#if(widgetType==17)}}class=selected{{/if(widgetType==17)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:17}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dd7d4ea80\">酒店</a></li> <li {{#if(widgetType==18)}}class=selected{{/if(widgetType==18)}}><a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:18}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dab46d8e1\">特价机票</a></li> <li {{#if(widgetType==19)}}class=selected{{/if(widgetType==19)}}> <a class=\"cat-item filter-item\" href=\"#\" mx-click=\"widgetType{widgetType:19}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d28baefc4\">天猫活动</a> <i class=\"iconfont color-gray cursor-pointer fontsize-13\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tl','bl']},mouseDelay:0.2,content:'需要拥有天猫全站结算权限才能使用。'}\">&#360;</i> </li> {{/params}} </ul> </dd> </dl> </div> <div class=filter-panel> <dl> <dt>宽度</dt> <dd class=\"\"> <ul class=\"cat clearfix\"> {{#params}} <li {{#if(minWidth==-1)}}class=selected{{/if(minWidth==-1)}}{{^minWidth}}class=selected{{/minWidth}}><a class=cat-item href=\"#\" mx-click=\"widthRange{minWidth:-1,maxWidth:-1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d8925cdd4\">全部</a></li> <li {{#if(minWidth==0)}}class=selected{{/if(minWidth==0)}}><a class=cat-item href=\"#\" mx-click=\"widthRange{minWidth:0,maxWidth:200}\" data-spm-click=\"gostr=/tblm.88.1;locaid=db48f3d21\">0~200px</a></li> <li {{#if(minWidth==200)}}class=selected{{/if(minWidth==200)}}><a class=cat-item href=\"#\" mx-click=\"widthRange{minWidth:200,maxWidth:400}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d8f094264\">200~400px</a></li> <li {{#if(minWidth==400)}}class=selected{{/if(minWidth==400)}}><a class=cat-item href=\"#\" mx-click=\"widthRange{minWidth:400,maxWidth:600}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d5a8ecab2\">400~600px</a></li> <li {{#if(minWidth==600)}}class=selected{{/if(minWidth==600)}}><a class=cat-item href=\"#\" mx-click=\"widthRange{minWidth:600,maxWidth:800}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dffb53a24\">600~800px</a></li> <li {{#if(minWidth==800)}}class=selected{{/if(minWidth==800)}}><a class=cat-item href=\"#\" mx-click=\"widthRange{minWidth:800,maxWidth:1024}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dc698bd38\">800px以上</a></li> {{/params}} </ul> </dd> </dl> </div> <div class=filter-panel> <dl> <dt>高度</dt> <dd> <ul class=\"cat clearfix\"> {{#params}} <li {{#if(minHeight==-1)}}class=selected{{/if(minHeight==-1)}}{{^minHeight}}class=selected{{/minHeight}}><a class=cat-item href=\"#\" mx-click=\"heightRange{minHeight:-1,maxHeight:-1}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df0e5e2fd\">全部</a></li> <li {{#if(minHeight==0)}}class=selected{{/if(minHeight==0)}}><a class=cat-item href=\"#\" mx-click=\"heightRange{minHeight:0,maxHeight:200}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d2f6ec8bf\">0~200px</a></li> <li {{#if(minHeight==200)}}class=selected{{/if(minHeight==200)}}><a class=cat-item href=\"#\" mx-click=\"heightRange{minHeight:200,maxHeight:400}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df8733136\">200~400px</a></li> <li {{#if(minHeight==400)}}class=selected{{/if(minHeight==400)}}><a class=cat-item href=\"#\" mx-click=\"heightRange{minHeight:400,maxHeight:600}\" data-spm-click=\"gostr=/tblm.88.1;locaid=df460fff5\">400~600px</a></li> <li {{#if(minHeight==600)}}class=selected{{/if(minHeight==600)}}><a class=cat-item href=\"#\" mx-click=\"heightRange{minHeight:600,maxHeight:800}\" data-spm-click=\"gostr=/tblm.88.1;locaid=dcaed9c0d\">600~800px</a></li> <li {{#if(minHeight==800)}}class=selected{{/if(minHeight==800)}}><a class=cat-item href=\"#\" mx-click=\"heightRange{minHeight:800,maxHeight:1024}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d7222672c\">800px以上</a></li> {{/params}} </ul> </dd> </dl> </div> </div>");
KISSY.add('app/views/promo/taobao/widget_display_filter', function (S, View, VOM, Router, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            me.setViewPagelet({ params: loc.params });
        },
        events: {
            click: {
                widgetType: function (e) {
                    e.halt();
                    var me = e.view;
                    me.navigate('toPage=1&widgetType=' + e.params.widgetType);
                },
                widthRange: function (e) {
                    e.halt();
                    var me = e.view;
                    me.navigate('toPage=1&minWidth=' + e.params.minWidth + '&maxWidth=' + e.params.maxWidth);
                },
                heightRange: function (e) {
                    e.halt();
                    var me = e.view;
                    me.navigate('toPage=1&minHeight=' + e.params.minHeight + '&maxHeight=' + e.params.maxHeight);
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