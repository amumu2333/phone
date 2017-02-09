$(window).ready(function () {
  var box = document.querySelector("div.box");//获取元素
  var top0 = 0,
      left0 = 0;//声明初始的top和left值
  touch.on(box,"touchstart",function (ev) {
    ev.preventDefault();
  });//touchstart
  touch.on(box,"drag",function (ev) {
    ev.preventDefault();
    this.style.cssText = "top:"+(ev.y+top0)+"px;left:"+(ev.x+left0)+"px;"
  });//drag
  touch.on(box,"dragend",function (ev) {
    top0 = parseInt(this.style.top);
    left0 = parseInt(this.style.left);
    console.log(top0,left0);
  });//dragend







});//dom加载完成
