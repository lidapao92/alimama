KISSY.add("app/util/datepicker/datepicker", function (S, Vframe, VOM, Router, BXDatePicker, BXCalender) {
    var DatePicker = {};

    S.mix(DatePicker, {
        compareDate: function (sd, ed) {
            if (typeof sd == 'string') {
                sd = new Date(sd.replace(/-/g, '/'));
            }

            if (typeof ed == 'string') {
                ed = new Date(ed.replace(/-/g, '/'));
            }
            var compare = ['getFullYear', 'getMonth', 'getDate'];
            var rs = 0;

            S.each(compare, function (item) {
                if (sd[item]() > ed[item]()) {
                    rs = 1;
                    return false;
                } else if (sd[item]() < ed[item]()) {
                    rs = -1;
                    return false;
                }
            });

            return rs;
        },
        dateParse: function (date, str) {
            return BXDatePicker.Date.parse(date, str || '-');
        },
        dateFormat: function (date, str) {
            return BXDatePicker.Date.format(date, str || 'yyyy-mm-dd');
        },
        getRecentlyDate: function (n, base) {
            var dt = 1000 * 60 * 60 * 24;
            var d = base || new Date();
            var ct = d.getTime();
            return new Date(ct + dt * n);
        },
        createDatePicker: function (config) {
            var me = this;
            var trigger = config.trigger || S.one('#sitemapTimeRange');
            var today = new Date();
            var yesterDay = me.getRecentlyDate(-1);
            var startTime = config.startTime || me.getRecentlyDate(-7);
            var endTime = config.endTime || yesterDay;
            var range = config.range || 30;
            var lastRange = me.getRecentlyDate(-range);

            var quickDates = {
                'yesterday': {
                    text: '昨天',
                    dateRange: [me.getRecentlyDate(-1), yesterDay]
                },
                '7before': {
                    text: '过去7天',
                    dateRange: [me.getRecentlyDate(-7), yesterDay]
                },
                '15before': {
                    text: '过去15天',
                    dateRange: [me.getRecentlyDate(-15), yesterDay]
                },
                '30before': {
                    text: '过去30天',
                    dateRange: [me.getRecentlyDate(-30), yesterDay]
                }
            };

            if (range >=60) {
                quickDates['60before'] = {
                    text: '过去60天',
                    dateRange: [me.getRecentlyDate(-60), yesterDay]
                };
            }

            if (range >=90) {
                quickDates['90before'] = {
                    text: '过去90天',
                    dateRange: [me.getRecentlyDate(-90), yesterDay]
                };
            }

            if (me.datepicker) {
                me.datepicker.destructor();
                me.datepicker = null;
            }

            var datepicker = new BXDatePicker({
                trigger: trigger,
                dates: {
                    start: startTime,
                    end: endTime
                },
                minDateStart: lastRange,
                maxDateStart: today,
                minDateEnd: lastRange,
                maxDateEnd: today,
                isQuick: true,
                isCompare: false,
                quickDates: quickDates,
                align: {
                    points: ['bl', 'tl'],
                    offset: [0, 0]
                }
            });

            datepicker.on('selected', function (e) {
                var today = new Date();

                if (!e.start || !e.end) {
                    me.showGlobalTip('请选择日期范围!');
                    return;
                }

                // 起始大于结束
                if (me.compareDate(e.start, e.end) > 0) {
                    me.showGlobalTip('结束日期要大于起始日期!');
                    return false;
                }

                // 起始或者结束大于昨天
                if (me.compareDate(e.start, today) > 0 || me.compareDate(e.end, today) > 0) {
                    me.showGlobalTip('选择的时间超出范围!');
                    return;
                }

                if (me.compareDate(e.start, lastRange) < 0) {
                    me.showGlobalTip('选择的起始时间需在离今天过去' + range + '天以内！');
                    return;
                }

                Router.navigate('pageNo=1&startTime=' + me.dateFormat(e.start) + '&endTime=' + me.dateFormat(e.end));
            });

            me.datepicker = datepicker;
        },
        destroyDatePicker: function () {
            var me = this;
            if (me.datepicker) {
                me.datepicker.destructor();
                me.datepicker = null;
            }
        }
    });

    return DatePicker;

}, {
    requires: ['magix/vframe', 'magix/vom', 'magix/router', 'brix/gallery/datepicker/index', 'brix/gallery/calendar/index']
});