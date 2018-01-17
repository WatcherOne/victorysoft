$(".js-show-tag").on("click", evt => this.showTag(evt))
$(".js-hide-tag").on("click", evt => this.hideTag(evt))
$(".js-put-news").on("submit", evt => this.putNewsSubmit(evt))
$(".js-put-form").on("submit", evt => this.putDataSubmit(evt))

function putDataSubmit(evt) {
	evt.preventDefault();
	const data = $(evt.currentTarget).serializeObject();
	console.log(data);
	$.ajax({
		url: "/api/user",
		method: "POST",
		data: data,
		success: (data) => {
			console.log("is ok!");
		}
	})
}

function showTag(evt) {
	const $evt = $(evt.currentTarget)
	const $parent = $evt.parents(".sec-content");
	const $next = $evt.next();
	const $target = $parent.next();
	$evt.addClass("hide");
	$next.removeClass("hide");
	$target.removeClass("hide");
}

function hideTag(evt) {
	const $evt = $(evt.currentTarget)
	const $parent = $evt.parents(".sec-content");
	const $prev = $evt.prev();
	const $target = $parent.next();
	$evt.addClass("hide");
	$prev.removeClass("hide");
	$target.addClass("hide");
}

function putNewsSubmit(evt) {
	evt.preventDefault();
	const data = $(evt.currentTarget).serializeObject();
	$.ajax({
		url: `/api/new?title=${data.title}&createdAt=${data.createdAt}&content=${data.content}`,
		method: "POST",
		success: (data) => {
			console.log("is ok!");
		}
	})
}
