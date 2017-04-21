Magix.tmpl("app/views/myunion/overview","<vframe id=J_vf_os mx-view=\"app/views/myunion/overview_settlement\"> <div class=wrap-loading></div> </vframe> <vframe id=J_vf_ol mx-view=\"app/views/myunion/overview_list\"> <div class=wrap-loading></div> </vframe>");
KISSY.add('app/views/myunion/overview', function (S, Node, DOM, JSON, View, MM, Util, Offline) {
    var $ = Node.all;
    var storageKey = 'imessage' + window.UserInfo.memberid;
    return View.extend({
        init: function (e) {
            this.manage('importData', e);
            this.manage('offline', new Offline());
        },
        render: function () {
            var me = this;
            me.setViewPagelet({}, function () {
                me._message();
            });
        },
        _message: function () {
            var me = this;
            me.manage(MM.fetchAll([
                {
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/imessage.html',
                        encode: 'utf-8'
                    }
                },
                { name: 'violation_info' }
            ], function (MesModel, ViolationModel) {
                var message = MesModel.get('data').jsonString;
                message = JSON.parse(message);
                var messageId = message.id;
                if (messageId != me._getOffline()) {
                    me._showMessage(message);
                    me._setOffline(messageId);
                }
                var ViolationData = ViolationModel.get('data');
                var tipCnt = [];
                if (ViolationData.haveViolation) {
                    tipCnt.push('\u4EB2\uFF0C\u60A8\u7684\u8D26\u6237\u6D89\u5ACC\u8FDD\u89C4\uFF0C\u5982\u9700\u67E5\u770B\u548C\u7533\u8BC9\uFF0C<a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-orange">\u8BF7\u70B9\u6B64\u67E5\u770B</a>');
                }
                if (ViolationData.haveViolationNeedMaterial) {
                    tipCnt.push('\u60A8\u5DF2\u63D0\u4EA4\u7684\u7533\u8BC9\u6750\u6599\u4E0D\u5168\uFF0C\u8BF7\u53CA\u65F6\u8865\u5145\u63D0\u4EA4\u7533\u8BC9\u6750\u6599\uFF0C <a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-orange mr10">\u70B9\u51FB\u53BB\u8865\u5145</a>');
                }
                if (ViolationData.isHighRiskUser) {
                    tipCnt.push('\u7CFB\u7EDF\u68C0\u6D4B\u5230\u60A8\u7684\u8D26\u53F7\u5B58\u5728\u6F5C\u5728\u98CE\u9669\u9700\u8981\u60A8\u8FDB\u884C\u4E8C\u6B21\u8BA4\u8BC1\uFF0C\u8BF7\u60A8\u52A1\u5FC5\u5728\u89C4\u5B9A\u65F6\u95F4<a href="http://media.alimama.com/verify/risk.htm" target="_blank" class="color-orange">\u70B9\u6B64\u8FDB\u5165</a>\u8BA4\u8BC1\u9875\u9762\u5B8C\u6210\u8BA4\u8BC1\u3002\u903E\u671F\u672A\u8BA4\u8BC1\u6216\u8BA4\u8BC1\u5931\u8D25\u8D26\u6237\u5C06\u7EC8\u6B62\u5408\u4F5C\uFF0C<a href="http://rule.alimama.com/#!/announce/business/detail?id=8307063&knowledgeid=6528139" target="_blank" class="color-orange">\u8BE6\u60C5\u70B9\u51FB</a>\u3002');
                }
                if (tipCnt.length) {
                    Util.showGlobalTip(tipCnt.join('<br/>'), '', '', '', true);
                }
            }));
        },
        _showMessage: function (message) {
            var dialogWidth = 600;
            var docWidth = DOM.docWidth();
            var dialogLeft = (docWidth - dialogWidth) / 2;
            var dialogConfig = {
                start: {
                    left: dialogLeft,
                    top: -200,
                    opacity: 0
                },
                end: {
                    left: dialogLeft,
                    top: 0,
                    opacity: 1
                },
                width: dialogWidth
            };
            var viewName = 'app/views/myunion/imessage';
            var viewOptions = message;
            Util.showDialog(dialogConfig, viewName, viewOptions);
        },
        _getOffline: function () {
            var me = this;
            var offline = me.getManaged('offline');
            return offline.getItem(storageKey) || '';
        },
        _setOffline: function (value) {
            var me = this;
            var offline = me.getManaged('offline');
            offline.setItem(storageKey, value);
        }
    });
}, {
    requires: [
        'node',
        'dom',
        'json',
        'mxext/view',
        'app/models/modelmanager',
        'app/util/util',
        'gallery/offline/1.1/index',
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
        'app/util/spmlog/pathmap'
    ]
});