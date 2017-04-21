Magix.tmpl("app/views/manage/campaign/campaign","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>推广计划管理</h2> </div> </div> <p class=mb20>温馨提示：平台将定期对30天前的定向计划进行清理，主要包含：审核拒绝、卖家清退、主动退出以及申请的定向计划已失效或已停止、已过期超过30天的无效申请记录。</p> <div class=table-container bx-name=\"fixed_head\" bx-path=\"components/fixed_head/\"> <div class=table-head-fix> <div class=\"toolbar clearfix\"> <a href=\"#!/promo/self/items\" data-spm-click=\"gostr=/tblm.88.1;locaid=dc26c8b42\" class=\"btn btn-size25\" mx-click=add data-spm-click=\"gostr=/tblm.88.1;locaid=dd1b7ab6c\" atp=\"{ptype:'campaign_manage',ctype:'campaign_manage_add'}\">新增自助推广</a> <div bx-name=\"dropdown\" class=dropdown hidefocus=true id=J_status_dropdown style=\"width:100px;\"> {{#statusList}} {{#selected}} <span class=dropdown-hd> <span class=dropdown-text value=\"{{keycode}}\">{{keyname}}</span> <i class=\"iconfont icon-arrow-down\">&#459</i> </span> {{/selected}} {{/statusList}} <ul class=dropdown-list> {{#statusList}} <li class=\"dropdown-item {{#selected}}dropdown-itemselected{{/selected}}\"><span value=\"{{keycode}}\">{{keyname}}</span><i class=\"iconfont icon-ok\">&#126</i></li> {{/statusList}} </ul> </div> <div class=table-settings> <div class=search-bar> <div class=search-input bx-tmpl=\"searchKey\" bx-datakey=\"nickname\"> <input type=text class=input placeholder=\"请输入卖家旺旺名称\" mx-keypress=search value=\"{{nickname}}\"> </div> <a class=\"btn btn-size25\" href=\"#\" hidefocus=true mx-click=search data-spm-click=\"gostr=/tblm.88.1;locaid=d38712d4b\" atp=\"{ptype:'campaign_manage',ctype:'campaign_manage_search'}\">搜索</a> </div> </div> </div> <table class=table bx-tmpl=\"tableFix\" bx-datakey=\"list\"> <thead> <tr> <th class=left width=90>加入日期</th> <th class=left >计划名称</th> <th class=left width=110>卖家旺旺</th> <th class=left width=70>状态</th> <th class=left width=90>审核意见</th> <th class=left width=90>审核时间</th> <th class=center width=100>操作</th> </tr> </thead> </table> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <tbody> {{#list}} <tr> <td class=left width=90>{{createTime}}</td> <td class=left> {{#invalideCampaign}} <span> {{campaignName}} <span class=color-red>[计划失效]</span> </span> {{/invalideCampaign}} {{^invalideCampaign}} <a href=\"#!/promo/self/campaign?campaignId={{campaignId}}&shopkeeperId={{shopKeeperId}}&userNumberId={{oriMemberId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d02b9e14e\" target=_blank> {{campaignName}} {{#if(campaignStatus==2)}} <span class=color-red>[计划已过期]</span> {{/if(campaignStatus==2)}} {{#if(campaignStatus==3)}} <span class=color-red>[计划已停止]</span> {{/if(campaignStatus==3)}} {{#if(campaignStatus==4)}} <span class=color-red>[计划已删除]</span> {{/if(campaignStatus==4)}} </a> {{/invalideCampaign}} </td> <td class=left width=110><a href=\"#!/promo/self/shop_detail?userNumberId={{oriMemberId}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d65d11e3c\">{{keeperExtName}}</a></td> <td class=left width=70>{{{list_status}}}</td> <td class=left width=90> {{#refuseComments}} <div class=table-more> <i class=iconfont>&#299;</i> <i class=icon-horn-tilt></i> <div class=table-info style=\"width: 120px;display: none;\"> {{refuseComments}} </div> </div> {{/refuseComments}} </td> <td class=left width=90>{{updateTime}}</td> <td class=center width=100> <p class=operation> {{^if(campaignStatus==1)}} <span class=color-gray>获取链接</span> <span class=divide>|</span> {{/if(campaignStatus==1)}} {{#if(campaignStatus==1)}} <a class=\"\" href=\"#\" mx-click=\"zone{userNumberId:{{oriMemberId}},codeType:self_shops}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d5214ee76\" atp=\"{ptype:'campaign_manage',ctype:'campaign_manage_code'}\">获取链接</a> <span class=divide>|</span> {{/if(campaignStatus==1)}} {{#list_notQuit}} <span class=color-gray>退出</span> {{/list_notQuit}} {{^list_notQuit}} <a class=\"\" href=\"#\" mx-click=\"exit{campaignId:{{id}}}\" data-spm-click=\"gostr=/tblm.88.1;locaid=d19fc18a9\" atp=\"{ptype:'campaign_manage',ctype:'campaign_manage_exit'}\">退出</a> {{/list_notQuit}} </p> </td> </tr> {{/list}} {{^list}} <tr class=none> <td colspan=7>暂无数据</td> </tr> {{/list}} </tbody> </table> <div class=tfoot> <div id=J_item_pagination bx-name=\"pagination\" class=pagination bx-config=\"{count:{{pageCount}},index:{{pageNo}},size:{{pageSize}},sizes:[40],simplify:true,statistics:true,sizeChange:true,jump:true,goTo:false}\"> </div> </div> </div>");
KISSY.add('app/views/manage/campaign/campaign', function (S, View, VOM, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            var me = this;
            me.on('prev', function (ev) {
                me.events.click.zone(ev.event);
            });
            me.on('save', function (ev) {
                me.events.click.zone(ev.event);
            });
        },
        locationChange: function (e) {
            this.render();
        },
        render: function () {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            params.toPage = params.toPage || 1;
            params.perPageSize = params.perPageSize || 40;
            me.manage(MM.fetchAll([{
                    name: 'campaign_list',
                    urlParams: params
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var list = totalData.pagelist;
                var statusList = totalData.statusList;
                statusList = me.wrapStatusList(statusList);
                me.setViewPagelet({
                    list: list,
                    statusList: statusList,
                    pageCount: totalData.paginator.items,
                    pageNo: params.toPage,
                    pageSize: params.perPageSize
                }, function () {
                    me.components();
                }, function () {
                    var pageParams = {
                        pageNo: params.toPage,
                        pageSize: params.perPageSize,
                        pageCount: totalData.paginator.items
                    };
                    me.resetPage(pageParams);
                });
            }));
        },
        wrapStatusList: function (statusList) {
            var me = this;
            var loc = me.location;
            var params = S.clone(loc.params);
            statusList.unshift({
                keycode: '',
                keyname: '\u5168\u90E8\u72B6\u6001'
            });
            if (!params.status) {
                statusList[0].selected = true;
            } else {
                S.each(statusList, function (v, k) {
                    if (v.keycode == params.status) {
                        v.selected = true;
                    }
                });
            }
            return statusList;
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var statusDropdown = pagelet.getBrick('J_status_dropdown');
            statusDropdown.on('selected', function (ev) {
                me.navigate('toPage=1&status=' + ev.value);
            });
            var pagination = pagelet.getBrick('J_item_pagination');
            if (pagination) {
                pagination.on('gotoPage', function (ev) {
                    me.navigate('toPage=' + ev.index);
                });
                pagination.on('sizeChange', function (ev) {
                    me.navigate('toPage=1&perPageSize=' + ev.size);
                });
            }
        },
        resetPage: function (params) {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var pagination = pagelet.getBrick('J_item_pagination');
            var pageparam = {};
            if (pagination) {
                if (pagination.get('index') != params.pageNo) {
                    pageparam['index'] = params.pageNo;
                }
                if (pagination.get('size') != params.pageSize) {
                    pageparam['size'] = params.pageSize;
                }
                if (pagination.get('count') != params.pageCount) {
                    pageparam['count'] = params.pageCount;
                }
                if (!S.isEmptyObject(pageparam)) {
                    pagination.setConfig(pageparam);
                }
            }
        },
        events: {
            click: {
                zone: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('tr').offset().top;
                    var codeType = e.params.codeType;
                    var userNumberId = e.params.userNumberId;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/manage/zone/zone_add';
                    var viewOptions = {
                        top: top,
                        triggerView: me,
                        event: e,
                        userNumberId: userNumberId,
                        codeType: codeType,
                        zoneType: 'self'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                exit: function (e) {
                    e.halt();
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('tr').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({
                        width: 300,
                        top: top
                    });
                    var viewName = 'app/views/util/confirm';
                    var viewOptions = {
                        confirmFn: function () {
                            me.manage(MM.fetchAll([{
                                    name: 'campaign_exit',
                                    postParams: { pubCampaignid: e.params.campaignId }
                                }], function (MesModel) {
                                me.render();
                                Util.hideDialog();
                            }), function (err) {
                                alert(err.message);
                                return;
                            });
                        },
                        cancelFn: function () {
                            Util.hideDialog();
                        },
                        confirmTitle: '\u9000\u51FA\u63A8\u5E7F\u8BA1\u5212',
                        confirmContent: '\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u6B64\u63A8\u5E7F\u8BA1\u5212\u5417\uFF1F'
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                search: function (e) {
                    e.halt();
                    var me = e.view;
                    var target = $('#' + e.currentId);
                    me.navigate('toPage=1&nickname=' + target.parent().one('input').val());
                }
            },
            keypress: {
                search: function (e) {
                    var me = e.view;
                    if (e.domEvent.keyCode == 13) {
                        var target = $('#' + e.currentId);
                        me.navigate('toPage=1&nickname=' + target.val());
                    }
                }
            }
        },
        renderer: {
            list: {
                status: function (self) {
                    switch (this.status) {
                    case 1:
                        return '<span class="color-orange">\u5F85\u5BA1\u6838</span>';
                        break;
                    case 2:
                        return '<span class="color-green">\u5BA1\u6838\u901A\u8FC7</span>';
                        break;
                    case 3:
                        return '<span class="color-red">\u5BA1\u6838\u62D2\u7EDD</span>';
                        break;
                    case 4:
                        return '<span class="color-gray">\u5356\u5BB6\u6E05\u9000</span>';
                        break;
                    case 5:
                        return '<span class="color-gray">\u4E3B\u52A8\u9000\u51FA</span>';
                        break;
                    }
                },
                notQuit: function (self) {
                    return this.invalideCampaign || this.status == 5;
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'node',
        'app/models/modelmanager',
        'app/util/util',
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
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
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});