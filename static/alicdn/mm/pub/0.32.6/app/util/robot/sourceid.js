KISSY.add('app/util/robot/sourceid', function(S) {
  var pathmap = {
    'default': 464,
    '/myunion/overview': 464,
    '/promo/self/items': 465,
    '/promo/self/links': 465,
    '/promo/taobao/widget_publish': 473,
    '/promo/taobao/coupon': 473,
    '/promo/taobao/software': 473,
    '/promo/act/activity': 474,
    '/promo/self/activity': 474,
    '/promo/act/activity_seller': 474,
    '/promo/act/activity_cpa': 474,
    '/promo/extra/aliyun': 475,
    '/promo/extra/alitrip_intro': 475,
    '/manage/site/site': 476,
    '/manage/zone/zone': 476,
    '/manage/channel/channel': 476,
    '/manage/campaign/campaign': 476,
    '/manage/software/list': 476,
    '/manage/act/activity_mypub': 476,
    '/report/site/site': 467
  }

  return {
    getSourceId: function (path) {
      var sourceId = pathmap[path]

      if (!sourceId) {
        sourceId = pathmap['default']
      }

      return sourceId
    }
  }
})