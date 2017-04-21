KISSY.add('app/models/modelmanager', function (S, BaseManager, Model) {
    var Manager = BaseManager.create(Model);
    Manager.registerModels([
        {
            name: 'overview_settlement',
            uri: 'myunion:overview_settlement',
            type: 'get'
        },
        {
            name: 'overview_list',
            uri: 'myunion:overview_list',
            type: 'get'
        },
        {
            name: 'record_list',
            uri: 'myunion:record_list',
            type: 'get'
        },
        {
            name: 'record_save',
            uri: 'myunion:record_save',
            type: 'post'
        },
        {
            name: 'message_list',
            uri: 'myunion:message_list',
            type: 'get'
        },
        {
            name: 'message_detail',
            uri: 'myunion:message_detail',
            type: 'get'
        },
        {
            name: 'get_menu_auths',
            uri: 'common:get_menu_auths',
            type: 'get'
        },
        {
            name: 'get_tms_content',
            uri: 'common:get_tms_content',
            type: 'get'
        },
        {
            name: 'get_adzone_code',
            uri: 'common:get_adzone_code',
            type: 'get'
        },
        {
            name: 'get_auction_code',
            uri: 'common:get_auction_code',
            type: 'get'
        },
        {
            name: 'get_shop_code',
            uri: 'common:get_shop_code',
            type: 'get'
        },
        {
            name: 'get_shop_other_code',
            uri: 'common:get_shop_other_code',
            type: 'get'
        },
        {
            name: 'shortLink_confirmed',
            uri: 'common:shortLink_confirmed',
            type: 'get'
        },
        {
            name: 'shortLink_confirm',
            uri: 'common:shortLink_confirm',
            type: 'post'
        },
        {
            name: 'links_trans',
            uri: 'common:links_trans',
            type: 'get'
        },
        {
            name: 'links_trans_act',
            uri: 'common:links_trans_act',
            type: 'get'
        },
        {
            name: 'links_trans_cpab2c',
            uri: 'common:links_trans_cpab2c',
            type: 'get'
        },
        {
            name: 'links_trans_pid',
            uri: 'common:links_trans_pid',
            type: 'get'
        },
        {
            name: 'verify_code',
            uri: 'common:verify_code',
            type: 'post'
        },
        {
            name: 'violation_info',
            uri: 'common:violation_info',
            type: 'get'
        },
        {
            name: 'items_list',
            uri: 'promo:items_list',
            type: 'get'
        },
        {
            name: 'items_shopinfo',
            uri: 'promo:items_shopinfo',
            type: 'get'
        },
        {
            name: 'items_campaign',
            uri: 'promo:items_campaign',
            type: 'get'
        },
        {
            name: 'items_apply',
            uri: 'promo:items_apply',
            type: 'post'
        },
        {
            name: 'shops_top',
            uri: 'promo:items_top',
            type: 'get'
        },
        {
            name: 'shops_list',
            uri: 'promo:shops_list',
            type: 'get'
        },
        {
            name: 'shops_list_coupon',
            uri: 'promo:shops_list_coupon',
            type: 'get'
        },
        {
            name: 'campaign_detail',
            uri: 'promo:campaign_detail',
            type: 'get'
        },
        {
            name: 'campaign_items',
            uri: 'promo:campaign_items',
            type: 'get'
        },
        {
            name: 'campaign_history',
            uri: 'promo:campaign_history',
            type: 'get'
        },
        {
            name: 'search_item_list',
            uri: 'promo:search_item_list',
            type: 'get'
        },
        {
            name: 'links_keywords',
            uri: 'promo:links_keywords',
            type: 'get'
        },
        {
            name: 'category_level1',
            uri: 'promo:category_level1',
            type: 'get'
        },
        {
            name: 'category_level2',
            uri: 'promo:category_level2',
            type: 'get'
        },
        {
            name: 'category_code',
            uri: 'promo:category_code',
            type: 'get'
        },
        {
            name: 'widget_publish_list',
            uri: 'promo:widget_publish_list',
            type: 'get'
        },
        {
            name: 'widget_private_list',
            uri: 'promo:widget_private_list',
            type: 'get'
        },
        {
            name: 'widget_private_create',
            uri: 'promo:widget_private_create',
            type: 'post'
        },
        {
            name: 'widget_private_edit',
            uri: 'promo:widget_private_edit',
            type: 'get'
        },
        {
            name: 'widget_private_edit_save',
            uri: 'promo:widget_private_edit_save',
            type: 'post'
        },
        {
            name: 'magic_join',
            uri: 'promo:magic_join',
            type: 'get'
        },
        {
            name: 'magic_agreement',
            uri: 'promo:magic_agreement',
            type: 'post'
        },
        {
            name: 'magic_app_list',
            uri: 'promo:magic_app_list',
            type: 'get'
        },
        {
            name: 'magic_app_num',
            uri: 'promo:magic_app_num',
            type: 'get'
        },
        {
            name: 'magic_app_register',
            uri: 'promo:magic_app_register',
            type: 'post'
        },
        {
            name: 'coupon_list',
            uri: 'promo:coupon_list',
            type: 'get'
        },
        {
            name: 'coupon_join',
            uri: 'promo:coupon_join',
            type: 'get'
        },
        {
            name: 'coupon_effect',
            uri: 'promo:coupon_effect',
            type: 'get'
        },
        {
            name: 'conpon_can_get_url',
            uri: 'promo:conpon_can_get_url',
            type: 'get'
        },
        {
            name: 'super_coupon_code',
            uri: 'promo:super_coupon_code',
            type: 'get'
        },
        {
            name: 'coupon_agreement',
            uri: 'promo:coupon_agreement',
            type: 'get'
        },
        {
            name: 'software_join_info',
            uri: 'promo:software_join_info',
            type: 'get'
        },
        {
            name: 'software_join',
            uri: 'promo:software_join',
            type: 'post'
        },
        {
            name: 'software_promo_enum',
            uri: 'promo:software_promo_enum',
            type: 'get'
        },
        {
            name: 'software_promo_code',
            uri: 'promo:software_promo_code',
            type: 'get'
        },
        {
            name: 'stepcommission_list',
            uri: 'promo:stepcommission_list',
            type: 'get'
        },
        {
            name: 'stepcommission_join',
            uri: 'promo:stepcommission_join',
            type: 'post'
        },
        {
            name: 'stepcommission_detail',
            uri: 'promo:stepcommission_detail',
            type: 'get'
        },
        {
            name: 'shop_detail_baseInfo',
            uri: 'promo:shop_detail_baseInfo',
            type: 'get'
        },
        {
            name: 'shop_detail_chart',
            uri: 'promo:shop_detail_chart',
            type: 'get'
        },
        {
            name: 'shop_detail_campaign',
            uri: 'promo:shop_detail_campaign',
            type: 'get'
        },
        {
            name: 'shop_detail_hot',
            uri: 'promo:shop_detail_hot',
            type: 'get'
        },
        {
            name: 'shop_detail_material',
            uri: 'promo:shop_detail_material',
            type: 'get'
        },
        {
            name: 'shop_detail_subscribe',
            uri: 'promo:shop_detail_subscribe',
            type: 'get'
        },
        {
            name: 'shop_detail_notice',
            uri: 'promo:shop_detail_notice',
            type: 'get'
        },
        {
            name: 'shop_detail_noticeDetail',
            uri: 'promo:shop_detail_noticeDetail',
            type: 'get'
        },
        {
            name: 'extra_overview',
            uri: 'promo:extra_overview',
            type: 'post'
        },
        {
            name: 'extra_list',
            uri: 'promo:extra_list',
            type: 'get'
        },
        {
            name: 'extra_rule_detail',
            uri: 'promo:extra_rule_detail',
            type: 'post'
        },
        {
            name: 'extra_promote_list',
            uri: 'promo:extra_promote_list',
            type: 'post'
        },
        {
            name: 'act_official_list',
            uri: 'promo:act_official_list',
            type: 'get'
        },
        {
            name: 'aliyun_join',
            uri: 'promo:aliyun_join',
            type: 'get'
        },
        {
            name: 'aliyun_agreement',
            uri: 'promo:aliyun_agreement',
            type: 'post'
        },
        {
            name: 'alitrip_item',
            uri: 'promo:alitrip_item',
            type: 'get'
        },
        {
            name: 'alitrip_widget_list',
            uri: 'promo:alitrip_widget_list',
            type: 'get'
        },
        {
            name: 'alitrip_official_list',
            uri: 'promo:alitrip_official_list',
            type: 'get'
        },
        {
            name: 'bind_weibo',
            uri: 'promo:bind_weibo',
            type: 'get'
        },
        {
            name: 'weibo_status',
            uri: 'promo:weibo_status',
            type: 'get'
        },
        {
            name: 'ideas_list',
            uri: 'promo:ideas_list',
            type: 'get'
        },
        {
            name: 'send_ideas',
            uri: 'promo:send_ideas',
            type: 'post'
        },
        {
            name: 'add_sendlist',
            uri: 'promo:add_sendlist',
            type: 'post'
        },
        {
            name: 'due_tips',
            uri: 'promo:due_tips',
            type: 'get'
        },
        {
            name: 'items_weibo',
            uri: 'promo:items_weibo',
            type: 'get'
        },
        {
            name: 'get_weiboid_list',
            uri: 'promo:get_weiboid_list',
            type: 'get'
        },
        {
            name: 'get_itemUrl',
            uri: 'promo:get_itemUrl',
            type: 'get'
        },
        {
            name: 'get_permission',
            uri: 'promo:get_permission',
            type: 'get'
        },
        {
            name: 'weibo_shopinfo',
            uri: 'promo:weibo_shopinfo',
            type: 'get'
        },
        {
            name: 'weibo_status_manage',
            uri: 'manage:weibo_status_manage',
            type: 'get'
        },
        {
            name: 'good_date',
            uri: 'promo:good_date',
            type: 'get'
        },
        {
            name: 'boutique_date',
            uri: 'promo:boutique_date',
            type: 'get'
        },
        {
            name: 'good_down',
            uri: 'promo:good_down',
            type: 'post'
        },
        {
            name: 'query_weibo',
            uri: 'manage:query_weibo',
            type: 'get'
        },
        {
            name: 'send_weibo',
            uri: 'manage:send_weibo',
            type: 'post'
        },
        {
            name: 'delete_ideas',
            uri: 'manage:delete_ideas',
            type: 'post'
        },
        {
            name: 'update_ideas',
            uri: 'manage:update_ideas',
            type: 'post'
        },
        {
            name: 'create_promo',
            uri: 'manage:create_promo',
            type: 'get'
        },
        {
            name: 'site_list',
            uri: 'manage:site_list',
            type: 'get'
        },
        {
            name: 'site_edit',
            uri: 'manage:site_edit',
            type: 'get'
        },
        {
            name: 'site_del',
            uri: 'manage:site_del',
            type: 'post'
        },
        {
            name: 'site_save',
            uri: 'manage:site_save',
            type: 'post'
        },
        {
            name: 'site_type',
            uri: 'manage:site_type',
            type: 'get'
        },
        {
            name: 'site_verify',
            uri: 'manage:site_verify',
            type: 'post',
            noVerify: true
        },
        {
            name: 'site_type_list',
            uri: 'manage:site_type_list',
            type: 'get'
        },
        {
            name: 'guide_list',
            uri: 'manage:guide_list',
            type: 'get'
        },
        {
            name: 'guide_info',
            uri: 'manage:guide_info',
            type: 'get'
        },
        {
            name: 'guide_cat',
            uri: 'manage:guide_cat',
            type: 'get'
        },
        {
            name: 'guide_save',
            uri: 'manage:guide_save',
            type: 'post'
        },
        {
            name: 'guide_edit',
            uri: 'manage:guide_edit',
            type: 'post'
        },
        {
            name: 'guide_del',
            uri: 'manage:guide_del',
            type: 'post'
        },
        {
            name: 'wap_list',
            uri: 'manage:wap_list',
            type: 'get'
        },
        {
            name: 'wap_edit',
            uri: 'manage:wap_edit',
            type: 'get'
        },
        {
            name: 'wap_del',
            uri: 'manage:wap_del',
            type: 'post'
        },
        {
            name: 'wap_save',
            uri: 'manage:wap_save',
            type: 'post'
        },
        {
            name: 'app_list',
            uri: 'manage:app_list',
            type: 'get'
        },
        {
            name: 'app_info',
            uri: 'manage:app_info',
            type: 'get'
        },
        {
            name: 'app_del',
            uri: 'manage:app_del',
            type: 'post'
        },
        {
            name: 'app_save',
            uri: 'manage:app_save',
            type: 'post'
        },
        {
            name: 'app_up_apk',
            uri: 'manage:app_up_apk',
            type: 'post'
        },
        {
            name: 'app_up_bundleId',
            uri: 'manage:app_up_bundleId',
            type: 'post'
        },
        {
            name: 'software_list',
            uri: 'manage:software_list',
            type: 'get'
        },
        {
            name: 'software_info',
            uri: 'manage:software_info',
            type: 'get'
        },
        {
            name: 'software_save',
            uri: 'manage:software_save',
            type: 'post'
        },
        {
            name: 'channel_list',
            uri: 'manage:channel_list',
            type: 'get'
        },
        {
            name: 'channel_add',
            uri: 'manage:channel_add',
            type: 'get'
        },
        {
            name: 'channel_edit',
            uri: 'manage:channel_edit',
            type: 'get'
        },
        {
            name: 'channel_del',
            uri: 'manage:channel_del',
            type: 'post'
        },
        {
            name: 'channel_save',
            uri: 'manage:channel_save',
            type: 'post'
        },
        {
            name: 'zone_list',
            uri: 'manage:zone_list',
            type: 'get'
        },
        {
            name: 'zone_edit',
            uri: 'manage:zone_edit',
            type: 'get'
        },
        {
            name: 'zone_del',
            uri: 'manage:zone_del',
            type: 'post'
        },
        {
            name: 'zone_save',
            uri: 'manage:zone_save',
            type: 'post'
        },
        {
            name: 'check_authority',
            uri: 'manage:check_authority',
            type: 'get'
        },
        {
            name: 'apply_authority',
            uri: 'manage:apply_authority',
            type: 'post'
        },
        {
            name: 'del_authority',
            uri: 'manage:del_authority',
            type: 'post'
        },
        {
            name: 'check_appkey',
            uri: 'manage:check_appkey',
            type: 'get'
        },
        {
            name: 'bind_appkey',
            uri: 'manage:bind_appkey',
            type: 'post'
        },
        {
            name: 'fetch_festivalList',
            uri: 'manage:fetch_festivalList',
            type: 'get'
        },
        {
            name: 'zone_add_pc',
            uri: 'manage:zone_add_pc',
            type: 'get'
        },
        {
            name: 'zone_add_mobile',
            uri: 'manage:zone_add_mobile',
            type: 'get'
        },
        {
            name: 'zone_add_self',
            uri: 'manage:zone_add_self',
            type: 'get'
        },
        {
            name: 'zone_add_create',
            uri: 'manage:zone_add_create',
            type: 'post'
        },
        {
            name: 'zone_add_self_create',
            uri: 'manage:zone_add_self_create',
            type: 'post'
        },
        {
            name: 'zone_add_comfirm_state',
            uri: 'manage:zone_add_comfirm_state',
            type: 'get'
        },
        {
            name: 'zone_add_comfirm_ensure',
            uri: 'manage:zone_add_comfirm_ensure',
            type: 'post'
        },
        {
            name: 'campaign_list',
            uri: 'manage:campaign_list',
            type: 'get'
        },
        {
            name: 'campaign_exit',
            uri: 'manage:campaign_exit',
            type: 'post'
        },
        {
            name: 'stepcommission_manage_list',
            uri: 'manage:stepcommission_manage_list',
            type: 'get'
        },
        {
            name: 'magic_list',
            uri: 'manage:magic_list',
            type: 'get'
        },
        {
            name: 'magic_reward_list',
            uri: 'manage:magic_reward_list',
            type: 'get'
        },
        {
            name: 'magic_reward_num',
            uri: 'manage:magic_reward_num',
            type: 'get'
        },
        {
            name: 'magic_app_online',
            uri: 'manage:magic_app_online',
            type: 'post'
        },
        {
            name: 'magic_app_offline',
            uri: 'manage:magic_app_offline',
            type: 'post'
        },
        {
            name: 'magic_app_del',
            uri: 'manage:magic_app_del',
            type: 'post'
        },
        {
            name: 'magic_reward_del',
            uri: 'manage:magic_reward_del',
            type: 'post'
        },
        {
            name: 'magic_reward_check',
            uri: 'manage:magic_reward_check',
            type: 'post'
        },
        {
            name: 'magic_reward_info',
            uri: 'manage:magic_reward_info',
            type: 'get'
        },
        {
            name: 'magic_reward_save',
            uri: 'manage:magic_reward_save',
            type: 'post'
        },
        {
            name: 'magic_reward_update',
            uri: 'manage:magic_reward_update',
            type: 'post'
        },
        {
            name: 'act_total_info',
            uri: 'manage:act_total_info',
            type: 'get'
        },
        {
            name: 'act_wangwang_info',
            uri: 'manage:act_wangwang_info',
            type: 'get'
        },
        {
            name: 'act_type_info',
            uri: 'manage:act_type_info',
            type: 'get'
        },
        {
            name: 'act_edit_info',
            uri: 'manage:act_edit_info',
            type: 'get'
        },
        {
            name: 'act_add_step1',
            uri: 'manage:act_add_step1',
            type: 'post'
        },
        {
            name: 'act_share_rate',
            uri: 'manage:act_share_rate',
            type: 'get'
        },
        {
            name: 'act_tmpl_info',
            uri: 'manage:act_tmpl_info',
            type: 'get'
        },
        {
            name: 'act_add_step2',
            uri: 'manage:act_add_step2',
            type: 'post'
        },
        {
            name: 'act_add_step3',
            uri: 'manage:act_add_step3',
            type: 'post'
        },
        {
            name: 'act_cat_info',
            uri: 'manage:act_cat_info',
            type: 'get'
        },
        {
            name: 'act_open',
            uri: 'manage:act_open',
            type: 'post'
        },
        {
            name: 'software_promo_list',
            uri: 'manage:software_promo_list',
            type: 'get'
        },
        {
            name: 'demo_insertViewedPage',
            uri: 'common:demo_insertViewedPage',
            type: 'post',
            noVerify: true
        },
        {
            name: 'demo_queryViewedPage',
            uri: 'common:demo_queryViewedPage',
            type: 'get',
            noVerify: true
        },
        {
            name: 'report_media',
            uri: 'report:report_media',
            type: 'get'
        },
        {
            name: 'report_media_table',
            uri: 'report:report_media_table',
            type: 'get'
        },
        {
            name: 'report_zone_act',
            uri: 'report:report_zone_act',
            type: 'get'
        },
        {
            name: 'report_zone_act_table',
            uri: 'report:report_zone_act_table',
            type: 'get'
        },
        {
            name: 'report_zone_self',
            uri: 'report:report_zone_self',
            type: 'get'
        },
        {
            name: 'report_zone_self_table',
            uri: 'report:report_zone_self_table',
            type: 'get'
        },
        {
            name: 'report_zone_widget',
            uri: 'report:report_zone_widget',
            type: 'get'
        },
        {
            name: 'report_zone_widget_table',
            uri: 'report:report_zone_widget_table',
            type: 'get'
        },
        {
            name: 'report_zone_channel',
            uri: 'report:report_zone_channel',
            type: 'get'
        },
        {
            name: 'report_zone_channel_table',
            uri: 'report:report_zone_channel_table',
            type: 'get'
        },
        {
            name: 'report_zone_weibo',
            uri: 'report:report_zone_weibo',
            type: 'get'
        },
        {
            name: 'report_zone_weibo_table',
            uri: 'report:report_zone_weibo_table',
            type: 'get'
        },
        {
            name: 'report_zone_extra',
            uri: 'report:report_zone_extra',
            type: 'get'
        },
        {
            name: 'report_zone_extra_table',
            uri: 'report:report_zone_extra_table',
            type: 'get'
        },
        {
            name: 'report_zone_api',
            uri: 'report:report_zone_api',
            type: 'get'
        },
        {
            name: 'report_zone_api_table',
            uri: 'report:report_zone_api_table',
            type: 'get'
        },
        {
            name: 'report_zone_cpa',
            uri: 'report:report_zone_cpa',
            type: 'get'
        },
        {
            name: 'report_zone_software',
            uri: 'report:report_zone_software',
            type: 'get'
        },
        {
            name: 'report_zone_software_table',
            uri: 'report:report_zone_software_table',
            type: 'get'
        },
        {
            name: 'report_taoke',
            uri: 'report:report_taoke',
            type: 'get'
        },
        {
            name: 'report_ruyitou',
            uri: 'report:report_ruyitou',
            type: 'get'
        },
        {
            name: 'report_extra',
            uri: 'report:report_extra',
            type: 'get'
        },
        {
            name: 'report_rights',
            uri: 'report:report_rights',
            type: 'get'
        },
        {
            name: 'report_hide_download',
            uri: 'report:report_hide_download',
            type: 'get'
        },
        {
            name: 'act_activity_filter',
            uri: 'promo:act_activity_filter',
            type: 'get'
        },
        {
            name: 'act_activity_list',
            uri: 'promo:act_activity_list',
            type: 'get'
        },
        {
            name: 'act_activity_code',
            uri: 'promo:act_activity_code',
            type: 'post'
        },
        {
            name: 'act_activity_detail',
            uri: 'promo:act_activity_detail',
            type: 'get'
        },
        {
            name: 'act_activity_mypub',
            uri: 'manage:act_activity_mypub',
            type: 'get'
        },
        {
            name: 'act_activity_mycreated',
            uri: 'manage:act_activity_mycreated',
            type: 'get'
        },
        {
            name: 'act_activity_publish',
            uri: 'manage:act_activity_publish',
            type: 'post',
            noVerify: true
        },
        {
            name: 'act_activity_del',
            uri: 'manage:act_activity_del',
            type: 'get'
        },
        {
            name: 'act_activity_item_filter',
            uri: 'manage:act_activity_item_filter',
            type: 'get'
        },
        {
            name: 'act_activity_item_list',
            uri: 'manage:act_activity_item_list',
            type: 'get'
        },
        {
            name: 'act_activity_item_quit_list',
            uri: 'manage:act_activity_item_quit_list',
            type: 'get'
        },
        {
            name: 'act_activity_quititems_refuse',
            uri: 'manage:act_activity_quititems_refuse',
            type: 'get'
        },
        {
            name: 'act_activity_item_audit',
            uri: 'manage:act_activity_item_audit',
            type: 'post'
        },
        {
            name: 'act_activity_tags_update',
            uri: 'manage:act_activity_tags_update',
            type: 'post'
        }
    ]);
    return Manager;
}, {
    requires: [
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
        'app/util/util',
        'app/util/datepicker/datepicker',
        'app/util/dialog/dialog',
        'app/util/format/format',
        'app/util/globaltip/globaltip',
        'app/util/robot/sourceid',
        'app/util/spmlog/spmlog',
        'app/util/mathextend/mathextend',
        'app/util/tooltip/tooltip',
        'app/util/widgetds/widgetds',
        'app/util/rank/rank',
        'app/util/reporttip/reporttip',
        'app/util/vcode/vcode',
        'app/util/pagination/index',
        'app/util/fields/fields',
        'app/util/mouseevent/index',
        'magix/vframe',
        'magix/vom',
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'node',
        'app/util/spmlog/pathmap'
    ]
});