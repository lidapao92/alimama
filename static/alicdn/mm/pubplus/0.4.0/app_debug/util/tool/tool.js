define('app/util/tool/tool', function() {
  return {
    /**
     * 将数字格式化成整数和小数有大小区别的样式
     * @param  {Number/String} num 待格式化的数字
     * @return {String}
     */
    formatFloat: function (num) {

      if (num === null || num === undefined) return ''

      if (typeof num == 'number') {
        num = this.formatNumber(num).join('.')
      }

      if (num.indexOf('.') > -1) {
        num = num.split('.')
        var integer = num[0]
        var decimal = num[1]

        return '<span class="integer">' + integer + '</span><span class="pointer">.</span><span class="decimal">' + decimal + '</span>'
      } else {
        return '<span class="integer">' + num + '</span><span class="pointer">.</span><span class="decimal">' + 00 + '</span>'
      }
    },
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
    percentage: function(inp) {
      inp = inp.match(/^[\d\.]{1,6}(?=%)/)
      if(inp) {
        return '<span class="num">' + inp[0] + '</span><span class="symbol">%</span>'
      }
    },
    triggerMouseEvent: function (node, eventType) {
      if (document.createEvent) {
        var evObj = document.createEvent('MouseEvents')
        evObj.initEvent(eventType, true, true)
        node.dispatchEvent(evObj)
      } else if (document.createEventObject) {
        var evObj = document.createEventObject()
        node.fireEvent( 'on' + eventType, evObj )
      }
    },
    scrollTo: function(node, isTop) {
      isTop = isTop === undefined ? true : false
      var offset = $(node).offset()
      var top = offset && offset.top || isTop || 0
      $('body,html').animate({
        scrollTop: top
      }, 150)
    }
  }
})
