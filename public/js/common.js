var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,
	effect: 'coverflow',
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
