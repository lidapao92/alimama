define('app/exts/dialog/dialog.tpl', function() {

  function heredoc() { /* @heredoc
<div class="dialog dialog-singleton dialog-<%= placement %>">
  <button bx-click="close" type="button" class="dialog-close <%= closable ? '' : 'hide' %>"><span class="pubfont">&#xe603;</span></button>
  <div class="dialog-content">
    <%= content %>
  </div>
</div>
  */
 return "heredoc"}

return heredoc.toString().split("\n").slice(1,-2).join("\n")

})