KISSY.add("app/util/reporttip/reporttip", function (S, Vframe, VOM) {
    var ReportTip = {};
    var $ = S.Node.all;

    S.mix(ReportTip, {
        getReportTip: function (key) {
            var tipMap = {
                mixClick: {
                    label: '点击数',
                    tip: '您选择时间段内的点击数，包含到达商品、店铺页面的点击数等。'
                },
                alipayNum: {
                    label: '付款笔数',
                    tip: '由推广带来的您选择时间段内的付款订单笔数。'
                },
                alipayRec: {
                    label: '效果预估',
                    tip: '由推广带来的您选择时间段内付款产生的效果预估数据，非最终实际收入，其作用是便于您了解效果发展的趋势，由于是估算数据，与实际的结算时间有一段差异，是阿里妈妈过滤前的数据，最终收入金额以月结后您账户内实际收到的为准。'
                },
                rec: {
                    label: '预估收入',
                    tip: '此数据是以您选择时间段内所有买家确认收货的订单计算出的预估收入，非最终实际收入，由于是估算数据，是阿里妈妈过滤前的数据， 最终收入金额以月结后您账户内实际收到的为准。'
                },
                pv: {
                    label: '展现量',
                    tip: '页面有效曝光次数。'
                },
                couponUsed: {
                    label: '券使用量',
                    tip: '在您选择时间段内推广该活动所使用的优惠券数量。'
                }
            };

            return tipMap[key];

        }
    });

    return ReportTip;

}, {
    requires: ['magix/vframe', 'magix/vom']
});