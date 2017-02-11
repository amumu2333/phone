window.addEventListener("DOMContentLoaded",function(){
	
			
	
	
	(function(){
		var draw = document.querySelector("canvas#draw"),//获取canvas元素
				cw = document.documentElement.clientWidth,//获取页面宽度
				ch = document.documentElement.clientHeight,//获取页面的高度
				Draw = draw.getContext("2d"),//获取绘图环境对象
				control = document.querySelector("ul.control");//获取控制栏
		draw.height = ch - control.offsetHeight;
		draw.width = cw>1000?1000:(cw*.8);
				
				
		
				
				
		//构造函数 Draw

		function MyDraw (ele) {
			this.ele = ele;
			this.o = this.ele.getContext("2d");
		}
		MyDraw.prototype = {
				pen: function (ev) {
					var that = this;
					o = this.getContext("2d");
					o.beginPath();
					o.moveTo(ev.offsetX,ev.offsetY);
					this.onmousemove = function(ev){
						o.lineTo(ev.offsetX,ev.offsetY);
						o.stroke();
					};//mousemove
					document.onmouseup = function(){
						o.closePath();
						that.onmousemove = null;
						document.onmouseup = null;
					};//mouseup
				},//pen方法
				rect: function(ev){
					var that = this;
					var o = this.getContext("2d");
					var [x0,y0] = [ev.offsetX,ev.offsetY];
					var [xx,yy,ww,hh] = [x0,y0,0,0];
					this.onmousemove = function(ev){
						console.log("clear--------",xx,yy,ww,hh)
						o.clearRect(xx,yy,ww,hh);
						var [x1,y1] = [ev.offsetX,ev.offsetY];
						var x = x1>x0?x0:x1;
						var y = y1>y0?y0:y1;
						var [w,h] = [Math.abs(x1-x0),Math.abs(y1-y0)];
						console.log("stroke-------",x,y,w,h)
						o.strokeRect(x,y,w,h);
						[xx,yy,ww,hh] = [x,y,w,h];
					};//mousemove
					this.onmouseup = function(ev){
						var [x1,y1] = [ev.offsetX,ev.offsetY];
						var x = x1>x0?x0:x1;
						var y = y1>y0?y0:y1;
						var [w,h] = [Math.abs(x1-x0),Math.abs(y1-y0)];
						o.strokeRect(x,y,w,h);
						
						this.onmousemove = null;
						this.onmouseup = null;
					};//mouseup
				},//rect方法
				clear: function(o,x0,y0,w,h) {
					o.clearRect(x0,y0,w,h);
				},//clear 方法
			
			
			
		}//MyDraw.prototype
		var mydraw = new MyDraw(draw);
		var options = control.querySelectorAll("li.option");
		var len_options = options.length;
		for (var i=0;i<len_options;i++) {
			options[i].classname = options[i].className; 
			options[i].addEventListener("click",function(){
				console.log(111)
				for (var j=0;j<len_options;j++) {
					options[j].className = options[j].classname;
				}
				this.className += " now";
			},false);
		};
		options[0].onmousedown = function(){
			mydraw.ele.onmousedown = mydraw.pen;
		};
		options[1].onmousedown = function(){
			mydraw.ele.onmousedown = mydraw.rect;
		};
		control.querySelector("li.clear").onmousedown = function(){
			Draw.clearRect(0,0,draw.width,draw.height);
		};
				
				
	})();// draw 作用域
	
	
	
	
	
	
	
	
	
	
	
});//dom 结构树加载完成



