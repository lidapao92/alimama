KISSY.add("app/util/format/format", function(S, Vframe, VOM) {
    var Format = {};

    S.mix(Format, {
        /**
         * 按千分位格式化数字，加','，例：'270000.50 => 270,000.50'
         * @param  {number|string|function} n 要格式的值
         * @param  {string} j 分隔符，默认为','
         * @return {array}   返回一个数组，[整数, 小数]
         */
        formatNumber: function(n, j) {
            j = j || ',';
            var type = typeof n;
            if (type !== 'number' && type !== 'string' && type !== 'function') return ['--'];
            if (type === 'function') n = n();
            if (type === 'string' && /[^\d\.\-]/.test(n)) return ['--'];
            if (isNaN(n)) return ['--'];

            var s = n.toFixed(2).toString(10);

            //是否负值
            var isNegative = (s.indexOf('-') > -1);
            if (isNegative) s = s.slice(1); //负值则取-后面的值

            var a = s.split('.');
            var l = a[0].split('').reverse().join('');
            var t = l.match(/\-?\d{3}/g) || [];
            var len = l.length;
            var e = l.slice(len - (len % 3));
            var result = [];

            if (e) t.push(e);

            for (var i = 0; i < t.length; i++) {
                t[i] = t[i].split('').reverse().join('');
            }

            //如果是负值加上 '-'
            result.push(isNegative ? '-' + t.reverse().join(j) : t.reverse().join(j));
            if (a[1]) {
                a[1] = a[1].slice(0, 2);
                if (a[1].length === 1) a[1] = a[1] + '0';
                result.push(a[1]);
            }

            return result;
        },
        jsonParse: function(jsonStr) {
            if (jsonStr) {
                return (new Function('return ' + jsonStr))();
            } else {
                return {};
            }
        },
        /* 文字截断 */
        subString : function(str, len) {
            var set = [],
                l = 0,
                item,
                reg = /[^\x00-\xFF]/;
            //kissy的each对字符串，在IE6，7下有问题，所以只能用循环

            for (var i = 0; i < str.length; i++) {
                item = str.charAt(i);
                if (reg.test(item)) {
                    //双字符
                    l += 2;
                } else {
                    l += 1;
                }
                if (l > len) {
                    break;
                }
                set.push(item);
            }
            return set.join('');
        },

        /*文字点点点
         *注意汉字算两个字符
         */
        subTextEclipse : function(str, len) {
            if (!str) return "";
            len = len || 0;
            var temp = str.replace(/[^\x00-\xFF]/g, "aa");
            if (temp.length <= len) {
                return str;
            } else {
                return this.subString(str, len) + "...";
            }

        }
    });

    return Format;

}, {
    requires: ['magix/vframe', 'magix/vom']
});