define(
    'app/views/promo/search/item_sort_filter',
    [
        'jquery',
        'underscore',
        'magix',
        'brix/loader',
        'app/util/index',
        'cookie'
    ],
    function ($, _, Magix, Loader, Util, Cookie) {
        return Magix.View.extend({
            tmpl: "<div class=sort-filter-container> <div class=lists-top-filter> <span class=\"lists-top-filter-item{{queryType === 0 ? ' selected' : ''}}\" mx-click=\"querySort(0)\" data-spm-click=\"gostr=/alimama.11;locaid=dcf06de04\"> 默认排序 </span> <span class=\"lists-top-filter-item{{queryType === 2 ? ' selected' : ''}}\" mx-click=\"querySort(2)\" data-spm-click=\"gostr=/alimama.11;locaid=d62388ed6\"> <span title=\"人气\" class=\"mr5 valign-m\">人气</span> <i class=\"pubfont color-l icon-shuoming f1 valign-m\" bx-name=\"app/exts/popover/popover\" bx-options=\"{\n        placement: 'bottom',\n        align: 'right',\n        offset: {\n          left:8,\n          top:8\n        },\n        width: 125,\n        content: '图片美观且被选择较多的商品'\n      }\" ></i> </span> <span _ie_fix_ mx-mouseenter=\"addHover()\" mx-mouseleave=\"removeHover()\" class=\"lists-top-filter-item{{(sortType == 3 || sortType == 4) ? ' selected' : ''}}\"> <span class=item-hd> <template t-if=\"sortType == 3\"> 价格从高到低 </template> <template t-if=\"sortType == 4\"> 价格从低到高 </template> <template t-if=\"sortType != 4 && sortType != 3\"> 价格 </template> <i class=pubfont>&#xe60e;</i> </span> <span class=\"item-bd item-bd-price\"> <span class=item-bd-select mx-click=\"itemSort(3)\" data-spm-click=\"gostr=/alimama.11;locaid=dc76fe370\">价格从高到低</span> <span class=item-bd-select mx-click=\"itemSort(4)\" data-spm-click=\"gostr=/alimama.11;locaid=d5afe31da\">价格从低到高</span> </span> </span> <span class=\"lists-top-filter-item{{sortType == 9 ? ' selected' : ''}}\" mx-click=\"itemSort(9)\" data-spm-click=\"gostr=/alimama.11;locaid=d5679d628\"> <span title=\"销量从高到低\"> {{sortType == 9 ? '销量从高到低' : '销量'}} </span> </span> <span class=\"lists-top-filter-item{{sortType == 1 ? ' selected' : ''}}\" mx-click=\"itemSort(1)\" data-spm-click=\"gostr=/alimama.11;locaid=de8c00f13\"> <span title=\"收入比率从高到低\" class=\"mr5 valign-m\"> {{sortType == 1 ? '收入比率从高到低' : '收入比率'}} </span> <i class=\"pubfont color-l icon-shuoming f14 valign-m\" bx-name=\"app/exts/popover/popover\" bx-options=\"{\n        placement: 'bottom',\n        align: 'right',\n        offset: {\n          left:8,\n          top:8\n        },\n        width: 125,\n        content: '卖家佣金比率+平台补贴比率'\n      }\" ></i> </span> <span class=\"lists-top-filter-item{{sortType == 5 ? ' selected' : ''}}\" mx-click=\"itemSort(5)\" data-spm-click=\"gostr=/alimama.11;locaid=da6821285\"> <span title=\"月推广量从高到低\" class=\"mr5 valign-m\"> {{sortType == 5 ? '月推广量从高到低' : '月推广量'}} </span> <i class=\"pubfont color-l icon-shuoming f14 valign-m\" bx-name=\"app/exts/popover/popover\" bx-options=\"{\n        placement: 'bottom',\n        align: 'right',\n        offset: {\n          left:8,\n          top:8\n        },\n        width: 125,\n        content: '近30天累计被推广的笔数'\n      }\" ></i> </span> <span class=\"lists-top-filter-item{{sortType == 7 ? ' selected' : ''}}\" mx-click=\"itemSort(7)\" data-spm-click=\"gostr=/alimama.11;locaid=d462ba5ce\"> <span title=\"月支出佣金从高到低\" class=\"mr5 valign-m\"> {{sortType == 7 ? '月支出佣金从高到低' : '月支出佣金'}} </span> <i class=\"pubfont color-l icon-shuoming f14 valign-m\" bx-name=\"app/exts/popover/popover\" bx-options=\"{\n        placement: 'bottom',\n        align: 'right',\n        offset: {\n          left:8,\n          top:8\n        },\n        width: 125,\n        content: '近30天累计支出的佣金'\n      }\" ></i> </span> <div class=list-top-filter-right> <span _ie_fix_ mx-mouseenter=\"addHover()\" mx-mouseleave=\"removeHover()\" class=\"lists-top-filter-item lists-top-filter-item-loc\"> <span class=item-hd> {{loc ? loc : '发货地'}} <i class=pubfont>&#xe60e;</i> </span> <span class=\"item-bd item-bd-sections\"> <span class=item-bd-section> <span t-if=loc class=\"cancelbtn btn btn-brand btn-xsmall\" mx-click=\"selectLoc(cancel)\" data-spm-click=\"gostr=/alimama.11;locaid=d8b3cced6\">取消选择</span> </span> <span class=item-bd-section mx-click=\"selectLoc()\" data-spm-click=\"gostr=/alimama.11;locaid=d16366195\"> <ul class=\"item-bd-items clearfix\"> <li class=item> <a href=\"#\" class=\"J_Ajax link align-left\" data-url=sortbar data-key=loc data-value=\"%E5%8C%97%E4%BA%AC\" trace=seller_location trace-tracetype=\"3_北京\">北京</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link align-left\" data-url=sortbar data-key=loc data-value=\"%E4%B8%8A%E6%B5%B7\" trace=seller_location trace-tracetype=\"3_上海\">上海</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link align-left\" data-url=sortbar data-key=loc data-value=\"%E5%B9%BF%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_广州\">广州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link align-left\" data-url=sortbar data-key=loc data-value=\"%E6%B7%B1%E5%9C%B3\" trace=seller_location trace-tracetype=\"3_深圳\">深圳</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link align-left\" data-url=sortbar data-key=loc data-value=\"%E6%9D%AD%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_杭州\">杭州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link align-left\" data-url=sortbar data-key=loc data-value=\"%E7%BE%8E%E5%9B%BD%2C%E8%8B%B1%E5%9B%BD%2C%E6%B3%95%E5%9B%BD%2C%E7%91%9E%E5%A3%AB%2C%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%2C%E6%96%B0%E8%A5%BF%E5%85%B0%2C%E5%8A%A0%E6%8B%BF%E5%A4%A7%2C%E5%A5%A5%E5%9C%B0%E5%88%A9%2C%E9%9F%A9%E5%9B%BD%2C%E6%97%A5%E6%9C%AC%2C%E5%BE%B7%E5%9B%BD%2C%E6%84%8F%E5%A4%A7%E5%88%A9%2C%E8%A5%BF%E7%8F%AD%E7%89%99%2C%E4%BF%84%E7%BD%97%E6%96%AF%2C%E6%B3%B0%E5%9B%BD%2C%E5%8D%B0%E5%BA%A6%2C%E8%8D%B7%E5%85%B0%2C%E6%96%B0%E5%8A%A0%E5%9D%A1%2C%E5%85%B6%E5%AE%83%E5%9B%BD%E5%AE%B6\" trace=seller_location trace-tracetype=\"3_海外\">海外</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B1%9F%E8%8B%8F%2C%E6%B5%99%E6%B1%9F%2C%E4%B8%8A%E6%B5%B7\" trace=seller_location trace-tracetype=\"3_江浙沪\" data-spm-anchor-id=a230r.1.0.0>江浙沪</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%B9%BF%E5%B7%9E%2C%E6%B7%B1%E5%9C%B3%2C%E4%B8%AD%E5%B1%B1%2C%E7%8F%A0%E6%B5%B7%2C%E4%BD%9B%E5%B1%B1%2C%E4%B8%9C%E8%8E%9E%2C%E6%83%A0%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_珠三角\" data-spm-anchor-id=a230r.1.0.0>珠三角</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%8C%97%E4%BA%AC%2C%E5%A4%A9%E6%B4%A5%2C%E6%B2%B3%E5%8C%97\" trace=seller_location trace-tracetype=\"3_京津冀\">京津冀</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%BB%91%E9%BE%99%E6%B1%9F%2C%E5%90%89%E6%9E%97%2C%E8%BE%BD%E5%AE%81\" trace=seller_location trace-tracetype=\"3_东三省\">东三省</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%A6%99%E6%B8%AF%2C%E6%BE%B3%E9%97%A8%2C%E5%8F%B0%E6%B9%BE\" trace=seller_location trace-tracetype=\"3_港澳台\">港澳台</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B1%9F%E8%8B%8F%2C%E6%B5%99%E6%B1%9F%2C%E4%B8%8A%E6%B5%B7%2C%E5%AE%89%E5%BE%BD\" trace=seller_location trace-tracetype=\"3_江浙沪皖\">江浙沪皖</a> </li> </ul> </span> <span class=item-bd-section mx-click=\"selectLoc()\" data-spm-click=\"gostr=/alimama.11;locaid=d620acfb2\"> <div class=hr-line></div> <ul class=\"item-bd-items clearfix\"> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%95%BF%E6%B2%99\" trace=seller_location trace-tracetype=\"3_长沙\">长沙</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%95%BF%E6%98%A5\" trace=seller_location trace-tracetype=\"3_长春\" data-spm-anchor-id=a230r.1.0.0>长春</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%88%90%E9%83%BD\" trace=seller_location trace-tracetype=\"3_成都\">成都</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%87%8D%E5%BA%86\" trace=seller_location trace-tracetype=\"3_重庆\">重庆</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%A4%A7%E8%BF%9E\" trace=seller_location trace-tracetype=\"3_大连\">大连</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E4%B8%9C%E8%8E%9E\" trace=seller_location trace-tracetype=\"3_东莞\">东莞</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E4%BD%9B%E5%B1%B1\" trace=seller_location trace-tracetype=\"3_佛山\">佛山</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E7%A6%8F%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_福州\">福州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E8%B4%B5%E9%98%B3\" trace=seller_location trace-tracetype=\"3_贵阳\">贵阳</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%90%88%E8%82%A5\" trace=seller_location trace-tracetype=\"3_合肥\">合肥</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%87%91%E5%8D%8E\" trace=seller_location trace-tracetype=\"3_金华\">金华</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B5%8E%E5%8D%97\" trace=seller_location trace-tracetype=\"3_济南\">济南</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%98%89%E5%85%B4\" trace=seller_location trace-tracetype=\"3_嘉兴\">嘉兴</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%98%86%E6%98%8E\" trace=seller_location trace-tracetype=\"3_昆明\">昆明</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%AE%81%E6%B3%A2\" trace=seller_location trace-tracetype=\"3_宁波\">宁波</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%8D%97%E6%98%8C\" trace=seller_location trace-tracetype=\"3_南昌\">南昌</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%8D%97%E4%BA%AC\" trace=seller_location trace-tracetype=\"3_南京\">南京</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%9D%92%E5%B2%9B\" trace=seller_location trace-tracetype=\"3_青岛\">青岛</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B3%89%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_泉州\">泉州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B2%88%E9%98%B3\" trace=seller_location trace-tracetype=\"3_沈阳\">沈阳</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E8%8B%8F%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_苏州\">苏州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%A4%A9%E6%B4%A5\" trace=seller_location trace-tracetype=\"3_天津\">天津</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B8%A9%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_温州\">温州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%97%A0%E9%94%A1\" trace=seller_location trace-tracetype=\"3_无锡\">无锡</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%AD%A6%E6%B1%89\" trace=seller_location trace-tracetype=\"3_武汉\">武汉</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E8%A5%BF%E5%AE%89\" trace=seller_location trace-tracetype=\"3_西安\">西安</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%8E%A6%E9%97%A8\" trace=seller_location trace-tracetype=\"3_厦门\">厦门</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%83%91%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_郑州\">郑州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E4%B8%AD%E5%B1%B1\" trace=seller_location trace-tracetype=\"3_中山\">中山</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E7%9F%B3%E5%AE%B6%E5%BA%84\" trace=seller_location trace-tracetype=\"3_石家庄\">石家庄</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%93%88%E5%B0%94%E6%BB%A8\" trace=seller_location trace-tracetype=\"3_哈尔滨\">哈尔滨</a> </li> </ul> </span> <span class=item-bd-section mx-click=\"selectLoc()\" data-spm-click=\"gostr=/alimama.11;locaid=d02872ade\"> <div class=hr-line></div> <ul class=\"item-bd-items clearfix\"> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%AE%89%E5%BE%BD\" trace=seller_location trace-tracetype=\"3_安徽\">安徽</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E7%A6%8F%E5%BB%BA\" trace=seller_location trace-tracetype=\"3_福建\">福建</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E7%94%98%E8%82%83\" trace=seller_location trace-tracetype=\"3_甘肃\">甘肃</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%B9%BF%E4%B8%9C\" trace=seller_location trace-tracetype=\"3_广东\">广东</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%B9%BF%E8%A5%BF\" trace=seller_location trace-tracetype=\"3_广西\">广西</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E8%B4%B5%E5%B7%9E\" trace=seller_location trace-tracetype=\"3_贵州\">贵州</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B5%B7%E5%8D%97\" trace=seller_location trace-tracetype=\"3_海南\">海南</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B2%B3%E5%8C%97\" trace=seller_location trace-tracetype=\"3_河北\">河北</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B2%B3%E5%8D%97\" trace=seller_location trace-tracetype=\"3_河南\">河南</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B9%96%E5%8C%97\" trace=seller_location trace-tracetype=\"3_湖北\">湖北</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B9%96%E5%8D%97\" trace=seller_location trace-tracetype=\"3_湖南\">湖南</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B1%9F%E8%8B%8F\" trace=seller_location trace-tracetype=\"3_江苏\">江苏</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B1%9F%E8%A5%BF\" trace=seller_location trace-tracetype=\"3_江西\">江西</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%90%89%E6%9E%97\" trace=seller_location trace-tracetype=\"3_吉林\">吉林</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E8%BE%BD%E5%AE%81\" trace=seller_location trace-tracetype=\"3_辽宁\">辽宁</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%AE%81%E5%A4%8F\" trace=seller_location trace-tracetype=\"3_宁夏\">宁夏</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%9D%92%E6%B5%B7\" trace=seller_location trace-tracetype=\"3_青海\">青海</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%B1%B1%E4%B8%9C\" trace=seller_location trace-tracetype=\"3_山东\">山东</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%B1%B1%E8%A5%BF\" trace=seller_location trace-tracetype=\"3_山西\">山西</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%99%95%E8%A5%BF\" trace=seller_location trace-tracetype=\"3_陕西\">陕西</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E4%BA%91%E5%8D%97\" trace=seller_location trace-tracetype=\"3_云南\">云南</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%9B%9B%E5%B7%9D\" trace=seller_location trace-tracetype=\"3_四川\">四川</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E8%A5%BF%E8%97%8F\" trace=seller_location trace-tracetype=\"3_西藏\">西藏</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%96%B0%E7%96%86\" trace=seller_location trace-tracetype=\"3_新疆\">新疆</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%B5%99%E6%B1%9F\" trace=seller_location trace-tracetype=\"3_浙江\">浙江</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E6%BE%B3%E9%97%A8\" trace=seller_location trace-tracetype=\"3_澳门\">澳门</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%A6%99%E6%B8%AF\" trace=seller_location trace-tracetype=\"3_香港\">香港</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%8F%B0%E6%B9%BE\" trace=seller_location trace-tracetype=\"3_台湾\">台湾</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E5%86%85%E8%92%99%E5%8F%A4\" trace=seller_location trace-tracetype=\"3_内蒙古\">内蒙古</a> </li> <li class=item> <a href=\"#\" class=\"J_Ajax link \" data-url=sortbar data-key=loc data-value=\"%E9%BB%91%E9%BE%99%E6%B1%9F\" trace=seller_location trace-tracetype=\"3_黑龙江\">黑龙江</a> </li> </ul> </span> <span class=\"item-bd-section mt10\"> <input placeholder=\"多个地区用逗号分隔\" id=J_loc_input type=text class=input value=\"{{loc}}\"> <span class=\"btn btn-loc btn-brand\" mx-click=\"submit()\" data-spm-click=\"gostr=/alimama.11;locaid=dfa6b7bdd\">确定</span> </span> </span> </span> <span mx-click=\"changeListType('block')\" data-spm-click=\"gostr=/alimama.11;locaid=d6bfd7011\" class=\"lists-top-filter-item lists-top-filter-item-type{{type == 'block' ? ' lists-top-filter-item-selected' : ''}}\"> <i class=pubfont>&#xe601;</i> </span> <span mx-click=\"changeListType('table')\" data-spm-click=\"gostr=/alimama.11;locaid=d9fd0ca20\" class=\"lists-top-filter-item lists-top-filter-item-type{{type == 'table' ? ' lists-top-filter-item-selected' : ''}}\"> <i class=pubfont>&#xe604;</i> </span> <span class=\"lists-top-filter-item lists-top-filter-item-pagination\"> <span bx-name=\"components/pagination\" data-total=\"{{paginator.items}}\" data-limit=\"{{paginator.itemsPerPage}}\" data-cursor=\"{{pageNo}}\" data-simplify=true></span> </span> </div> </div> <div> <span class=lists-top-filter-tag> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d9189d210\" for=freeShipment> <input id=freeShipment name=freeShipment type=checkbox t-bind:checked=\"freeShipment == '1'\" mx-click=\"check()\" data-spm-click=\"gostr=/alimama.11;locaid=d4750295d\">包邮</label> </span> <span class=lists-top-filter-tag> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=dd6236676\" for=yxjh class=mr5><input id=yxjh name=yxjh type=checkbox t-bind:checked=yxjh mx-click=\"check()\" data-spm-click=\"gostr=/alimama.11;locaid=dee35c8ff\">营销计划</label> <div class=yxjh-tip-icon _ie_fix_ mx-mouseenter=\"showYxjhInfo()\" mx-mouseleave=\"hideYxjhInfo()\"> <i class=\"pubfont color-l icon-shuoming f1 valign-m\"></i> <div class=yxjh-tip t-class:show=showYxjhTip> <p>该选项只包含定向计划和<a href=\"https://taobaoke.bbs.taobao.com/detail.html?postId=7519010\" target=_blank class=color-blue>营销计划</a>商品</p> <p>如需查看全部商品，请取消该选项</p> </div> </div> </span> <span class=lists-top-filter-tag> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d727f7209\" for=dpyhq><input id=dpyhq name=dpyhq type=checkbox t-bind:checked=dpyhq mx-click=\"check()\" data-spm-click=\"gostr=/alimama.11;locaid=d9bda87be\">店铺优惠券</label> </span> <span class=lists-top-filter-tag> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=d0ed493ea\" for=hPayRate30><input id=hPayRate30 name=hPayRate30 type=checkbox t-bind:checked=\"hPayRate30 == '1'\" mx-click=\"check()\" data-spm-click=\"gostr=/alimama.11;locaid=d2a6e95d2\">月成交转化率高于行业均值</label> </span> <span class=lists-top-filter-tag> <label goldclick=true data-spm-click=\"gostr=/alimama.11;locaid=db60045d1\" for=b2c><input id=b2c name=b2c type=checkbox t-bind:checked=b2c mx-click=\"check()\" data-spm-click=\"gostr=/alimama.11;locaid=db59f0f50\">天猫旗舰店</label> </span> <span _ie_fix_ mx-mouseenter=\"addHover()\" mx-mouseleave=\"removeHover()\" class=\"lists-top-filter-tag lists-top-filter-tag-sells\"> <span class=input-wrap-inner> <span class=color-d>月销量</span> <input name=startBiz30day class=\"filter-input input\" type=text value=\"{{startBiz30day}}\" mx-keyup=parseNum> <span class=color-l>笔及以上</span> <span class=\"btn btn-brand btn-small ml5\" mx-click=\"range()\" data-spm-click=\"gostr=/alimama.11;locaid=de8b032e9\">确认</span> </span> </span> <span _ie_fix_ mx-mouseenter=\"addHover()\" mx-mouseleave=\"removeHover()\" class=\"lists-top-filter-tag lists-top-filter-tag-rate\"> <span class=input-wrap-inner> <span class=color-d>收入比率</span> <input name=startTkRate class=\"filter-input input\" type=text value=\"{{startTkRate}}\" mx-keyup=parseNum>% - <input name=endTkRate class=\"filter-input input\" type=text value=\"{{endTkRate}}\" mx-keyup=parseNum>% <span class=\"btn btn-brand btn-small ml5\" mx-click=\"range()\" data-spm-click=\"gostr=/alimama.11;locaid=d51137f13\">确认</span> </span> </span> <span _ie_fix_ mx-mouseenter=\"addHover()\" mx-mouseleave=\"removeHover()\" class=\"lists-top-filter-tag lists-top-filter-tag-price\"> <span class=input-wrap-inner> <span class=color-d>价格</span> <input name=startPrice class=\"filter-input input\" type=text value=\"{{startPrice}}\" mx-keyup=parseNum>元 - <input name=endPrice class=\"filter-input input\" type=text value=\"{{endPrice}}\" mx-keyup=parseNum>元 <span class=\"btn btn-brand btn-small ml5\" mx-click=\"range()\" data-spm-click=\"gostr=/alimama.11;locaid=d1d0f0774\">确认</span> </span> </span> </div> </div>",
            init: function (e) {
                this.data = e.data._sort
                this.observeLocation('type')
            },
            render: function () {
                var me = this

                me.data.pageNo = me.location.get('toPage') || 1
                me.data.type = me.location.get('type') || 'block'

                var yxjhFilterTag = (new Cookie()).get(Magix.local('memberid') + '_yxjh-filter-1')
                if (!yxjhFilterTag) {
                    me.data.showYxjhTip = true;
                    (new Cookie()).set(Magix.local('memberid') + '_yxjh-filter-1', true, 365 * 10, null, '/');
                }

                me.setView(function () {
                    me._compoment()
                }).then(function () {
                    //每次重新初始化时，需要去除掉hover的class
                    //因为局部刷新太局部了，这种细节的class还留着
                    $('#' + me.id).find('.lists-top-filter-item').removeClass('item-hover')
                    $('#' + me.id).find('.lists-top-filter-tag').removeClass('item-hover')


                })
            },
            _compoment: function () {
                var me = this
                var pagination = Loader.query('components/pagination')[0]
                pagination && pagination.on('change.pagination', function (event, state) {
                    me.navigate({
                        toPage: state.cursor,
                        perPageSize: state.limit
                    })
                })
            },
            //父级可以调用这个，来更新当前filter
            refresh: function (data) {
                var me = this
                me.data = data._sort
                me.render()
            },
            selectLoc: function (e, cancel) {
                if (cancel) {
                    this.navigate({
                        toPage: 1,
                        loc: ''
                    })
                    return
                }
                var word = $.trim($(e.target).attr('data-value'))
                //使用对象形式会被转义
                // this.navigate({
                //   toPage:1,
                //   loc:word
                // })
                this.navigate('loc=' + word + '&toPage=1')
                e.preventDefault()
            },
            submit: function (e) {
                this.navigate('loc=' + $('#J_loc_input').val().replace('，', ',') + '&toPage=1')
                e.preventDefault()
            },
            range: function (e) {
                var parent = $(e.currentTarget).parents('.input-wrap-inner')
                var data = {}
                //各种找值
                parent.find('.filter-input').each(function () {
                    data[$(this).attr('name')] = $(this).val()
                })

                data['toPage'] = 1

                this.navigate(data)
                e.preventDefault()

            },
            addHover: function (e) {
                $(e.currentTarget).addClass('item-hover')
            },
            removeHover: function (e) {
                $(e.currentTarget).removeClass('item-hover')
            },
            check: function (e) {
                var node = $(e.currentTarget)
                var name = node.attr('name')
                var value = node[0].checked == true ? 1 : name == 'yxjh' ? -1 : ''
                var param = {}
                param['toPage'] = 1
                param[name] = value

                this.navigate(param)
            },
            itemSort: function (e, sortType) {
                sortType = sortType || ''

                //进行后面的排序的时候，默认是选中前面的默认排序
                //这里非常恶心，以后一定要要求开发统一字段，不然这种两个字段的联动太恶心
                this.navigate({
                    toPage: 1,
                    queryType: '0',
                    sortType: sortType
                })

                e.preventDefault()
            },
            querySort: function (e, queryType) {
                //queryType = queryType || ''
                //进行前面的排序的时候，清空后面的二级排序选项
                this.navigate({
                    toPage: 1,
                    queryType: queryType + '',
                    sortType: ''
                })
                e.preventDefault()
            },
            changeListType: function (e, type) {
                this.navigate('type=' + type)
                e.preventDefault()
            },
            parseNum: function (e) {
                var curNode = $(e.currentTarget);
                if (/[^(\d*\.?\d*)]/.test(curNode.val())) {
                    curNode.val('');
                }

                e.preventDefault()

            },
            showYxjhInfo: function (e) {
                //var me = this
                //var timer = setTimeout(function() {
                //  var $curNode = $(e.currentTarget)
                //  var options = {
                //    width: 250,
                //    height: 140,
                //    element: $curNode,
                //    appendToBody: true
                //  }
                //  var viewName = 'app/views/promo/search/yxjh_tip'
                //  Util.showPopover(options, viewName, {})
                //}, 150)
                //
                //me.manage('timer', timer)
                this.data.showYxjhTip = true
                this.setView()
            },
            hideYxjhInfo: function (e) {
                this.data.showYxjhTip = false
                this.setView()
                //var me = this
                //var timer = me.getManaged('timer')
                //timer && clearTimeout(timer)
                //Util.hidePopover()
            }
        })
    }
)