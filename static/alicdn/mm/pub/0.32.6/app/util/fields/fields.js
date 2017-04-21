KISSY.add('app/util/fields/fields', function(S, Node){
  var $ = Node.all;
  var DS = {};
  var defaultConfig = {
    // 在这里写所有table字段。
    'cpaTable': [
      {
          fieldsKey: "campaignPublisherName",
          fieldsName: "所属平台",
          fieldTips: "计划发起方。",
          isShow: false
      }, {
          fieldsKey: "campaignTime",
          fieldsName: "计划起止时间",
          fieldTips: "一个计划的开始和结束时间。订单需要在起止时间内拍下。",
          isShow: false
      }, {
          fieldsKey: "earningEndTime",
          fieldsName: "效果统计截止时间",
          fieldTips: "买家在该时间内确认收货的订单才会算额外奖励效果，超过了该时间才确认收货的不计入额外奖励效果。",
          isShow: false
      }, {
          fieldsKey: "rewardRule",
          fieldsName: "额外奖励规则",
          fieldTips: "1、您推广带来的累计推广笔数或累计推广金额达到某一范围时，则获得对应的奖励金额。若规则是奖励比率，则对应的奖励金额，是有效订单（符合额外奖励范围内订单）的累计确认收货金额 乘以 奖励比率。2、奖励规则可以针对PC、无线分别设置，在PC端拍下的订单对应PC的奖励规则，在无线端拍下的订单对应无线的奖励规则。奖励规则也可以不区分PC、无线，所有订单对应一个奖励规则。",
          isShow: true
      }, {
          fieldsKey: "clickNum",
          fieldsName: "点击数",
          fieldTips: "达到页面的点击数",
          isShow: false
      }, {
          fieldsKey: "alipayNum",
          fieldsName: "付款笔数",
          fieldTips: "推广带来的付款订单笔数",
          isShow: true
      }, {
          fieldsKey: "alipayFee",
          fieldsName: "付款金额（元）",
          fieldTips: "买家拍下后的付款金额（不包含运费金额）",
          isShow: true
      }, {
          fieldsKey: "settleNum",
          fieldsName: "推广笔数",
          fieldTips: "买家确认收货后的订单数量",
          isShow: true
      }, {
          fieldsKey: "settleFee",
          fieldsName: "推广金额（元）",
          fieldTips: "买家确认收货后的支付宝金额（不包括邮费）。",
          isShow: true
      }, {
          fieldsKey: "rewardFee",
          fieldsName: "预估奖励（元） ",
          fieldTips: "根据推广笔数或推广金额，匹配对应的奖励规则，所计算出来的奖励金额，非最终实际奖励金额。由于是估算数据，是包含了阿里妈妈过滤前的数据，最终奖金金额以月结后您账户内实际收到的为准。月结是在效果统计截止时间所在月份的下个月20日。",
          isShow: true
      }
    ]
  };

  //获取所有字段方法。
  DS.getSourceFields = function(key) {
    return S.clone(defaultConfig[key]);
  };
  //获取已显示字段方法。
  // @source: array 所有字段
  DS.getTargetFields = function(source) {
    var sourceFields = source;
    var targetFields = {};

    S.each(sourceFields, function(item) {
      targetFields[item.fieldsKey] = item.isShow;
    });
    return targetFields;
  };

  return  DS;
}, {
    requires: ['node']
});