/**
 * 淘宝联盟阿里去啊页面访问量统计
 * shiwen.zsw@alibaba-inc.com 仙枫
 */
KISSY.add("app/views/promo/extra/alitrip_analytics", function() {

    var analytics = {
        log: function(areaName, aim) {
            var t = new Date().getTime();
            var im = new Image();
            im.src = 'http://gm.mmstat.com/tbtrip.181.7662641.3.' + areaName + '0' + aim + '?logtype=2&cache=' + t + '&autosend=1';
        }
    };
    return analytics;
});