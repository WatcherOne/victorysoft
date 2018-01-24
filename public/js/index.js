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

$(".js-toggle-li").on("click", evt => this.toggleLi(evt))
$("#js-select-product").on("change", evt => this.selectProduct(evt))

function toggleLi(evt) {
	const $evt = $(evt.currentTarget)
	const $show = $evt.find(".show-li");
	const $close = $evt.find(".close-li");
	const $next = $evt.nextAll("li");
	$show.toggleClass("hide");
	$close.toggleClass("hide");
	$next.toggleClass("hide");
}

function selectProduct(evt) {
	const $evt = $(evt.currentTarget)
	const $target = $evt.find("option:selected");
	window.location.hash = `#${$target.val()}`;
}
