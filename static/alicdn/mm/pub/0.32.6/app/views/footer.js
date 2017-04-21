Magix.tmpl("app/views/footer","<div bx-name=\"footer\" bx-config=\"{mode:'simple'}\"></div>");
KISSY.add("app/views/footer", function(S, View){
  return View.extend({
    render: function(){
      this.setViewPagelet(window.UserInfo)
    }
  })
},{
  requires: ['mxext/view']
})