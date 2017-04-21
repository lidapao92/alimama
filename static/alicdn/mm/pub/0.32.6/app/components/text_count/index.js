KISSY.add('components/text_count/index', function (S, Brick) {
    var $ = S.all;

    return Brick.extend({
        bindUI: function () {
            var me = this;
            var el = me.get('el');
            var input = $(me.get('input'));

            me.handle = function () {
                // 鼠标粘贴事件，要延迟才能获取新的value
                S.later(function () {
                    el.html(me._countResult(input.val()));
                }, 100);
            }

            if (input.length > 0) {
                // 初始化数据
                me.handle();

                input.on('keyup', me.handle);
                input.on('paste', me.handle);
            }
        },
        _count: function (str) {
            var trueLength = this.get('trueLength');
            var countByLine = this.get('countByLine');

            if (countByLine) {
                str = str.split('\n');

                // 空白行不计数
                S.each(str, function (i, k) {
                    if (i == '') {
                        str.splice(k, 1);
                    }
                });
            } else {
                str = str.replace(/\n/g, '');

                if (trueLength) {
                    str = str.replace(/[\u4e00-\u9fa5]/g, '**');
                }
            }

            return str.length;
        },
        _countResult: function (str) {
            var len = this._count(str);
            var count = this.get('count');
            var pre = len;
            if (len > count) {
                pre = '<em class="text-count-error">' + len + '</em>';
                this.set('valid', false);
            } else {
                this.set('valid', true);
            }
            return pre + '/' + count;
        },
        isValid: function () {
            return this.get('valid');
        },
        destructor: function () {
            var me = this;
            var input = $(me.get('input'));
            input.detach('keyup', me.handle);
            input.detach('paste', me.handle);
            input = null;
        }
    }, {
        ATTRS: {
            input: {
                value: null
            },
            trueLength: {
                value: true
            },
            count: {
                value: null
            },
            countByLine: {
                value: false
            },
            valid: {
                value: true
            }
        }
    });

},{requires:['brix/core/brick']});