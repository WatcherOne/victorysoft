const mySwiper = new Swiper('#banner-container', {
	autoplay: 4000,
	speed: 500,
	loop: true,

	// 渲染分页小点
	paginationBulletRender: function (swiper, index, className) {
		return `<li class='${className}'><a href='javascript:;'>${index + 1}</a></li>`;
	},
	
	// 禁止鼠标滑动切换
	noSwiping: true,
	
	// 如果需要分页器
	pagination: '.swiper-pagination',

	// 可点击分页器
	paginationClickable: true
})

const myProducts = new Swiper('#products-container', {
	slidesPerView: 'auto',

	// 如果需要前进后退按钮
	nextButton: '.swiper-button-product-next',
	prevButton: '.swiper-button-product-prev'
})
