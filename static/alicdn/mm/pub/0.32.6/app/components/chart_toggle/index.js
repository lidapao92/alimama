/*
 * 图表显示隐藏
 * author : 陆议
 */
KISSY.add("components/chart_toggle/index", function(S, Brick) {
    var $ = S.all;

    var ChartToggle = Brick.extend({
        bindUI: function(){
            var me = this;
            var el = me.get('el');
            var chartToggle = el.one('.chart-toggle');

            chartToggle.attr({title: '收起折线图'});
        }
    },{
        EVENTS: {
            '.chart-toggle': {
                click: function(e) {
                    e.preventDefault();

                    var me = this;
                    var curNode = $(e.currentTarget);
                    var chartCnt = $('.chart-container');

                    if (!chartCnt.hasClass('chart-hidden')) {
                        chartCnt.animate({height: 0}, {duration: 0.3, easing: 'easeOut', complete: function () {
                            chartCnt.addClass('chart-hidden');
                            curNode.removeClass('btn-active');
                            curNode.attr({title: '展开折线图'});
                        }});
                    } else {
                        chartCnt.animate({height: 377}, {duration: 0.3, easing: 'easeOut', complete: function () {
                            chartCnt.removeClass('chart-hidden');
                            curNode.addClass('btn-active');
                            curNode.attr({title: '收起折线图'});
                        }});
                    }   
                }
            }
        }
    });

    return ChartToggle;
}, {
    requires: ["brix/core/brick"]
});