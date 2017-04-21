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
KISSY.add('app/models/model', function (S, BaseModel) {
    return BaseModel.extend({
        urlMap: {
            myunion: {
                overview_settlement: '/overview/unionaccountinfo.json',
                overview_list: '/overview/getPromotionEffectByProduct.json',
                message_list: '',
                message_detail: ''
            },
            promo: {
                items_list: '/pubauc/searchAuctionList.json',
                items_shopinfo: '/pubauc/searchPromotionInfo.json',
                items_campaign: '/pubauc/getCommonCampaignDetails.json',
                items_apply: '/pubauc/applyForCommonCampaign.json',
                shops_list: '/shopsearch/shopList.json',
                campaign_detail: '/campaign/campaignDetail.json',
                campaign_items: '/campaign/merchandiseDetail.json',
                campaign_history: '/campaign/commissionHistory.json',
                shop_detail_baseInfo: '/shopdetail/shopinfo.json',
                shop_detail_chart: '/shopdetail/keeper30DayRpt.json',
                shop_detail_campaign: '/shopdetail/campaigns.json',
                shop_detail_hot: '/shopdetail/hotProducts.json',
                shop_detail_material: '/shopdetail/publishMaterials.json',
                shop_detail_subscribe: '/shopdetail/subscribeKeeperInfo.json',
                shop_detail_notice: '/shopdetail/notices.json',
                shop_detail_noticeDetail: '/shopdetail/noticeDetail.json',
                search_item_list: '/pubauc/searchAuctionListWithTKEngine.json',
                extra_overview: '/newcpa/campaign/overview.json',
                extra_list: '/newcpa/campaign/list.json',
                extra_rule_detail: '/newcpa/campaign/queryRuleDetail.json',
                extra_promote_list: '/newcpa/campaign/promote.json',
                links_keywords: '/urltrans/keywordUrlTrans.json',
                category_level1: '/pubatb/getRootCategories.json',
                category_level2: '/pubatb/getSecondCategories.json',
                category_code: '/pubatb/fetchPromotionUrl.json',
                bind_weibo: '/minShopGuide/getBindUrl.json',
                weibo_status: '/minShopGuide/getWeiboStatus.json',
                ideas_list: '/minShopGuide/searchAuctionList.json',
                send_ideas: '/minShopGuide/sendWeibo.json',
                add_sendlist: '/minShopGuide/addWeiboSendList.json',
                due_tips: '/minShopGuide/remindOfExpire.json',
                items_weibo: '/minShopGuide/queryItems.json',
                get_itemUrl: '/minShopGuide/getAuctionUrl.json',
                get_permission: '/minShopGuide/hasCPCPermission.json',
                weibo_shopinfo: '/minShopGuide/searchPromotionInfo.json',
                good_date: '/coupon/qq/updateDate.json',
                boutique_date: '/coupon/boutique/getUpdateDate.json',
                good_down: '/item/search/export.json',
                widget_publish_list: '/dianjin/widgetTemplatePublicList.json',
                widget_private_list: '/dianjin/widgetTemplatePrivateList.json',
                widget_private_create: '/dianjin/widgetTemplateCreate.json',
                widget_private_edit: '/dianjin/widgetTemplateEdit.json',
                widget_private_edit_save: '/dianjin/widgetTemplateEditSave.json',
                magic_join: '/magicbox/isSignedMagicBox.json',
                magic_agreement: '/magicbox/signedMagicBox.json',
                magic_app_list: '/magicbox/getAppsToSelect.json',
                magic_app_num: '/magicbox/getAppNum.json',
                magic_app_register: '/magicbox/registerApp.json',
                coupon_list: '/superCoupon/eventList.json',
                coupon_join: '/superCoupon/isSigned.json',
                coupon_effect: '/superCoupon/effectNew.json',
                conpon_can_get_url: '/superCoupon/canGetUrl.json',
                super_coupon_code: '/superCoupon/getUrlNew.json',
                coupon_agreement: '/superCoupon/doSigned.json',
                software_promo_enum: '/pgy/pubEnums.json',
                software_promo_code: '/pgy/pubDetail.json',
                stepcommission_list: '/cpa/getAvailableCpaCampaigns.json',
                stepcommission_detail: '/cpa/getCpaLadderDetail.json',
                stepcommission_join: '/cpa/joinCpaCampaign.json',
                aliyun_join: '/aliyun/getJoinInfo.json',
                aliyun_agreement: '/aliyun/joinAliyun.json',
                alitrip_item: '/alitrip/top.json',
                alitrip_widget_list: '/alitrip/widgetTemplatePublicListForTrip.json',
                alitrip_official_list: '/alitrip/tripOfficialEventList.json',
                act_activity_filter: '/event/squareEnums.json',
                act_activity_list: '/event/squareList.json',
                act_activity_code: '/event/publish.json',
                act_activity_detail: '/event/detail.json',
                act_official_list: '/event/newOfficialEventList.json'
            },
            manage: {
                act_activity_tags_update: '/event/templatetags.json',
                act_activity_item_audit: '/event/itemsAudit.json',
                act_activity_item_list: '/event/items.json',
                act_activity_item_quit_list: '/event/exitCpsItems.json',
                act_activity_item_filter: '/event/itemsEnums.json',
                act_activity_del: '/event/del.json',
                act_activity_publish: '/event/release.json',
                act_activity_quititems_refuse: '/event/refuseExitCpsItems.json',
                act_activity_mypub: '/event/myPub.json',
                act_activity_mycreated: '/event/myCreated.json',
                create_promo: '/common/site/hasPromotionMedia.json',
                site_list: '/common/site/webSiteManage.json',
                site_edit: '/common/site/webSiteEdit.json',
                site_del: '/common/site/webSiteDelete.json',
                site_save: '/common/site/webSiteSave.json',
                site_type: '/common/site/getSiteTypeList.json',
                site_verify: '/common/site/unionSiteUrlVerify.json',
                site_type_list: '/common/site/getSiteTypeList.json',
                guide_list: '/common/site/generalize/guideList.json',
                guide_info: '/common/site/generalize/guideInfo.json',
                guide_cat: '/common/site/generalize/guideGetCategory.json',
                guide_save: '/common/site/generalize/guideAdd.json',
                guide_edit: '/common/site/generalize/guideEdit.json',
                guide_del: '/common/site/generalize/guideSiteDelete.json',
                wap_list: '/common/site/wapSiteManage.json',
                wap_edit: '/common/site/wapEdit.json',
                wap_del: '/common/site/wirelessSiteDelete.json',
                wap_save: '/common/site/wapSave.json',
                app_list: '/common/site/appSiteManage2.json',
                app_info: '/common/site/appEdit2.json',
                app_del: '/common/site/wirelessSiteDelete2.json',
                app_save: '/common/site/appSave2.json',
                app_up_apk: '/common/site/androidApkSave.json',
                app_up_bundleId: '/common/site/iosBundleIdSave.json',
                software_list: '/common/site/pcSoftSiteManage.json',
                software_info: '/common/site/pcSoftSiteEdit.json',
                software_save: '/common/site/pcSoftSiteSave.json',
                channel_list: '/common/channel/channelManage.json',
                channel_add: '/common/channel/newChannel.json',
                channel_edit: '/common/channel/channelEdit.json',
                channel_del: '/common/channel/channelDelete.json',
                channel_save: '/common/channel/channelSave.json',
                zone_list: '/common/adzone/adzoneManage.json',
                zone_edit: '/common/adzone/adzoneEdit.json',
                zone_del: '/common/adzone/adzoneDelete.json',
                zone_save: '/common/adzone/adzoneSave.json',
                zone_add_pc: '/common/adzone/newAdzone.json',
                zone_add_mobile: '/common/adzone/newWirelessAdzone2.json',
                zone_add_self: '/common/adzone/newSelfAdzone2.json',
                zone_add_create: '/common/adzone/adzoneCreate.json',
                zone_add_self_create: '/common/adzone/selfAdzoneCreate.json',
                zone_add_comfirm_state: '/event/getCommissionSharePromptState.json',
                zone_add_comfirm_ensure: '/event/confirmCommissionSharePrompt.json',
                query_weibo: '/minShopGuide/queryWeiboSendMessageDOs.json',
                send_weibo: '/minShopGuide/setWeiboSendTime.json',
                delete_ideas: '/minShopGuide/deleteWeiboMessage.json',
                update_ideas: '/minShopGuide/updateWeiboDesc.json',
                weibo_status_manage: '/minShopGuide/getWeiboStatus.json',
                campaign_list: '/campaign/joinedCampaigns.json',
                campaign_exit: '/campaign/exitCampaign.json',
                stepcommission_manage_list: '/cpa/getJoinedCpaCampaigns.json',
                magic_list: '/magicbox/getApps.json',
                magic_reward_list: '/magicbox/getAppExchangeProducts.json',
                magic_reward_num: '/magicbox/getAppExchangeProductNum.json',
                magic_app_online: '/magicbox/onlineApp.json',
                magic_app_offline: '/magicbox/offlineApp.json',
                magic_app_del: '/magicbox/deleteApp.json',
                magic_reward_del: '/magicbox/deleteExchangeProduct.json',
                magic_reward_check: '/magicbox/submitExchangeProductForApply.json',
                magic_reward_info: '/magicbox/getExchangeProduct.json',
                magic_reward_save: '/magicbox/saveExchangeProduct.json',
                magic_reward_update: '/magicbox/updateExchangeProduct.json',
                act_total_info: '/event/eventInfo.json',
                act_wangwang_info: '/event/lastEventWangwang.json',
                act_type_info: '/event/baseInfoEnums.json',
                act_edit_info: '/event/templatetagsEnums.json',
                act_add_step1: '/event/baseInfo.json',
                act_share_rate: '/event/getCommissionShareRate.json',
                act_tmpl_info: '/event/templateEnums.json',
                act_add_step2: '/event/templateInfo.json',
                act_add_step3: '/event/ruleInfo.json',
                act_cat_info: '/event/saveRuleEnums.json',
                act_open: '/event/createfinish.json',
                software_promo_list: '/pgy/myPub.json',
                check_authority: '/common/site/getAuthorities.json',
                apply_authority: '/common/site/applyAuthority.json',
                del_authority: '/common/site/deleteAuthority.json',
                check_appkey: '/common/site/verifyAppkey.json',
                bind_appkey: '/common/site/bindAppkey.json'
            },
            report: {
                report_media: '/report/mediaRpt.json',
                report_media_table: '/report/mediaRptByPaging.json',
                report_zone_act: '/report/linkEventRpt.json',
                report_zone_act_table: '/report/linkEventRptByPaging.json',
                report_zone_self: '/report/selfRpt.json',
                report_zone_self_table: '/report/selfRptByPaging.json',
                report_zone_widget: '/report/zujianRpt.json',
                report_zone_widget_table: '/report/zujianRptByPaging.json',
                report_zone_channel: '/report/channelRpt.json',
                report_zone_channel_table: '/report/channelRptByPaging.json',
                report_zone_weibo: '/report/minishopRpt.json',
                report_zone_weibo_table: '/report/minishopRptByPaging.json',
                report_zone_extra: '/report/thirdRpt.json',
                report_zone_extra_table: '/report/thirdRptByPaging.json',
                report_zone_api: '/report/apiRpt.json',
                report_zone_api_table: '/report/apiRptByPaging.json',
                report_zone_cpa: '/report/pubCpaRptByPaging.json',
                report_zone_software: '/report//pgyRpt.json',
                report_zone_software_table: '/report/pgyRptByPaging.json',
                report_taoke: '/report/getTbkPaymentDetails.json',
                report_ruyitou: '/report/getElitePaymentDetails.json',
                report_extra: '/report/getTbkThirdPaymentDetails.json',
                report_rights: '/report/getNewTbkRefundPaymentDetails.json',
                report_hide_download: '/report/downGrade.json'
            },
            common: {
                get_menu_auths: '/common/auths.json',
                get_tms_content: '/common/getTmsContent.json',
                get_adzone_code: '/common/code/getAdzoneCode.json',
                get_auction_code: '/common/code/getAuctionCode.json',
                get_shop_code: '/common/code/getShopCode.json',
                get_shop_other_code: '/common/code/getShopUrlCode.json',
                shortLink_confirmed: '/common/code/isConfirmedShortLinkEffectiveCycle.json',
                shortLink_confirm: '/common/code/confirmShortLinkEffectiveCycle.json',
                links_trans: '/urltrans/urltrans.json',
                links_trans_act: '/urltrans/urltransForOfficial.json',
                links_trans_cpab2c: '/urltrans/cpaUrltransForB2c.json',
                links_trans_pid: '/common/code/generalTmsOriginedUrl.json',
                demo_insertViewedPage: '/common/insertPageViewRecord.json',
                demo_queryViewedPage: '/common/hasViewedPage.json',
                verify_code: '/verifyCheckCode.json',
                violation_info: '/common/violationInfo.json'
            }
        }
    });
}, {
    requires: [
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
KISSY.add('app/models/basemodel', function (S, MxModel, IO, Util) {
    var MxConfig = Magix.cfg;
    var SyncCounter = 0;
    var ProcessController = {
        CodeMap: {
            601: {
                method: 'processLogin',
                validTime: 2 * 60 * 1000
            },
            2: {
                method: 'processVCode',
                validTime: 1 * 60 * 1000
            }
        },
        isIntervene: function () {
            return this.$ii;
        },
        processLogin: function (validTime, ignoreValidTime) {
            var self = this;
            var lastTime = self.$lastLTime;
            if (!ignoreValidTime && (!lastTime || S.now() - lastTime < validTime)) {
                self.processCode();
            } else {
                self.$lastLTime = S.now();
                self.processCode();
            }
        },
        processVCode: function (validTime, ignoreValidTime) {
            var self = this;
            var lastTime = self.$lastVCTime;
            if (!ignoreValidTime && (!lastTime || S.now() - lastTime < validTime)) {
                self.processCode();
            } else {
                self.$lastVCTime = S.now();
                self.processCode();
            }
        },
        getJSONPToken: function (callback) {
        },
        processCode: function () {
            var self = this;
            var code = self.$code;
            if (code) {
                var c = code.list.shift();
                if (c) {
                    delete code.hash[c.code];
                    var m = self.CodeMap[c.code];
                    if (m) {
                        self[m.method](m.validTime, c.iVT);
                    } else {
                        throw new Error('unrecognize error code:' + c);
                    }
                } else {
                    self.runWaitModels();
                }
            } else {
                self.runWaitModels();
            }
        },
        start: function (code, ignoreValidTime) {
            var self = this;
            if (!self.$code) {
                self.$code = {
                    list: [],
                    hash: {}
                };
                if (!Magix.has(self.$code.hash, code)) {
                    self.$code.list.push({
                        code: code,
                        iVT: ignoreValidTime
                    });
                    self.$code.hash[code] = true;
                }
            }
            if (!self.$ii) {
                self.$ii = true;
                self.processCode();
            }
        },
        addWaitModel: function (model, options) {
            var self = this;
            if (!self.$wmList) {
                self.$wmList = [];
            }
            self.$wmList.push({
                model: model,
                options: options
            });
        },
        runWaitModels: function () {
            var self = this;
            var list = self.$wmList;
            if (self.$ii) {
                delete self.$ii;
                if (list) {
                    for (var i = 0, one; i < list.length; i++) {
                        one = list[i];
                        one.model.sync(one.options);
                    }
                }
                self.$wmList = [];
            }
        }
    };
    return MxModel.extend({
        parse: function (resp) {
            return resp;
        },
        sync: function (options) {
            var model = this;
            var UserInfo = window.UserInfo;
            SyncCounter++;
            if (SyncCounter == 1) {
            }
            if (ProcessController.isIntervene()) {
                ProcessController.addWaitModel(model, options);
                return;
            }
            var data;
            var type = model.get('type') || 'GET';
            var url = model.url();
            var jsonp = model.get('jsonp');
            var async = model.get('async');
            var dataType = model.get('dataType') || 'json';
            var noVerify = model.get('noVerify');
            var oldSucc = options.success;
            var oldError = options.error;
            if (type.toUpperCase() === 'GET') {
                model.setUrlParams('t', S.now());
                model.setUrlParams('pvid', Magix.local('pvid'));
                model.setUrlParams('_tb_token_', UserInfo._tb_token_);
                model.setUrlParams('_input_charset', 'utf-8');
                data = model.getUrlParams();
            } else {
                model.setPostParams('t', S.now());
                model.setPostParams('pvid', Magix.local('pvid'));
                model.setPostParams('_tb_token_', UserInfo._tb_token_);
                data = model.getPostParams();
            }
            var params = {
                url: url,
                type: type,
                data: data,
                dataType: dataType,
                async: async === false ? false : true,
                success: function (resp, msg, xhr) {
                    if (resp.data && resp.data.status == 1111) {
                        return Util.showGlobalTip('\u4E00\u77AC\u95F4\uFF0C\u98CE\u8D77\u4EBA\u6D8C\uFF0C\u4EA4\u901A\u62E5\u5835\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01');
                    }
                    if (dataType == 'json') {
                        if (resp.data && resp.data.frequenctCheckFail) {
                            Util.showVCode(resp.data);
                        }
                        if (noVerify) {
                            if (resp.info.message == 'nologin') {
                                window.location.href = UserInfo.pubHost;
                                return;
                            }
                            oldSucc.call(this, resp);
                            return;
                        }
                        if (!resp.info.ok) {
                            if (resp.info.message == 'nologin') {
                                window.location.href = UserInfo.pubHost;
                                return;
                            }
                            Util.showGlobalTip(resp.info.message);
                            oldSucc.call(this, { info: resp.info });
                        } else {
                            if (resp.info.pvid) {
                                Magix.local('pvid', resp.info.pvid);
                            }
                            oldSucc.call(this, { data: resp.data });
                        }
                    } else {
                        try {
                            oldSucc.apply(this, arguments);
                        } catch (e) {
                            Util.showGlobalTip(e.message);
                            oldError.call(this, e.message, e);
                        }
                    }
                },
                error: function (x, msg, xhr) {
                    oldError.call(this, msg);
                },
                complete: function () {
                    SyncCounter--;
                    if (SyncCounter === 0) {
                    }
                }
            };
            if (jsonp) {
                params.jsonp = jsonp === true ? '_c' : jsonp;
            }
            return KISSY.io(params);
        }
    });
}, {
    requires: [
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