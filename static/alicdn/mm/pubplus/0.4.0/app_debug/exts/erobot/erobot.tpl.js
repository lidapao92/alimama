define('app/exts/erobot/erobot.tpl', function() {
  function heredoc() { /* @heredoc
<div class="erobot">
  <div class="erobot-trigger" title="小e在线" bx-click="show" sourceid="<%= sourceId %>">
    <img src="//alp.alicdn.com/1482699549046.png">
    <p>在线咨询</p>
  </div>
</div>
  */
 return "heredoc"}

return heredoc.toString().split("\n").slice(1,-2).join("\n")
})