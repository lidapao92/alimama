KISSY.add('app/util/widgetds/widgetds', function(S){
    var DS = {};

    var map = {
        0: 'items',                 // 单品
        1: 'shops',                 // 店铺
        2: 'keywords',              // 关键字
        3: 'tbkelite',              // 如意投
        4: '',                      // 爱淘宝
        5: '',                      // 充值
        6: '',                      // 搜索
        7: '',                      // 搜索排行榜
        8: '',                      // 文字链
        9: 'spu_bid',               // SPU
        10: 'simalar_items',        // 同类商品
        11: 'unlike_items',         // 异类商品
        12: 'simalar_shops',        // 同类店铺
        13: 'jhs',                  // 聚划算
        14: 'point_ju',             // 整点聚
        15: 'travel_routes',        // 旅行路线
        16: 'travel_tickets',       // 旅行门票
        17: 'hotels',               // 酒店
        18: 'flight_tickets',       // 特价机票
        19: 'tmall_act'             // 天猫活动
    }

    DS.getWidgetData = function(type, fn){
        var url = map[type];
            
        S.use('app/util/widgetds/ds/' + url, function(S, DS){
            fn(DS);
        });
    }

    return DS;
});