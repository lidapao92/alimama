define('app/exts/align/index', [
	'jquery',
	'underscore',
	'brix/base'
], function($, _, Brick) {
	var WIN = window

	function getRegion(node) {
		var offset, w, h,
			domNode = node[0]
		if (!$.isWindow(domNode)) {
			offset = node.offset()
			w = node.outerWidth()
			h = node.outerHeight()
		} else {
			var $win = $(WIN)
			offset = {
				left: $win.scrollLeft(),
				top: $win.scrollTop()
			}
			w = $win.width()
			h = $win.height()
		}
		offset.width = w
		offset.height = h
		return offset
	}

	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 * @param region
	 * @param align
	 * @ignore
	 */
	function getAlignOffset(region, align) {
		var V = align.charAt(0),
			H = align.charAt(1),
			w = region.width,
			h = region.height,
			x, y

		x = region.left
		y = region.top

		if (V === "c") {
			y += h / 2
		} else if (V === "b") {
			y += h
		}

		if (H === "c") {
			x += w / 2
		} else if (H === "r") {
			x += w
		}

		return {
			left: x,
			top: y
		}
	}

	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
		var xy,
			diff,
			p1,
			p2

		xy = {
			left: elRegion.left,
			top: elRegion.top
		}

		p1 = getAlignOffset(refNodeRegion, points[0])
		p2 = getAlignOffset(elRegion, points[1])

		diff = [p2.left - p1.left, p2.top - p1.top]

		return {
			left: xy.left - diff[0] + (+offset[0]),
			top: xy.top - diff[1] + (+offset[1])
		}
	}

	var Align = {
		/*
		 * 对齐 Overlay 到 node 的 points 点, 偏移 offset 处
		 * @ignore
		 * @param {Element} node 参照元素, 可取配置选项中的设置, 也可是一元素
		 * @param {String[]} points 对齐方式
		 * @param {Number[]} [offset] 偏移
		 * @chainable
		 */
		getBoundingRect: function(el, align) {
			var r = {
				x: 0,
				y: 0
			}
			if (!el || !el.length) {
				return r
			}
			align = align || {}
			var refNode = $(align.node || WIN)
			var points = align.points || ['bl', 'tl']
			var offset = align.offset && [].concat(align.offset) || [0, 0]

			// 当前节点所占的区域, left/top/width/height
			var elRegion = getRegion(el)
			// 参照节点所占的区域, left/top/width/height
			var refNodeRegion = getRegion(refNode)
			// 当前节点将要被放置的位置
			var elFuturePos = getElFuturePos(elRegion,
				refNodeRegion, points, offset)
			// 当前节点将要所处的区域
			var newElRegion = _.extend({}, elRegion, elFuturePos)

			return {
				x: newElRegion.left,
				y: newElRegion.top
			}
		}
	}

	return Align
})