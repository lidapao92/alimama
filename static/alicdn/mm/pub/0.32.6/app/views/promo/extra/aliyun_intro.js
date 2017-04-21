Magix.tmpl("app/views/promo/extra/aliyun_intro","<div class=\"wrap-hd clearfix\"> <div class=title-bar> <h2 class=title>阿里云推广</h2> </div> </div> <div class=promo-intro bx-tmpl=\"joined\" bx-datakey=\"introHtml,joined,notesHtml\"> <div class=\"desc w620\"> {{{introHtml}}} </div> <div class=promo> {{^joined}} <button class=\"btn btn-blue btn-size30\" mx-click=agree data-spm-click=\"gostr=/tblm.88.1;locaid=d0eb22f65\">立即推广</button> {{/joined}} {{#joined}} <button class=\"btn btn-blue btn-size30\" mx-click=promo_list data-spm-click=\"gostr=/tblm.88.1;locaid=d89bb26c6\">立即推广</button> {{/joined}} </div> <div class=help> <dl> <dt>推广须知</dt> <dd> {{{notesHtml}}} </dd> </dl> </div> </div>");
KISSY.add('app/views/promo/extra/aliyun_intro', function (S, View, VOM, Router, Node, MM, Util) {
    var $ = Node.all;
    return View.extend({
        init: function (e) {
            this.manage('data', e);
        },
        render: function () {
            var me = this;
            me.manage(MM.fetchAll([
                { name: 'aliyun_join' },
                {
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/aliyun_intro.html',
                        encode: 'utf-8'
                    }
                },
                {
                    name: 'get_tms_content',
                    urlParams: {
                        path: '/alp/union/pub/aliyun_notes.html',
                        encode: 'utf-8'
                    }
                }
            ], function (MesModel, IntroModel, NotesModel) {
                var data = MesModel.get('data');
                var introHtml = IntroModel.get('data').jsonString;
                var notesHtml = NotesModel.get('data').jsonString;
                me.setViewPagelet({
                    introHtml: introHtml,
                    notesHtml: notesHtml,
                    joined: data.joined
                });
            }));
        },
        events: {
            click: {
                agree: function (e) {
                    var me = e.view;
                    var top = $('#' + e.currentId).parent('.promo').offset().top;
                    var dialogConfig = Util.getDefaultDialogConfig({ top: top });
                    var viewName = 'app/views/promo/extra/aliyun_agree';
                    var viewOptions = {
                        callback: function () {
                            me.render();
                        }
                    };
                    Util.showDialog(dialogConfig, viewName, viewOptions);
                },
                promo_list: function (e) {
                    var me = e.view;
                    var data = me.getManaged('data');
                    data.setControlFalse();
                }
            }
        }
    });
}, {
    requires: [
        'mxext/view',
        'magix/vom',
        'magix/router',
        'node',
        'app/models/modelmanager',
        'app/util/util',
        'mxext/mmanager',
        'app/models/model',
        'app/models/basemodel',
        'mxext/model',
        'ajax',
        'app/util/datepicker/datepicker',
        'app/util/dialog/dialog',
        'app/util/format/format',
        'app/util/globaltip/globaltip',
        'app/util/robot/sourceid',
        'app/util/spmlog/spmlog',
        'app/util/mathextend/mathextend',
        'app/util/tooltip/tooltip',
        'app/util/widgetds/widgetds',
        'app/util/rank/rank',
        'app/util/reporttip/reporttip',
        'app/util/vcode/vcode',
        'app/util/pagination/index',
        'app/util/fields/fields',
        'app/util/mouseevent/index',
        'magix/vframe',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'app/util/spmlog/pathmap'
    ]
});