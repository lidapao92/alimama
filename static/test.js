Magix.tmpl("app/views/myunion/overview", '<vframe id=J_vf_os mx-view="app/views/myunion/overview_settlement"> <div class=wrap-loading></div> </vframe> <vframe id=J_vf_ol mx-view="app/views/myunion/overview_list"> <div class=wrap-loading></div> </vframe>'), KISSY.add("app/views/myunion/overview", function (a, e, i, t, o, l, n, p) {
    var r = (e.all, "imessage" + window.UserInfo.memberid);
    return o.extend({
        init: function (a) {
            this.manage("importData", a), this.manage("offline", new p)
        }, render: function () {
            var a = this;
            a.setViewPagelet({}, function () {
                a._message()
            })
        }, _message: function () {
            var a = this;
            a.manage(l.fetchAll([{
                name: "get_tms_content",
                urlParams: {path: "/alp/union/pub/imessage.html", encode: "utf-8"}
            }, {name: "violation_info"}], function (e, i) {
                var o = e.get("data").jsonString;
                o = t.parse(o);
                var l = o.id;
                l != a._getOffline() && (a._showMessage(o), a._setOffline(l));
                var p = i.get("data"), r = [];
                p.haveViolation && r.push('\u4eb2\uff0c\u60a8\u7684\u8d26\u6237\u6d89\u5acc\u8fdd\u89c4\uff0c\u5982\u9700\u67e5\u770b\u548c\u7533\u8bc9\uff0c<a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-orange">\u8bf7\u70b9\u6b64\u67e5\u770b</a>'), p.haveViolationNeedMaterial && r.push('\u60a8\u5df2\u63d0\u4ea4\u7684\u7533\u8bc9\u6750\u6599\u4e0d\u5168\uff0c\u8bf7\u53ca\u65f6\u8865\u5145\u63d0\u4ea4\u7533\u8bc9\u6750\u6599\uff0c <a href="http://media.alimama.com/violation/violation_list.htm" target="_blank" class="color-orange mr10">\u70b9\u51fb\u53bb\u8865\u5145</a>'), p.isHighRiskUser && r.push('\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u7684\u8d26\u53f7\u5b58\u5728\u6f5c\u5728\u98ce\u9669\u9700\u8981\u60a8\u8fdb\u884c\u4e8c\u6b21\u8ba4\u8bc1\uff0c\u8bf7\u60a8\u52a1\u5fc5\u5728\u89c4\u5b9a\u65f6\u95f4<a href="http://media.alimama.com/verify/risk.htm" target="_blank" class="color-orange">\u70b9\u6b64\u8fdb\u5165</a>\u8ba4\u8bc1\u9875\u9762\u5b8c\u6210\u8ba4\u8bc1\u3002\u903e\u671f\u672a\u8ba4\u8bc1\u6216\u8ba4\u8bc1\u5931\u8d25\u8d26\u6237\u5c06\u7ec8\u6b62\u5408\u4f5c\uff0c<a href="http://rule.alimama.com/#!/announce/business/detail?id=8307063&knowledgeid=6528139" target="_blank" class="color-orange">\u8be6\u60c5\u70b9\u51fb</a>\u3002'), r.length && n.showGlobalTip(r.join("<br/>"), "", "", "", !0)
            }))
        }, _showMessage: function (a) {
            var e = 600, t = i.docWidth(), o = (t - e) / 2, l = {
                start: {left: o, top: -200, opacity: 0},
                end: {left: o, top: 0, opacity: 1},
                width: e
            }, p = "app/views/myunion/imessage", r = a;
            n.showDialog(l, p, r)
        }, _getOffline: function () {
            var a = this, e = a.getManaged("offline");
            return e.getItem(r) || ""
        }, _setOffline: function (a) {
            var e = this, i = e.getManaged("offline");
            i.setItem(r, a)
        }
    })
}, {requires: ["node", "dom", "json", "mxext/view", "app/models/modelmanager", "app/util/util", "gallery/offline/1.1/index", "mxext/mmanager", "app/models/model", "app/models/basemodel", "mxext/model", "ajax", "app/util/datepicker/datepicker", "app/util/dialog/dialog", "app/util/format/format", "app/util/globaltip/globaltip", "app/util/robot/sourceid", "app/util/spmlog/spmlog", "app/util/mathextend/mathextend", "app/util/tooltip/tooltip", "app/util/widgetds/widgetds", "app/util/rank/rank", "app/util/reporttip/reporttip", "app/util/vcode/vcode", "app/util/pagination/index", "app/util/fields/fields", "app/util/mouseevent/index", "magix/vframe", "magix/vom", "magix/router", "brix/gallery/datepicker/index", "brix/gallery/calendar/index", "brix/gallery/dialog/index", "app/util/spmlog/pathmap"]});