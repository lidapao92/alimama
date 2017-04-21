define(
  'app/views/common/footer',
  [
    'jquery',
    'underscore',
    'magix'
  ],
  function($, _, Magix) {
     return Magix.View.extend({tmpl:"<div class=footer> <div class=\"footer-bd wrap\" bx-name=\"components/footer\"></div> </div>",      render: function() {
        this.setView()
      }
    })
  }
)