// function init(){
// 	window.addEventListener('scroll', function(e){
// 		var distanceY = window.pageYOffset || document.documentElement.scrollTop,shrinkOn = 300,
// 			header = document.querySelector("header");
// 		if(distanceY > shrinkOn){
// 			classie.add(header, "smaller");
// 		}else{
// 			if(classie.has(header, "smaller")){
// 				classie.remove(header, "smaller");
// 			}
// 		}
// 	});
// }

// window.onload = init();

$(window).scroll(function(){
    if ($(this).scrollTop() > 1){
        $('.header-color').addClass("sticky");
    }else{
        $('.header-color').removeClass("sticky");
    }
});
