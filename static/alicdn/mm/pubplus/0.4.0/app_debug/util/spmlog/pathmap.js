/**
 * pageId定义文档：http://tbdocs.alibaba-inc.com/pages/viewpage.action?pageId=276370109
 */

define('app/util/spmlog/pathmap', function() {
  return {
    // 达人平台
    '/talent/index.htm': {
      pageId: 30
    },
    // 首页
    '/': {
      pageId: 1
    },
    // 单品搜索列表
    '/promo/search/index.htm': {
      pageId: 10
    },
    // 频道页面
    '/promo/item/channel/index.htm': {
      pageId: {
        nzjh: 21,
        muying: 22,
        dxjh: 20,
        qqhd: 19,
        '9k9': 16,
        '20k': 17,
        tehui: 18
      }
    },
    // 频道页面
    '/promo/item/oe_channel/index.htm': {
      pageId: {
        ifs: 26,
        qbb: 25,
        hch: 28,
        cdj: 27,
        'jyj': 23,
        'kdc': 24,
        diy: 29
      }
    },
    // 选品库列表
    '/manage/selection/list.htm': {
      pageId: 11
    },
    // 选品库详情
    '/manage/selection/detail.htm': {
      pageId: 12
    },
    // 招商需求列表
    '/manage/zhaoshang/list.htm': {
      pageId: 13
    },
    // 招商需求详情
    '/manage/zhaoshang/detail.htm': {
      pageId: 14
    },
    // 招商需求列表
    '/manage/zhaoshang/create.htm': {
      pageId: 15
    }
  }
})