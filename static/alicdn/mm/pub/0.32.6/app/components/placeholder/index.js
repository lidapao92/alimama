/**
 * kissy placeholder 的 brix封装
 * author : 陆议
 * date : 2013-01-14
 */
KISSY.add('components/placeholder/index', function(S, Brick) {

    var $=S.all,
        WRAP_TMPL='<div class="placeholder" style="position: relative;display:'+(S.UA.ie>7?'inline-block':'inline')+';zoom:1;"></div>',
        TIP_TMPL='<label style="display:none;position:absolute;">{tip}</label>',
        isSupport = "placeholder" in document.createElement("input");

    function Placeholder() {
        Placeholder.superclass.constructor.apply(this, arguments);
    }

    Placeholder.METHODS = {
        text : function(newTip){
            var self = this;
            var el = self.get('el');

            if(isSupport){
                el.attr('placeholder',newTip);
            }
            else{
                self.triggerLabel && self.triggerLabel.text(newTip);
            }
        }
    }

    S.extend(Placeholder, Brick, {
        initialize:function() {
            var self = this;
            var el = self.get('el');

            //支持html5的placeHolder属性
            if(isSupport) return;

            if(!el) {
                S.log('[placeholder] has no target to decorate');
                return;
            }
            var placeHolderTip = el.attr('placeholder');
            if(!placeHolderTip) return;

            self._decorate();

            el.on('focus', function(ev) {
                self.triggerLabel.hide();
            });

            el.on('blur', function(ev) {
                if(!el.val()) {
                    self.triggerLabel.show();
                }
            });
        },

        _decorate : function() {
            var self = this;
            var el = self.get('el');
            var placeHolderTip = el.attr('placeholder');

            //创建一个label
            var str = S.substitute(TIP_TMPL, {
                tip:placeHolderTip
            });
            var triggerLabel = self.triggerLabel = $(str);
            triggerLabel.css("width",el.css("width"));
            if(el.attr('id')) {
                triggerLabel.attr('for', el.attr('id'));
            } else {
                triggerLabel.on('click', function() {
                    el[0].focus();
                });
            }

            //create parent
            var elBox = $(WRAP_TMPL);
            elBox.appendTo(el.parent()).append(el);

            //insertbefore el
            triggerLabel.insertBefore(el);

            //judge value && init form reset
            S.later(function() {
                if(!el.val()) {
                    triggerLabel.show();
                }
            }, 100);
        }
    });

    S.augment(Placeholder,Placeholder.METHODS);

    return Placeholder;

},{requires:["brix/core/brick"]});
