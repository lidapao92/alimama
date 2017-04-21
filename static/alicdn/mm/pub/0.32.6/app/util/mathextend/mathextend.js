KISSY.add("app/util/mathextend/mathextend", function(S, Vframe, VOM) {
    var MathExtend = {};

    S.mix(MathExtend, {
        /**
         * 加法函数，用来得到精确的加法结果
         * 说明：JavaScript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
         * 调用：numberAdd(arg1,arg2)
         * 返回值：arg1加上arg2的精确结果
         */
        numberAdd: function (arg1, arg2) {
            var r1, r2, m, n;
            try {
                r1 = arg1.toString().split(".")[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split(".")[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
            n = (r1 >= r2) ? r1 : r2;
            return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
        },
        /**
         * 减法函数，用来得到精确的减法结果
         * 说明：JavaScript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
         * 调用：numberSub(arg1,arg2)
         * 返回值：arg1减去arg2的精确结果
         */
        numberSub: function (arg1, arg2) {
            var r1, r2, m, n;
            try {
                r1 = arg1.toString().split(".")[1].length;
            }
            catch (e) {
                r1 = 0;
            }
            try {
                r2 = arg2.toString().split(".")[1].length;
            }
            catch (e) {
                r2 = 0;
            }
            m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
            n = (r1 >= r2) ? r1 : r2;
            return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
        }
    });

    return MathExtend;

}, {
    requires: ['magix/vframe', 'magix/vom']
});