KISSY.add("app/util/tooltip/tooltip", function(S, Vframe, VOM, BXDialog) {
    var Tooltip = {
        entity: null
    };

    S.mix(Tooltip, {
        showToolTip : function(tooltipConfig, viewName, viewOptions) {
            // 配置与overlay相同
            var TOOLTIP_ID = 'vf-tooltip';
            var defaultConfig = {
                elCls: 'dialog pub-tooltip',
                tmpl: '<vframe id="' + TOOLTIP_ID + '"></vframe>',
                width: 300,
                zIndex: 9998,
                duration: 0.25,
                easing: 'easeOut',
                closable: false
            };

            var config = S.merge(defaultConfig, tooltipConfig);

            var vfTooltip;

            function destroyTooltip() {
                VOM.remove(TOOLTIP_ID);
                if (vfTooltip && vfTooltip.view) {
                    vfTooltip.unmountView();
                    vfTooltip = null;
                }
                Tooltip.entity.detach();
                Tooltip.entity.destroy();
                Tooltip.entity = null;
            }

            if (Tooltip.entity) {
                destroyTooltip();
            }

            // 创建brix tooltip
            Tooltip.entity = new BXDialog(config);

            // tooltip显示时如果是加载view,则mountView
            if (viewName) {
                Tooltip.entity.on('afterRenderUI', function() {
                    vfTooltip = new Vframe(TOOLTIP_ID);
                    VOM.add(vfTooltip);
                    
                    vfTooltip.mountView(viewName, viewOptions);

                    vfTooltip.on('created', function(a, b, c) {
                        Tooltip.entity.show();
                    });
                });
            } else {
                // 有可能是普通的tooltip，并没有viewname
                // 但是也要show出来
                S.later(function () {
                    Tooltip.entity.show();
                }, 0);
            }

            Tooltip.entity.render();
            Tooltip.entity.on('hide', function(e) {
                destroyTooltip();
            });
        },
        // 关闭tooltip
        hideToolTip : function(callback) {
            if (Tooltip.entity) {
                Tooltip.entity.on('hide', function() {
                    if (callback) {
                        callback();
                    }
                });
                Tooltip.entity.hide();
            }
        }
    });

    return Tooltip;

}, {
    requires: ['magix/vframe', 'magix/vom', 'brix/gallery/dialog/index']
});