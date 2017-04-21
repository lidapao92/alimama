/**
 * 旺旺点灯，无依赖底层库，支持IE6+
 * 使用方式
 * <a class="J_aliwangwang" href="#" data-account="慧知"></a>
 *
 * 代码改造于http://gitlab.alibaba-inc.com/alipay-js/apww/blob/master/index.js
 * http://spm.alipay-inc.com/docs/alipay-apww/latest/examples/index.html
 */

window.aliww = (function(undefined) {
    /**
     * 解决IE7以下对class选取兼容
     * http://www.cnblogs.com/rubylouvre/archive/2009/07/24/1529640.html
     * @param {String} searchClass
     * @param {HTMLElement} [node]
     * @param {String} [tag]
     * @returns {Array} 匹配的Dom
     */
    var getElementsByClassName = function (searchClass, node, tag) {
        if (document.getElementsByClassName) {
            var nodes = (node || document).getElementsByClassName(searchClass), result = [];
            for (var i = 0; node = nodes[i++];) {
                if (tag !== "*" && node.tagName === tag.toUpperCase()) {
                    result.push(node)
                } else {
                    result.push(node)
                }
            }
            return result
        } else {
            node = node || document;
            tag = tag || "*";
            var classes = searchClass.split(" "),
                elements = (tag === "*" && node.all) ? node.all : node.getElementsByTagName(tag),
                patterns = [],
                current,
                match,
                result = [];
            var i = classes.length;
            while (--i >= 0) {
                patterns.push(new RegExp("(^|\\s)" + classes[i] + "(\\s|$)"));
            }
            var j = elements.length;
            while (--j >= 0) {
                current = elements[j];
                match = false;
                for (var k = 0, kl = patterns.length; k < kl; k++) {
                    match = patterns[k].test(current.className);
                    if (!match)  break;
                }
                if (match)  result.push(current);
            }
            return result;
        }
    }

    function reqJsonp (url, callback){
        var s = document.createElement('script')
        var _jsoncallback = window.jsonpcallback
        s.src = url + '&callback=jsonpcallback';
        var sc = document.getElementsByTagName("script")[0];
        sc.parentNode.insertBefore(s, sc);
        window.jsonpcallback = function(res){
            callback.apply(null, arguments)
            setTimeout(function(){
                sc.parentNode.removeChild(s)
                if(_jsoncallback){
                    window.jsonpcallback = _jsoncallback
                }else{
                    try{
                        delete window.jsonpcallback
                    }catch(e){
                        window.jsonpcallback = undefined
                    }
                }
            },0)
        }
    }

    var LIGHT_TYPE = ['offline', 'online', 'mobile'],
        DEFAULT_TRIGGER = 'J_aliwangwang',
        DEFAULT_PREFIX_CLASS = 'ui-ww',
        DEFAULT_HOST = 'https://couriercore.alipay.com',
        ATTR_WW_ACCOUNT = 'data-account',
        LINK_URL = 'http://www.taobao.com/webww/ww.php?ver=3&siteid=cntaobao&status=1&charset=utf-8&touid=',
        JSONP_URL = '/muliuserstatus.aw?beginnum=0&site=cntaobao&charset=utf-8&uids=';

    return function(){
        var accoutList = [], nameList = [];

        // 解析所有的 DOM，获取旺旺名
        var els = getElementsByClassName(DEFAULT_TRIGGER, document, '*')
        for(var i= 0,l=els.length;i<l;i++){
            var wwname = els[i].getAttribute(ATTR_WW_ACCOUNT)
            if (wwname) {
                accoutList.push(els[i]);
                nameList.push(encodeURIComponent(wwname));
            }
        }

        // 没有则不请求
        if (nameList.length === 0) return;

        // 异步请求旺旺状态
        reqJsonp(DEFAULT_HOST + JSONP_URL + nameList.join(';'), function(result) {
            for(var i = 0, l= accoutList.length;i<l;i++){
                var status = LIGHT_TYPE[(result && result.success) ? result.data[i] : 0];
                var wwClass = DEFAULT_PREFIX_CLASS;
                // 设置状态样式
                accoutList[i].className =[wwClass, wwClass + '-' + status].join(' ')
                accoutList[i].href = LINK_URL + encodeURIComponent(accoutList[i].getAttribute(ATTR_WW_ACCOUNT))
                accoutList[i].target = '_blank'
            }
        });

    }
})();
