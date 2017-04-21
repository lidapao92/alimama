/**
 * 验证码浮层
 */
KISSY.add("app/util/vcode/vcode", function(S, Vframe, VOM) {
    var Code = {};
    var flag = true;

    S.mix(Code, {
        showVCode: function(cfg) {
            var dialogConfig = {
                align: {
                    points: ['tc', 'cc'],
                    offset: [0, 150]
                },
                width: 300,
                closable: false
            };
            var viewName = 'app/views/vcode';
            var viewOptions = {
                encryptSid: cfg.encryptSid,
                imgUrl: cfg.imgUrl
            };

            // 只有第一次弹出浮层
            // 或者验证成功了才会在下一次弹出浮层
            if (flag) {
                this.showDialog(dialogConfig, viewName, viewOptions);
                flag = false;
            }
        },
        hideVCode: function() {
            this.hideDialog();
            flag = true;
        }
    });

    return Code;

}, {
    requires: ['magix/vframe', 'magix/vom']
});