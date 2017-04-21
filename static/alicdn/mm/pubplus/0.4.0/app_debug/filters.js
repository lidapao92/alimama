define('app/filters', [
  'jquery',
  'magix',
  'app/util/index'
], function($, Magix, Util) {
  return {
    adaptImg100: function(value) {
      return this.adaptImg(value, window.devicePixelRatio > 1 ? '200x200' : '100x100')
    },
    adaptImg220: function(value) {
      return this.adaptImg(value, window.devicePixelRatio > 1 ? '400x400' : '220x220')
    },
    formatNumber: function (value) {
      return Util.formatNumber(value).join('.')
    },
    toInt: function(value) {
      return Util.formatNumber(value)[0]
    },
    toFloat: function(value) {
      return Util.formatFloat(parseFloat(value))
    },
    toMoneyYuan: function(value) {
      return value ? Util.formatFloat(parseFloat(value)) + '<span class="yuan">元</span>' : '<span class="integer">--</span>'
    },
    toMoneySymbol: function(value) {
      return value ? '<span class="yuan">￥</span>' + Util.formatFloat(parseFloat(value)) : '<span class="integer">--</span>'
    },
    toPercentage: function(value) {
      value = parseFloat(value)
      return value === 0 || value ? Util.formatFloat(value) + '<span class="percent">%</span>' : '<span class="integer">--</span>'
    },
    tkLevel: function(value) {
      return Util.getTkLevel(value)
    },
    pvid: function () {
      return Magix.local('pvid')
    }
  }
})