/**
 * @fileOverview 配置文件
 * @author 行列
 * @version 1.0
 */
KISSY.add("app/ini", function(S, Node, Router) {
    var T = {
        routes: {
            'app/views/default': [
                // 首页
                '/myunion/overview',
                '/myunion/record',
                '/myunion/message',
                '/myunion/message_detail',
                '/myunion/site/site',
                '/myunion/zone/zone',
                '/myunion/channel/channel',

                // 联盟产品
                '/promo/act/activity_detail_pub',
                '/promo/act/activity_detail_mycreated',
                '/promo/act/activity_detail',
                '/promo/act/activity',
                '/promo/act/activity_seller',
                '/promo/act/activity_cpa',
                '/promo/self/activity',
                '/promo/self/items',
                '/promo/self/shops',
                '/promo/self/links',
                '/promo/self/shop_detail',
                '/promo/self/shop_detail_chart',
                '/promo/self/shop_detail_activity',
                '/promo/self/shop_detail_hot',
                '/promo/self/notice',
                '/promo/self/notice_detail',
                '/promo/self/campaign',
                '/promo/self/headline',
                '/promo/self/search',
                '/promo/taobao/weibo',
                '/promo/taobao/weibo_promo',
                '/promo/taobao/widget_publish',
                '/promo/taobao/widget_private',
                '/promo/taobao/widget_click',
                '/promo/taobao/channel',
                '/promo/taobao/magic',
                '/promo/taobao/coupon',
                '/promo/taobao/software',
                '/promo/extra/aliyun',
                '/promo/extra/aliyun_promo_list',
                '/promo/extra/jf_platform',
                '/promo/reward/stepcommission',
                '/promo/api/api',
                // 1688
                '/promo/extra/ali1688',
                '/promo/extra/ali1688_intro',
                '/promo/extra/ali1688_links',
                '/promo/extra/ali1688_shops',
                '/promo/extra/ali1688_items',
                //alitrip
                '/promo/extra/alitrip',
                '/promo/extra/alitrip_intro',
                '/promo/extra/alitrip_api_intro',
                '/promo/extra/alitrip_channel',
                '/promo/extra/alitrip_widgets',
                '/promo/extra/alitrip_top',
                '/promo/extra/alitrip_top_detail',
                '/promo/extra/alitrip_activity',

                //推广管理
                '/manage/site/site',
                '/manage/zone/zone',
                '/manage/channel/channel',
                '/manage/campaign/campaign',
                '/manage/reward/stepcommission',
                '/manage/weibo/weibo',
                '/manage/act/activity_mypub',
                '/manage/act/activity_mycreated',
                '/manage/magic/magic',
                '/manage/software/list',
                '/manage/act/act_add',
                '/manage/act/activity_item',
                '/manage/act/activity_item_disabled',
                '/manage/act/activity_item_disabled_pub',
                '/manage/act/activity_item_quit_taoke',

                // 效果报表
                '/report/site/site',
                '/report/zone/zone_act',
                '/report/zone/zone_self',
                '/report/zone/zone_widget',
                '/report/zone/zone_channel',
                '/report/zone/zone_weibo',
                '/report/zone/zone_extra',
                '/report/zone/zone_api',
                '/report/zone/zone_cpa',
                '/report/zone/zone_software',
                '/report/detail/taoke',
                '/report/detail/ruyitou',
                '/report/detail/extra',
                '/report/detail/rights',
                '/report/detail/3rdrights'
            ]
            //可以增加第二种view的配置
            // ,'app/views/default2': [
            //     '/data/xxxx'
            // ]
        }
    };

    Router.on('changed',function(e){
        // 给子view用来判断是否刷新了页面
        // 第一次执行e.force为true，后续都为false
        Magix.local('firstLoad', e.force)
    });

    return {
        //是否使用history state来进行url的管理
        //nativeHistory:true
        //动画效果
        /*effect:function(e){
            console.log(e);
            S.one(e.newViewNode).css({opacity:0,display:'none'});
            new S.Anim(e.oldViewNode,{opacity:0},0.25,0,function(){
                e.collectGarbage();
                S.one(e.newViewNode).css({display:''});
                new S.Anim(e.newViewNode,{opacity:1},0.2).run();
            }).run();
        },*/
        //配置文件加载完成，在开始应用前预加载的文件
        //preloads:["app/global"],
        //默认加载的view
        defaultView: 'app/views/default',
        //默认的pathname
        defaultPathname: '/myunion/overview',
        //404时显示的view，如果未启用，则404时显示defaultView
        notFoundView: 'app/views/404',
        //映射规则，当更复杂时，请考虑下面routes为funciton的配置
        // routes:{
        // "/home":"app/common/views/default",
        // "/account":"app/common/views/default",
        // "/account/recharge":"app/common/views/default",
        // "/account/finance":"app/common/views/default",
        // "/account/operation":"app/common/views/default",
        // "/account/proxy":"app/common/views/default",
        // "/account/remind":"app/common/views/default"
        // }
        //或者routes配置为function如：
        //routes:function(pathname){
        //  if(pathname=='/home'){
        //      return "app/common/default"
        //  }
        //}
        routes: function(pathname) { /**begin:support sc load app views**/
            // if(/^app\//.test(pathname)){
            //     return pathname;
            // }
            /**end**/
            if (!S.isEmptyObject(T.routes)) {
                var s;
                S.each(T.routes, function(item, k) {
                    if (S.inArray(pathname, item)) {
                        s = k;
                    }
                });
                if (s) return s;
                return this.notFoundView;
            }
            // if(!S.isEmptyObject(T.routes) && !T.routes[pathname]) {
            //     return this.notFoundView;
            // }
            return this.defaultView;
        }
    }
}, {
    requires: ["node", "magix/router"]
});