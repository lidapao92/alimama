define('app/views/layout/search', [
  'jquery',
  'underscore',
  'magix',
  'app/util/index',
  'app/util/dialog/index'
], function ($, _, Magix, Util, Dialog) {
   return Magix.View.extend({tmpl:"<div class=block-switch-loading></div> <div mx-vframe=true mx-view=\"app/views/common/sitenav\"></div> <div mx-vframe=true mx-view=\"app/views/common/header_search\" id=magix_vf_header></div> <div class=\"main search-main wrap clearfix\"> <div mx-vframe=true id=magix_vf_main> <div bx-name=\"components/spin\"></div> </div> </div> <div bx-name=\"app/exts/fixedtool/fixedtool\" class=fixedtool> <div bx-name=\"app/exts/gotop/gotop\"></div> <div bx-name=\"app/exts/erobot/erobot\"></div> </div> <div mx-vframe=true mx-view=\"app/views/common/footer\"></div>",    init: function () {
      var me = this
      me.observeLocation({
        path: true
      })
    },
    render: function (e) {
      var me = this
      // 框架只渲染一遍
      if (!me.rendered) {
        me.setViewHTML()
        $('#' + me.id).attr('data-spm', 1998910419)
      }

      me.animateLoading()
      me._mountVframes()
      me._destroy()
      me._spmlog()
    },
    _mountVframes: function () {
      window.scrollTo(0, 0)
      var me = this
      var vom = me.vom
      var loc = me.location
      var pn = loc.path
      var mainVframe = vom.get('magix_vf_main')
      if (mainVframe) {
        var view = pn.substring(1).replace('.htm', '')
        mainVframe.mountView('app/views/' + view)
      }
    },
    _destroy: function () {
      Util.hideMask()
      Dialog.hide()
    },
    _spmlog: function () {
      var me = this
      var loc = me.location
      var pathname = loc.path
      Util.upSPMB(pathname)
      Util.sendPV(pathname)
      Util.genPVID(pathname)
    }
  })
})