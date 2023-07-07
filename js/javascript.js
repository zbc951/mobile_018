$(function(){
    var swiper = new Swiper('.swiper', {
        loop: true, //循環
	    autoHeight: true, //自動高
        autoplay: {  //自動播放
		delay: 5500, //延遲
		disableOnInteraction: false, //
		pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
 
		pagination: { //dot
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: { //arrow
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
        },
    });
})

$(function(){
	$(".home .enterGroup .buttonGroup button").click(function(){
		$(".home .enterGroup").toggleClass("display");
		$(".home .enterAfter").addClass("display");
	})
})