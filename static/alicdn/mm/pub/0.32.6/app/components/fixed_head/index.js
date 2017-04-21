/*
 * 筛选标签组
 */
KISSY.add("components/fixed_head/index", function(S, Brick) {
    var $ = S.all;

    var FixedHead = Brick.extend({
        bindUI : function(){
            var el = this.get('el');

            this._fixHead(el);
            var self = this;
            this.detect = function(){
               self._fixHead(el);
            };
            $(window).on('scroll', this.detect);
        },

        destroy: function(){
            $(window).detach('scroll', this.detect);
        },

        _fixHead: function(wrapper){
            var head = wrapper.one('.table-head-fix');
            if(!head){return;}
            var table = wrapper.one('.table[bx-name]');
            if(!table){return;}
            var sTop = $(window).scrollTop();
            var tableOffset =  table.offset();
            var w = wrapper.width();
            var h = wrapper.height();
            if(sTop >= tableOffset.top){
                wrapper.addClass('table-container-fix');

                //表头显示在表格区域顶部
                if( sTop >=  ( tableOffset.top + h - 150 ) ){
                    head.css({
                        position:'absolute',
                        width:w,
                        left:0,
                        top: h - 150
                    });
                }else{
                    wrapper.css({
                        paddingTop: head.height()
                    });
                    head.css({
                        position:'fixed',
                        width:w,
                        left:tableOffset.left,
                        top:0
                    });
                }

            }else{
                wrapper.removeClass('table-container-fix');
                wrapper.css({
                    paddingTop: 0
                });
                head.css({
                    position:'static',
                    width: 'auto',
                    left:'0',
                    top:0
                });
            }
        }
    },{
        ATTRS : {

        },
        EVENTS : {

        }
    });

    return FixedHead;
}, {
    requires: ["brix/core/brick", 'magix/router']
});