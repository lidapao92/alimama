KISSY.add('app/util/util', function (S, DatePicker, Dialog, Format, GlobalTip, Robot, Spmlog, MathExtend, Tooltip, WidgetDs, Ranks, ReportTip, Vcode, Pagination, Fields, Mouseevent) {
    var exports = {};
    S.mix(exports, DatePicker);
    S.mix(exports, Dialog);
    S.mix(exports, Format);
    S.mix(exports, GlobalTip);
    S.mix(exports, Robot);
    S.mix(exports, Spmlog);
    S.mix(exports, MathExtend);
    S.mix(exports, Tooltip);
    S.mix(exports, WidgetDs);
    S.mix(exports, Ranks);
    S.mix(exports, ReportTip);
    S.mix(exports, Vcode);
    S.mix(exports, Pagination);
    S.mix(exports, Fields);
    S.mix(exports, Mouseevent);
    return exports;
}, {
    requires: [
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
        'magix/vom',
        'magix/router',
        'brix/gallery/datepicker/index',
        'brix/gallery/calendar/index',
        'brix/gallery/dialog/index',
        'node',
        'app/util/spmlog/pathmap'
    ]
});