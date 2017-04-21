Magix.tmpl("app/views/myunion/overview_list","<div class=table-container> <ul class=\"table-title table-title-extra clearfix\"> <li class=selected> <h2> <span>账户近期概况</span> </h2> </li> </ul> <div class=\"toolbar clearfix\"> <div bx-name=\"dropdown\" style=\"width:110px;\" class=dropdown id=J_datatype hidefocus=true> <span class=dropdown-hd> <span class=dropdown-text value=0>昨日</span> <i class=\"iconfont icon-arrow-down\">&#405;</i> </span> <ul class=dropdown-list> <li class=dropdown-item><span value=0>昨日</span><i class=\"iconfont icon-ok\">&#126;</i></li> <li class=dropdown-item><span value=3>本周</span><i class=\"iconfont icon-ok\">&#126;</i></li> <li class=dropdown-item><span value=4>上周</span><i class=\"iconfont icon-ok\">&#126;</i></li> <li class=dropdown-item><span value=1>本月</span><i class=\"iconfont icon-ok\">&#126;</i></li> <li class=dropdown-item><span value=2>上月</span><i class=\"iconfont icon-ok\">&#126;</i></li> </ul> </div> </div> <table class=table bx-name=\"tables\" bx-tmpl=\"list\" bx-datakey=\"list\"> <thead> <tr {{^list}}class=no-data{{/list}}> <th class=left>产品名称</th> <th class=left width=100> 点击数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'您选择时间段内的点击数，包含到达商品、店铺页面的点击数等。'}\">&#360;</i> </th> <th class=left width=120> 付款笔数 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,content:'由推广带来的您选择时间段内的付款订单笔数。'}\">&#360;</i> </th> <th class=left width=120> 效果预估 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'由推广带来的您选择时间段内付款产生的效果预估数据，非最终实际收入，其作用是便于您了解效果发展的趋势，由于是估算数据，与实际的结算时间有一段差异，是阿里妈妈过滤前的数据，最终收入金额以月结后您账户内实际收到的为准。'}\">&#360;</i> </th> <th class=left width=100> 预估收入 <i class=\"iconfont cursor-pointer fontsize-13 ml2\" bx-name=\"tooltip\" bx-config=\"{closable:false,align:{node:false,points:['tr','br']},mouseDelay:0.2,width:300,content:'此数据是以您选择时间段内所有买家确认收货的订单计算出的预估收入，非最终实际收入，由于是估算数据，是阿里妈妈过滤前的数据， 最终收入金额以月结后您账户内实际收到的为准。'}\">&#360;</i> </th> </tr> </thead> <tbody> {{#list}} {{^if(productType==1)}} <tr> <td class=left> {{#if(productType==0)}} {{productName}} {{/if(productType==0)}} {{^if(productType==0)}} <a href=\"{{reportUrl}}\">{{productName}}</a> {{/if(productType==0)}} </td> <td class=left>{{mixClick}}</td> <td class=left>{{alipayNum}}</td> <td class=left>￥{{list_alipayRec}}</td> <td class=left>￥{{list_rec}}</td> </tr> {{/if(productType==1)}} {{/list}} {{^list}} <tr class=none> <td colspan=5>暂无数据</td> </tr> {{/list}} </tbody> </table> </div>");
KISSY.add('app/views/myunion/overview_list', function (S, View, MM, Util) {
    return View.extend({
        render: function () {
            var me = this;
            var dataType = me.getManaged('dataType');
            me.manage(MM.fetchAll([{
                    name: 'overview_list',
                    urlParams: { dataType: dataType || 0 }
                }], function (MesModel) {
                var totalData = MesModel.get('data');
                var haveViolation = totalData.haveViolation;
                var haveViolationNeedMaterial = totalData.haveViolationNeedMaterial;
                var tipCnt;
                if (haveViolation) {
                    tipCnt = '\u4EB2\uFF0C\u60A8\u7684\u8D26\u6237\u6D89\u5ACC\u8FDD\u89C4\uFF0C\u5982\u9700\u67E5\u770B\u548C\u7533\u8BC9\uFF0C<a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-blue">\u8BF7\u70B9\u6B64\u67E5\u770B</a>';
                    if (haveViolationNeedMaterial) {
                        tipCnt += '<br/>\u60A8\u5DF2\u63D0\u4EA4\u7684\u7533\u8BC9\u6750\u6599\u4E0D\u5168\uFF0C\u8BF7\u53CA\u65F6\u8865\u5145\u63D0\u4EA4\u7533\u8BC9\u6750\u6599\uFF0C <a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-blue mr10">\u70B9\u51FB\u53BB\u8865\u5145</a>';
                    }
                } else if (haveViolationNeedMaterial) {
                    tipCnt = '\u60A8\u5DF2\u63D0\u4EA4\u7684\u7533\u8BC9\u6750\u6599\u4E0D\u5168\uFF0C\u8BF7\u53CA\u65F6\u8865\u5145\u63D0\u4EA4\u7533\u8BC9\u6750\u6599\uFF0C <a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-blue">\u70B9\u51FB\u53BB\u8865\u5145</a>';
                }
                if (tipCnt) {
                    Util.showGlobalTip(tipCnt, '', '', '', true);
                }
                me.setViewPagelet({ list: totalData.resultList }, function () {
                    me.components();
                });
            }));
        },
        components: function () {
            var me = this;
            var pagelet = me.getManaged('pagelet');
            var dataType = pagelet.getBrick('J_datatype');
            dataType.on('selected', function (ev) {
                me.manage('dataType', ev.value);
                me.render();
            });
        },
        renderer: {
            list: {
                rec: function (self) {
                    return Util.formatNumber(this.rec).join('.');
                },
                alipayRec: function (self) {
                    return Util.formatNumber(this.alipayRec).join('.');
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
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
        'magix/vom',
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'node',
        'app/util/spmlog/pathmap'
    ]
});