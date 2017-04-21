/*
 * 筛选标签组
 */
KISSY.add("components/filter_labels/index", function(S, Brick, Router) {
    var $ = S.all;

    var FiltlerLabels = Brick.extend({
        bindUI : function(){
            var el = this.get('el');
            var self = this;
            var groups = el.all('.J_labelGroup');
            S.later(function(){
                S.each(groups, function(item){
                    var item = $(item);
                    var _labels = item.all('.filter-item');
                    self._detectLayout(item, _labels);
                    //var name = item.attr('data-filterName');
                    //_labels.attr('data-filterName', name);
                });
            }, 150);

            var resizeTimer;
            this._resizeDetect = function(){
                if(resizeTimer){
                    resizeTimer.cancel();
                }
                resizeTimer = S.later(function(){
                    S.each(el.all('.J_labelGroup'), function(item){
                        var item = $(item);
                        var _labels = item.all('.filter-item');
                        self._detectLayout(item, _labels);
                    });
                }, 100);
            };
            S.one(window).on('resize', this._resizeDetect);
        },

        destroy: function(){
            S.one(window).detach('resize', this._resizeDetect);
        },
        _detectLayout: function(item, labels){
            var self = this;
            var more = item.one('.more');
            if(item.children().height() > 26 ){
                more.css('display', 'block');
            }else{
                more.css('display', 'none');
                return;
            }
            S.each(labels, function(tag){
                var tag = $(tag).parent();
                if(tag.hasClass('selected') && (tag.offset().top > item.offset().top + 1) ){
                    self._toggleGroup(item, true);
                }
            });
        },

        _toggleGroup: function(node, expand){
            var height = node.children().height();
            var more = node.one('.more');
            if(expand){
                node.animate({height : height},{duration : 0.25, easing : 'easeOut', complete : function(){
                    more.data('expand', true);
                    more.html('收起<i class="icon iconfont">&#404;</i>');
                }});
            }else{
                node.animate({height : 21},{duration : 0.25, easing : 'easeOut', complete : function(){
                    more.data('expand', false);
                    more.html('更多<i class="icon iconfont">&#405;</i>');
                }});
            }
        }
    },{
        ATTRS : {

        },
        EVENTS : {
            '.more': {
                click: function(e, self) {
                    e.preventDefault();
                    var node = $(e.currentTarget);
                    this._toggleGroup($(e.currentTarget).parent(), !node.data('expand'));
                }
            },
            'a':{
                click: function(e){
                    e.preventDefault();
                    var node = $(e.target);
                    if(node.hasAttr('data-filterId')){
                        Router.navigate(node.attr('data-filterName') + '=' + node.attr('data-filterId'));
                    }
                }
            }
        }
    });

    FiltlerLabels.FIRES = {

    }

    FiltlerLabels.METHODS = {

    }

    S.augment(FiltlerLabels, FiltlerLabels.METHODS);

    return FiltlerLabels;
}, {
    requires: ["brix/core/brick", 'magix/router']
});