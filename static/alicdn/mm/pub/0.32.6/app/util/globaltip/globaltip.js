KISSY.add("app/util/globaltip/globaltip", function(S, Vframe, VOM) {
    var GlobalTip = {};
    var $ = S.Node.all;

    S.mix(GlobalTip, {
        /**
         * 全局横幅提示
         * @param  {string} msg 传入的提示信息string，可为html结构
         * @param  {boolean} closable 是否可关闭，默认可关闭，当传入false，无关闭按钮，
         * @param  {boolean} hold 是否一直显示提示, 默认5秒后关闭, 当传入true时一直显示
         */
        showGlobalTip: function(msg, closable, delay, fn, hold) {
            //延时600ms 防止切换页面tips冲突
            delay = S.type(delay) === 'number' ? delay : 300;

            var tip = $('<div class="ux-tip uxGlobalTip" style="display:none;"> ' + msg + (closable === false ? '' : '  <i class="iconfont closeUxGlobalTip" >&#223;</i>') + '  </div>');
            $('body').prepend(tip);
            function showTip() {
                if(GlobalTip.globalTip) {
                    GlobalTip.globalTip.remove();
                    clearTimeout(GlobalTip.globalTip.data('timeout'));
                }

                if(!hold) {
                   tip.data('timeout', setTimeout(function() {
                        tip.slideUp(0.25, function() {
                            tip.remove();
                        });
                    }, 5 * 1000));
                }
                
                GlobalTip.globalTip = tip;

                
                tip.slideDown(0.25);

                $('.closeUxGlobalTip').on('click', function() {
                    var _this = $(this).parent();
                    _this.slideUp(0.25, function() {
                        _this.remove();
                    });

                    //关闭时执行回调
                    fn && fn();
                });
            }

            if(delay !== 0) {
                setTimeout(showTip, delay);
            } else {
                showTip();
            }
        },
        /**
         * 全局横幅提示隐藏
         */
        hideGlobalTip: function(){
            $('.uxGlobalTip').slideUp(0.25, function() {
                $('.uxGlobalTip').remove();
            });
        }
    });

    return GlobalTip;

}, {
    requires: ['magix/vframe', 'magix/vom']
});