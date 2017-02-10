(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=700){
                  // 这里的640 取决于设计稿的宽度
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 700) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);


window.addEventListener("load",function(){
	var flex_box = document.querySelectorAll("ul.flex"),
			len = flex_box.length;
	for (var i=0;i<len;i++) {
		var items = flex_box[i].querySelectorAll("li.item"),
				len_items = items.length;
		for (var j=0;j<len_items;j++) {
			items[j].style.height = items[j].offsetWidth + "px";
		}
	}
});//window.onload