/*
 * 搜索补全封装
 * author : 陆议
 */
KISSY.add("components/combobox/index", function(S, Brick, KSComboBox) {
    var $ = S.all;

    var ComboBox = Brick.extend({
        bindUI : function(){
            var self = this;
            var el = self.get('el');

            var tmpl = "<div class='item-wrapper'><span class='item-text'>{text}</span></div>"

            var basicComboBox = new KSComboBox({
                srcNode: el,
                hasTrigger: false,
                dataSource: new KSComboBox.RemoteDataSource({
                    xhrCfg: {
                        url:'http://suggest.taobao.com/sug',
                        dataType:'jsonp',
                        data:{
                            code:"utf-8"
                        } 
                    },
                    paramName: "q",
                    parse: function (query, results) {
                        // 返回结果对象数组
                        return results.result;
                    },
                    cache: true
                }),
                format:function (query, results) {
                    var ret = [];
                    S.each(results, function (r) {
                        ret.push({
                            // 点击菜单项后要放入 input 中的内容
                            textContent: r[0],
                            // 菜单项的
                            content: S.substitute(tmpl, {
                                text: r[0]
                            })
                        });
                    });
                    
                    return ret;
                },
                menu: {
                    
                }
            });
            basicComboBox.render();

            self.basicComboBox = basicComboBox;
        },
        destructor: function(){
            var self = this;
            if(self.basicComboBox){
                self.basicComboBox.destroy();
                if(self.basicComboBox.get('menu').destroy){
                    self.basicComboBox.get('menu').destroy();
                }
                self.basicComboBox = null;
            }
        }
    });

    return ComboBox;
}, {
    requires: ["brix/core/brick", "combobox"]
});