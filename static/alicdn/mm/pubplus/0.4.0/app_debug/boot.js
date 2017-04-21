;(function () {
    var script = function () {
        var scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
    }()

    var base = function () {
        var src = script.getAttribute('src')
        var base = /(.*\/)(.+\/.+)/.exec(src)[1]
        return base
    }()

    var debug = !!(~location.search.indexOf('debug'))
    var offline = !!(~location.search.indexOf('offline')) //local被brix占用了 ＝ ＝

    require.config({
        paths: {
            app: base + (debug && !offline ? 'app_debug/' : 'app/'),
            magix: '//g.alicdn.com/thx/magix/2.0/requirejs-magix' + (debug ? '' : '-min'),
            cookie: '//g.alicdn.com/thx/brix-release/0.1.8-beta9/brix-components/cookie/cookie',
            pat: '//g.alicdn.com/mm/pat/1.2/pat' + (debug ? '' : '-min')//局部刷新
        }
    })

    require(['magix', 'cookie', 'pat'], function (Magix, Cookie, Pat) {

        // 修复path不对问题
        var oldPath = Magix.path
        Magix.path = function (url, part) {
            if (!part) return url
            return oldPath(url, part)
        }
        Magix.toLogin = function (open, forward) {
            if (open) {
                var loginUrl = '//' + Magix.local('wwwHost') + '/member/login.htm?forward=' + encodeURIComponent(location.href)
                location.href = loginUrl
            }

            if (window.MMSiteNav) {
                window.MMSiteNav.showLoginPanel(false, forward)
            } else {
                setTimeout(function () {
                    Magix.toLogin(false, forward)
                }, 100)
            }
        }

        Magix.checkToLogin = function (open) {
            if (!Magix.local('isLogin')) {
                Magix.toLogin(open)
            }
        }

        Pat.config({
            debug: debug ? true : false
        })

        $.ajax({
            url: '/common/getUnionPubContextInfo.json',
            dataType: 'json'
        }).then(function (res) {
            Magix.start({
                edge: true,
                iniFile: 'app/ini'
            })

            var domainSuffix = (res.data.env == 'test' || !res.data.env) ? '.net' : '.com'

            Magix.local('domainSuffix', domainSuffix)
            Magix.local('pubHost', 'pub.alimama' + domainSuffix)
            Magix.local('wwwHost', 'www.alimama' + domainSuffix)
            Magix.local('advHost', 'ad.alimama' + domainSuffix)
            Magix.local('token', (new Cookie()).get('_tb_token_') || 'test')
            Magix.local('isLogin', !res.data.noLogin)
            Magix.local('memberid', res.data.memberid)
            Magix.local('ip', res.data.ip)
            Magix.local('tkMemberRank', res.data.tkMemberRank)
            Magix.local('loanLimit', res.data.loanLimit)
            Magix.local('avatar', res.data.avatar)
            Magix.local('mmNick', res.data.mmNick)
            Magix.local('cdnBase', base)
        })
    })

})()
