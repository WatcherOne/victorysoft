var mySwiper = new Swiper('.swiper-container', {
	autoplay: 4000,
	speed: 500,
	loop: true,
	
	// 禁止鼠标滑动切换
	noSwiping: true,
	
	// 如果需要分页器
	pagination: '.swiper-pagination',
	// 可点击分页器
	paginationClickable: true,
	
	// 如果需要前进后退按钮
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
})

$("#js-get-data").click(function() {
	$.ajax({
		url: "/api/boys",
		method: 'GET',
		success: (data) => {
			console.log(data);
		}
	})
})
