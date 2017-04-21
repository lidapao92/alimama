define('app/util/level/level', [
  'jquery',
  'underscore'
], function ($, _) {
  return {
    /**
     * level有0~7 六个等级（其中0、1、2等级展示的图标相同）
     * size有1~3 三个等级
     */
    getTkLevel: function(level, size) {
      if (!level && level !=0) return '--'
      if (!size) size = 3
      level = parseInt(level)
      var levelMap = {
        0: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-1 tk-level-size-' + size + '"></a>',
        1: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-1 tk-level-size-' + size + '"></a>',
        2: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-1 tk-level-size-' + size + '"></a>',
        3: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-2 tk-level-size-' + size + '"></a>',
        4: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-3 tk-level-size-' + size + '"></a>',
        5: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-4 tk-level-size-' + size + '"></a>',
        6: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-5 tk-level-size-' + size + '"></a>',
        7: '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍" class="tk-level tk-level-6 tk-level-size-' + size + '"></a>'
      }
      var levelHtmlStr = levelMap[level]
      if (!levelHtmlStr) return '--'
      return levelHtmlStr
    }
  }
})