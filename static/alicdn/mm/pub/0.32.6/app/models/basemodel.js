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