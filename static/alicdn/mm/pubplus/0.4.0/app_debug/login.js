define('app/login', [
    'jquery',
    'magix'
], function ($, Magix) {
    $('body').on('click', '[data-login]', function (e) {
        if (!Magix.local('isLogin')) {
            var forward = $(e.currentTarget).attr('href')

            if (/^\/[^\/]/.test(forward)) {
                forward = 'http://' + Magix.local('pubHost') + forward
            } else if (/^(http|\/\/)/.test(forward)) {
                forward = /^\/\//.test(forward) ? ('http:' + forward) : forward
            } else {
                forward = null
            }

            e && e.preventDefault()
            e && e.stopImmediatePropagation()
            Magix.toLogin(false, forward)
        }
    })
})