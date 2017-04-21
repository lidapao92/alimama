KISSY.add("app/util/dialog/dialog", function(S, Vframe, VOM, BXDialog) {
    var $ = S.all;
    var bxEntity;
    var vfDialog;
    var Dialog = {};
    var hideDialogHandle = function(e) {
        if (e.keyCode === 27) {
            Dialog.hideDialog();
        }
    };

    S.mix(Dialog, {
        /**
         * 全项目唯一dialog管理
         * 不传content ， 传viewName viewOptions则dialog加载一个view
         * 否则传content ，dialog加载content的字符串内容
         * return vom对象，父VIEW可以通过vom.view取得子view的引用，调用子VIEW方法等
         */
        showDialog: function(dialogConfig, viewName, viewOptions) {
            // 配置与overlay相同
            var DIALOG_ID = 'vf-dialog';
            var defaultConfig = {
                mask: true,
                zIndex: 9999,
                duration: 0.25,
                easing: 'easeOut',
                width: 500,
                tmpl: '<vframe id="' + DIALOG_ID + '"></vframe>',
                closable: true
            };

            var config = S.merge(defaultConfig, dialogConfig);

            config.start = config.start || {};
            config.end = config.end || {};
            // 自动处理左右滑进来的dialog贴边。
            // 配置：direction: {
            //      node: null, //传入参照贴边的节点，不传则为body
            //      value: 'left' //指定右或左滑进贴边，left, right
            // }
            // 这里只处理了config.start/end.left值，其他值依旧可传，如top, opacity等
            // 暂时只支持左右滑进
            if (config.direction) {
                var dirNode = S.all(config.direction.node);
                dirNode = dirNode.length > 0 ? dirNode : S.all('body');

                var dirNodeOffset = dirNode.offset();
                var dirNodeWidth = dirNode.width();
                var docWidth = S.DOM.docWidth();
                var directionValue = config.direction.value || 'left'; //默认左进
                switch (directionValue) {
                    case 'left':
                        config.start.left = -config.width;
                        config.end.left = dirNodeOffset.left;
                        break;

                    case 'right':
                        config.start.left = docWidth;
                        config.end.left = dirNodeWidth + dirNodeOffset.left - config.width;
                        break;
                }

                // 如果没有传入top，则自动计算为可视区域剧中，
                // 窗口高度大于可视区域高度则top从可视区域顶部开始
                if (config.start.top === undefined && config.end.top === undefined) {
                    // var vHeight = S.DOM.viewportHeight();
                    var scrollTop = S.one(window).scrollTop();
                    config.start.top = config.end.top = scrollTop + 5;
                }
            }

            function destroyDialog() {
                VOM.remove(DIALOG_ID);
                if (vfDialog && vfDialog.view) {
                    vfDialog.unmountView();
                    vfDialog = null;
                }
                bxEntity.detach();
                bxEntity.destroy();
                bxEntity = null;
            }

            if (bxEntity) {
                destroyDialog();
            }

            // 创建brix dialog
            bxEntity = new BXDialog(config);

            // dialog显示时如果是加载view,则mountView
            bxEntity.on('afterRenderUI', function() {
                vfDialog = new Vframe(DIALOG_ID);
                VOM.add(vfDialog);
                if (!vfDialog || !viewName) return;

                vfDialog.mountView(viewName, viewOptions);

                // dialog里面的view创建完之后重新定位dialog
                vfDialog.on('created', function(a, b, c) {
                    var dialogHeight = bxEntity.get('el').outerHeight();
                    var scrollTop = $(window).scrollTop();
                    var window_viewportHeight = $(window).innerHeight();
                    var newTop;

                    if (config.direction && (config.direction.value == 'left' || config.direction.value == 'right')) {
                        if (config.end.top + dialogHeight > scrollTop + window_viewportHeight) {
                            newTop = scrollTop + window_viewportHeight - dialogHeight;
                            setTimeout(function() {
                                bxEntity.get('el').animate({
                                    top: newTop
                                }, 0.25, 'easeNone');
                            }, 300);
                        }
                    }

                    // 弹窗添加spm c段
                    bxEntity.get('el').attr('data-spm', config.spmc);
                });
            });

            bxEntity.render();
            bxEntity.show();

            bxEntity.on('hide', function(e) {
                destroyDialog();
            });

            //加入esc键关闭弹窗
            if (config.closable) {
                S.all(document).on('keydown', hideDialogHandle);
            }
            return bxEntity;
        },
        // 关闭dialog
        hideDialog: function(callback) {
            if (bxEntity) {
                bxEntity.on('hide', function() {
                    if (callback) {
                        callback();
                    }
                });
                bxEntity.hide();

                S.all(document).detach('keydown', hideDialogHandle);
            }
        },
        //获取默认配置
        getDefaultDialogConfig: function(config) {

            var def = {
                start: {
                    top: config.top,
                    opacity: 0
                },
                end: {
                    top: config.top,
                    opacity: 1
                },
                direction: {
                    node: $('.main'),
                    value: config.direction || 'right'
                },
                width: config.width || 600,
                spmc: config.spmc || '1998457615'
            };

            return def;
        }

    });

    return Dialog;

}, {
    requires: ['magix/vframe', 'magix/vom', 'brix/gallery/dialog/index']
});