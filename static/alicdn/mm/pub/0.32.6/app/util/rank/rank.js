KISSY.add("app/util/rank/rank", function(S, Vframe, VOM) {
    var Rank = {};

    /**
     * 获取店铺心级
     * @curRank 选中的心级
     * @minRank 可选心级的下限
     * @maxRank 可选心级的上限
     * @split 是否按心级分组
     */
    Rank.getShopLevel = function (cfg) {
        var rankMap = [
            {
                code: 1,
                text: '一心'
            },
            {
                code: 2,
                text: '两心'
            },
            {
                code: 3,
                text: '三心'
            },
            {
                code: 4,
                text: '四心'
            },
            {
                code: 5,
                text: '五心'
            },
            {
                code: 11,
                text: '一钻'
            },
            {
                code: 12,
                text: '两钻'
            },
            {
                code: 13,
                text: '三钻'
            },
            {
                code: 14,
                text: '四钻'
            },
            {
                code: 15,
                text: '五钻'
            },
            {
                code: 101,
                text: '一皇冠'
            },
            {
                code: 102,
                text: '两皇冠'
            },
            {
                code: 103,
                text: '三皇冠'
            },
            {
                code: 104,
                text: '四皇冠'
            },
            {
                code: 105,
                text: '五皇冠'
            },
            {
                code: 1001,
                text: '一金冠'
            },
            {
                code: 1002,
                text: '两金冠'
            },
            {
                code: 1003,
                text: '三金冠'
            },
            {
                code: 1004,
                text: '四金冠'
            },
            {
                code: 1005,
                text: '五金冠'
            }
        ]

        if (cfg.curRank) {
            S.each(rankMap, function (i, k) {
                if (i.code == cfg.curRank) {
                    i.selected = true;
                }
            });
        }

        if (cfg.minRank) {
            S.each(rankMap, function (i, k) {
                if (i.code < cfg.minRank) {
                    i.disabled = true;
                }
            });
        }

        if (cfg.maxRank) {
            S.each(rankMap, function (i, k) {
                if (i.code > cfg.minRank) {
                    i.disabled = true;
                }
            });
        }

        if (cfg.split) {
            var tmpArr = [];
            var rank = [];
            var splitNum = 5;
            S.each(rankMap, function (i, k) {
                if (k < Math.ceil((k + 1) / splitNum) * splitNum) {
                    tmpArr.push(i);
                }

                if ((k + 1) % splitNum == 0) {
                    rank.push(tmpArr);
                    tmpArr = [];
                }
            });

            return rank;
        }

        return rankMap;
    }

    /**
     * 新的淘客等级 图标
     * @level 等级数字 
     */
    Rank.getTkLevel = function(level) {
        if (!level && level !=0) return "-";
        level = parseInt(level);
        var levelMap = {
            0: '<span class="tk-level tk-level-1"></span>',
            1: '<span class="tk-level tk-level-1"></span>',
            2: '<span class="tk-level tk-level-1"></span>',
            3: '<span class="tk-level tk-level-2"></span>',
            4: '<span class="tk-level tk-level-3"></span>',
            5: '<span class="tk-level tk-level-4"></span>',
            6: '<span class="tk-level tk-level-5"></span>',
            7: '<span class="tk-level tk-level-6"></span>'
        }
        var htmlStr = '<a href="http://www.taobao.com/go/act/other/union-rank-intro.php" target="_blank" title="查看会员介绍">{level}</a>';
        var levelHtmlStr = levelMap[level];
        if (!levelHtmlStr) return "-";
        return S.substitute(htmlStr, {
            level: levelHtmlStr
        });
    }
    return Rank;

}, {
    requires: ['magix/vframe', 'magix/vom']
});