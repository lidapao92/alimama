define(
	'app/exts/globaltip/index',
	[
		'jquery',
		'underscore',
		'app/exts/globaltip/index.tpl',
		'css!app/exts/globaltip/index.css'
	], function ($, _, template) {
		var EMPTY = ''
		var GUID = [$.expando, 'tips'].join('_')
		
		var Cfg = {
			autoHide: true,
			content: EMPTY,
			delay: 3000,
			closeable: true,
			type: 'error'
		}

		var HiddenTimer

		function show(cfg) {
			cfg = _.extend(Cfg, cfg)
			var callback = cfg.callback
			var delay = cfg.delay
			var autoHide = cfg.autoHide
			var $tips = $('#' + GUID)
			delay = $.isNumeric(delay) ? + delay : Cfg.delay

			if (!$tips.length) {
				$('<div id="'+ GUID +'" class="block-global-tip"></div>').appendTo(document.body)
				$tips = $('#' + GUID)
			}

			function __show() {
				var html = _.template(template)(cfg)
				$tips.hide()
				$tips.html(html)

				if ($.isNumeric(cfg.zIndex)) {
					$tips.css('zIndex', +cfg.zIndex)
				}
				$tips.fadeIn(150)
			}

			if (HiddenTimer) {
				clearTimeout(HiddenTimer)
			}

			if (autoHide) {
				HiddenTimer = setTimeout(function() {
					hide()
					callback && callback()
				}, delay)
			}

			__show()
		}

		function hide() {
			var $tips = $('#' + GUID)
			$tips.fadeOut(150, function () {
				$tips.remove()
			})
			clearTimeout(HiddenTimer)
		}

		return {
			show: show,
			hide: hide
		}
	}
)