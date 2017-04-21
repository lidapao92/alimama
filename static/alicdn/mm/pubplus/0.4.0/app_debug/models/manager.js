define('app/models/manager', [
  'app/models/model',
  'magix'
], function (Model, Magix) {
  var M = Magix.Manager.create(Model)

  // 新增网站
  M.registerModels([
    // 获取导购推广类目
    {
      name: 'get_self_cat',
      url: '/common/site/generalize/guideGetCategory.json',
      method: 'GET'
    }
  ])

  // 设置推广位
  M.registerModels([
    // 获取自助推广的推广位
    {
      name: 'get_self_adzone',
      url: '/common/adzone/newSelfAdzone2.json',
      method: 'GET',
      actionId: 10
    },
    // 创建自助推广的推广位
    {
      name: 'create_self_adzone',
      url: '/common/adzone/selfAdzoneCreate.json',
      method: 'POST',
      actionId: 11
    }
  ])

  // 获取代码
  M.registerModels([
    // 单品代码
    {
      name: 'get_item_code',
      url: '/common/code/getAuctionCode.json',
      method: 'GET',
      actionId: 30
    },
    // 批量单品代码
    {
      name: 'get_batch_item_code',
      url: '/common/code/getAuctionCode.json',
      method: 'GET',
      actionId: 30
    }
  ])

  // 定向计划
  M.registerModels([
    // 获取定向计划列表
    {
      name: 'get_campaign_list',
      url: '/pubauc/getCommonCampaignByItemId.json',
      method: 'GET',
      actionId: 60
    },
    // 申请定向计划
    {
      name: 'apply_campaign',
      url: '/pubauc/applyForCommonCampaign.json',
      method: 'POST',
      actionId: 61
    }
  ])

  // 选品分组
  M.registerModels([
    // 创建与修改
    {
      name: 'selection_group_save',
      url: '/favorites/group/save.json',
      method: 'POST',
      actionId: 202
    },
    // 删除分组
    {
      name: 'selection_group_del',
      url: '/favorites/group/delete.json',
      method: 'POST',
      actionId: 203
    },
    // 获取选品分组列表
    {
      name: 'get_selection_group_list',
      url: '/favorites/group/newList.json',
      method: 'GET',
      actionId: 201
    },

    // 添加选品到分组
    {
      name: 'selection_add_group',
      url: '/favorites/item/batchAdd.json',
      method: 'POST',
      actionId: 301
    },

      // 获取选品商品列表
    {
      name: 'selection_item_goods',
      url: '/favorites/item/list.json',
      method: 'GET',
      actionId: 300
    },
    {
      name: 'selection_goods_del',
      url: '/favorites/item/batchDelete.json',
      method: 'GET',
      actionId: 302
    },
    {
      name: 'selection_invalid_goods_items_del',
      url: '/favorites/item/deleteInvalidItems.json',
      method: 'GET',
      actionId: 304
    }
  ])

  // 搜索结果
  M.registerModels([
    // 获取列表
    {
      name: 'search_item_lists',
      url: '/items/search.json',
      method: 'GET',
      actionId: 100
    },
    //获取店铺信息
    {
      name: 'shop_info',
      url: '/pubauc/searchPromotionInfo.json',
      method: 'GET',
      actionId: 51
    }
  ])

  // 频道页面
  M.registerModels([
    // 女装尖货
    {
      name: 'item_channel_nzjh',
      url: '/items/channel/nzjh.json',
      method: 'GET',
      actionId: 455
    },
    // 母婴热推
    {
      name: 'item_channel_muying',
      url: '/items/channel/muying.json',
      method: 'GET',
      actionId: 456
    },
    // 淘宝客活动
    {
      name: 'item_channel_qqhd',
      url: '/items/channel/qqhd.json',
      method: 'GET',
      actionId: 453
    },
    // 定向计划
    {
      name: 'item_channel_dxjh',
      url: '/items/channel/dxjh.json',
      method: 'GET',
      actionId: 454
    },
    // 9块9包邮
    {
      name: 'item_channel_9k9',
      url: '/items/channel/9k9.json',
      method: 'GET',
      actionId: 450
    },
    // 20元封顶
    {
      name: 'item_channel_20k',
      url: '/items/channel/20k.json',
      method: 'GET',
      actionId: 451
    },
    // 特价好货
    {
      name: 'item_channel_tehui',
      url: '/items/channel/tehui.json',
      method: 'GET',
      actionId: 452
    },
    // 极有家
    {
      name: 'item_channel_jyj',
      url: '/items/channel/jyj.json',
      method: 'GET',
      actionId: 457
    },
    // 酷动城
    {
      name: 'item_channel_kdc',
      url: '/items/channel/kdc.json',
      method: 'GET',
      actionId: 458
    },
      //亲宝贝
    {
      name: 'item_channel_qbb',
      url: '/items/channel/qbb.json',
      method: 'GET',
      actionId: 459
    },
      //ifashion
    {
      name: 'item_channel_ifs',
      url: '/items/channel/ifs.json',
      method: 'GET',
      actionId: 460
    },
      // 潮电街
    {
      name: 'item_channel_cdj',
      url: '/items/channel/cdj.json',
      method: 'GET',
      actionId: 461
    },
      //汇吃
    {
      name: 'item_channel_hch',
      url: '/items/channel/hch.json',
      method: 'GET',
      actionId: 462
    },
    // 淘宝diy
    {
      name: 'item_channel_diy',
      url: '/items/channel/diy.json',
      method: 'GET',
      actionId: 463
    }
  ])

  // 销货区块
  M.registerModels([
    {
      name: 'get_sales_list',
      url: '/items/hot/list.json',
      method: 'GET',
      actionId: 500
    }
  ])

  // 我的招商
  M.registerModels([
    // 获取我的招商列表
    {
      name: 'get_zhaoshang_list',
      url: '/itemevent/event/list.json',
      method: 'GET',
      actionId: 400
    },
    // 获取招商个数限制
    {
      name: 'get_zhaoshang_limit',
      url: '/itemevent/event/creationLimit.json',
      method: 'GET',
      actionId: 406
    },
    // 获取选品库失效商品个数
    {
      name: 'selection_goods_invalid_count',
      url: '/favorites/item/invalidItemCount.json',
      method: 'GET',
      actionId: 305
    },
    // 删除招商需求
    {
      name: 'del_zhaoshang',
      url: '/itemevent/event/delete.json',
      method: 'POST',
      actionId: 407
    },
    // 获取指定groupId对应的信息
    {
      name: 'get_zhaoshang_group_info',
      url: '/favorites/group/baseInfo.json',
      method: 'GET'
    },

    // 获取招商商品列表
    {
      name: 'get_zhaoshang_item_list',
      url: '/itemevent/item/list.json',
      method: 'GET',
      actionId: 404
    },
    // 获取指定eventId对应的招商活动信息
    {
      name: 'get_zhaoshang_detail',
      url: '/itemevent/event/detail.json',
      method: 'GET',
      actionId: 401
    },
    // 保存招商需求
    {
      name: 'zhaoshang_save',
      url: '/itemevent/event/save.json',
      method: 'POST',
      actionId: 402
    },
    // 保存修改单个商品佣金
    {
      name: 'zhaoshang_commission_modify',
      url: '/itemevent/item/commission/modify.json',
      method: 'POST',
      actionId: 405
    }
  ])

  // 通用接口
  M.registerModels([
    // 获取tms内容
    {
      name: 'get_tms_content',
      url: '/common/getTmsContent.json',
      method: 'GET'
    }
  ])

  M.registerModels([
    {
      name: 'get_sign',
      url: '/common/pubSigned.json',
      method: 'GET'
    }
  ])
  M.registerModels([
    {
      name: 'set_sign',
      url: '/common/pubSign.json',
      method: 'post'
    }
  ])
  // 达人
  M.registerModels([
    {
      name: 'talent_member_status',
      url: '/talent/status.json',
      method: 'GET',
      skipTip: true
    },
    {
      name: 'recordCreate',
      url: '/talent/save.json',
      method: 'POST'
    },
    {
      name: 'recordUpdate',
      url: '/talent/update.json',
      method: 'POST'
    },
    {
      name: 'channelRecord',
      url: '/talent/record.json',
      method: 'GET'
    }
  ]);
  return M
})