const mySwiper = new Swiper('#banner-container', {
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

const myProducts = new Swiper('#product-container', {
	noSwiping: true,
	slidesPerView: 'auto',

	onClick: function(swiper) {
		console.log(swiper);
	},

	// 如果需要前进后退按钮
	nextButton: '.swiper-button-product-next',
	prevButton: '.swiper-button-product-prev',
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
