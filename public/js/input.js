$(function () {
	$('[data-toggle="popover"]').popover()
})
$(".js-show-tag").on("click", evt => this.showTag(evt))
$(".js-hide-tag").on("click", evt => this.hideTag(evt))
$(".js-delete-data").on("click", evt => this.deleteData(evt))

function showTag(evt) {
	const $evt = $(evt.currentTarget)
	const $parent = $evt.parents(".sec-header");
	const $next = $evt.next();
	const $target = $parent.next();
	$evt.addClass("hide");
	$next.removeClass("hide");
	$target.removeClass("hide");
}

function hideTag(evt) {
	const $evt = $(evt.currentTarget)
	const $parent = $evt.parents(".sec-header");
	const $prev = $evt.prev();
	const $target = $parent.next();
	$evt.addClass("hide");
	$prev.removeClass("hide");
	$target.addClass("hide");
}

if(document.getElementById("editor")) {
	const E = window.wangEditor;
	const editor = new E('#toolbar', '#editor');
	editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
	editor.create();
	$(".js-put-form").off().on("submit", evt => this.putFormSubmit(evt, editor));
} else if($(".js-put-form")) {
	$(".js-put-form").off().on("submit", evt => this.putFormSubmit(evt));
}

// 新增信息
function putFormSubmit(evt, editor = '') {
	evt.preventDefault();
	const data = $(evt.currentTarget).serializeObject();
	if(editor) data.editor = editor.txt.html();
	const method = data.id ? "PUT" : "POST";
	const type = $(".js-form-type").data("type")
	data.content = data.editor ? encodeURIComponent(data.editor) : '';
	data.type = JSON.parse(type) === 4 ? $("select[name=typeId] option:selected").val() : '';
	data.typeName = JSON.parse(type) === 4 ? $("select[name=typeId] option:selected").text() : data.typeName || '';
	const url = getUrl(data, type);
	$.ajax({
		url,
		method,
		success: () => {
			window.location.href = JSON.parse(type) === 4 ? `/input/type-products?typeId=${data.type}` : "/input"
		}
	})
}

function getUrl(data, type) {
	let url = "";
	switch(JSON.parse(type)) {
		case 1: url = `/api/new?id=${data.id}&title=${data.title}&createdAt=${data.createdAt}&creator=${data.creator}&content=${data.content}`; break;
		case 2: url = `/api/offer?id=${data.id}&position=${data.position}&contact=${data.contact}&local=${data.local}&content=${data.content}`; break;
		case 3: url = `/api/product/type?id=${data.id}&typeName=${data.typeName}`; break;
		case 4: url = `/api/product?id=${data.id}&name=${data.name}&createdAt=${data.createdAt}&function=${data.function}&themeImg=${data.themeImg}&type=${data.type}&typeName=${data.typeName}&content=${data.content}`; break;
		default: url = '';
	}
	return url;
}

// 删除信息
function deleteData(evt) {
	$('#myModal').modal('hide')
	const id = $(".js-delete-id").val();
	const type = $(".js-delete-type").val();
	const url = type === '1' ? '/api/new' : '/api/offer';
	$.ajax({
		url: `${url}/${id}`,
		method: "DELETE",
		success: (data) => {
			window.location.reload();
		}
	})
}

$('#myModal').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget);
	const id = button.data('id');
	const type = button.data('type');
	const modal = $(this);
	modal.find('.js-delete-type').val(type);
	modal.find('.js-delete-id').val(id);
})
