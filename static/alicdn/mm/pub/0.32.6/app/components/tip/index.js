/**
* 消息提示框
* 把波哥之前做的KISSY模块转换成brix组件
* @author: 雪卒
* @date: 2013.08.29
*/

KISSY.add('components/tip/index', function (S, Node, Promise, Brick) {
	function Tip(){
		this.args = Array.prototype.slice.call(arguments, 0)
		Tip.superclass.constructor.apply(this, arguments)
	}

	Tip.ATTRS = {
		defaultConfig: {
			value: {
				status: 'ok',      //现在支持的状态有"ok,error,stop,tips,alert,attention"
				msg: '',           //提示文字
				autoHide: false,   //是否自动隐藏
				close: true,       //是否需要关闭按钮
				border: true,      //是否需要边框
				background: true,  //是否需要背景
				icon: true,        //是否需要ICON
				anim: true,        //是否动画
				delay: 3000        //延时显示时间（毫秒）
			},
			getter: function(v){
				return v
			}
		}
	}

	Tip.METHODS = {
		show: function () {
			var self = this
			var box = self.box
			var config = self.config

			if (config.anim) {
				box.fadeIn(1,function(){
					self.fire('show')
				})
			} else {
				box.show()
				self.fire('show')
			}
		},
		hide: function () {
			var self = this
			var box = self.box
			var config = self.config

			self._clearTimeout()

			if (config.anim) {
				box.fadeOut(1,function(){
					self.fire('hide')
				})
			} else {
				box.hide()
				self.fire('hide')
			}
		}
	}

	S.extend(Tip, Brick, {
		initialize: function () {
			var selector = this.args[0]
			var config = this.args[1]
			var box = S.one(selector)
			if (!box) {
				box = S.Node('<div></div>').attr('id', S.guid('tip'))
				S.one('body').append(box)
			}

			this.box = box
			this.config = S.merge(this.get('defaultConfig'), config)
			//用来定义延时效果的标识
			this.config.id = this.box.attr('id')

			this._render()
		},
		_render: function () {
			var self = this
			var d = new Promise.Defer()
			var promise = d.promise
			var config = self.config

			promise
				.then(function(){
					self._renderUI()
				})
			 	.then(function(){
			 		self._bindUI()
			 	})
			 	.then(function(){
			 		self._clearTimeout()

			 		var d = new Promise.Defer()
			 		S.later(function(){
			 			self.show()
			 			d.resolve()
			 		}, 0)

			 		return d.promise
			 	})
			 	.then(function(){
			 		var d = new Promise.Defer()
					if (!config.autoHide) return

					Tip.timer[config.id] = S.later(function() {
						self.hide()
						d.resolve()
					}, config.delay)

					return d.promise
			 	})
			 	.fin(function(){
			 		self._clearTimeout()
			 	})

			 d.resolve()
		},
		_renderUI: function () {
			var self = this
			var box = self.box
			var config = self.config
			box.attr('style','')
				.addClass('auth-tip')
				.addClass('auth-tip-ie')

			var html = '<p class="'+config.status+ (config.border?'':' noborder') + (config.background?'':' nobackground')+(config.icon?'':' noicon')+(config.close?'':' noclose')+(config.msg==''?' nocontent':'')+'">'+(config.icon?'<i class="icon"></i>':'')+'<span class="msg">'+config.msg+'</span>'+(config.close?'<a href="#" class="close"></a>':'')+'</p>'
			box.html(html)
		},
		_bindUI: function () {
			var self = this
			var box = self.box
			var config  = self.config

			if(config.close){
				box.one('.close').on('click',function(e){
					e.halt()
					self.hide()
				})
			}
		},
		_clearTimeout:function () {
			var config = this.config
			if(Tip.timer[config.id]){
				clearTimeout(Tip.timer[config.id])
				delete Tip.timer[config.id]
			}
		},
		_destructor: function () {
			this.box.html('')
    	}
	})

	S.mix(Tip, {
		timer: {}
	})

	S.augment(Tip, Tip.METHODS)

	return Tip

}, { 
	requires: [
		'node', 
		'promise', 
		'brix/core/brick'
	] 
})
