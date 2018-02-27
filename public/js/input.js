$(function () {
	$('[data-toggle="popover"]').popover()
})
$(".js-show-tag").on("click", function(evt) { showTag(evt) })
$(".js-hide-tag").on("click", function(evt) { hideTag(evt) })
$(".js-delete-data").on("click", function(evt) { deleteData(evt) })

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
	// editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
	editor.create();
	$(".js-put-form").off().on("submit", function(evt) { putFormSubmit(evt, editor) });
} else if($(".js-put-form")) {
	$(".js-put-form").off().on("submit", function(evt) { putFormSubmit(evt) });
}


// 新增信息
function putFormSubmit(evt, editor) {
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
		url: url,
		method: method,
		success: function() {
			window.location.href = "/admin"
		}
	})
}

function getUrl(data, type) {
	let url = "";
	switch(JSON.parse(type)) {
		case 1: url = "/api/new?id="+data.id+"&title="+encodeURIComponent(data.title)+"&createdAt="+data.createdAt+"&creator="+encodeURIComponent(data.creator)+"&content="+encodeURIComponent(data.content); break;
		case 2: url = "/api/offer?id="+data.id+"&position="+encodeURIComponent(data.position)+"&contact="+encodeURIComponent(data.contact)+"&local="+encodeURIComponent(data.local)+"&content="+encodeURIComponent(data.content); break;
		case 3: url = "/api/product/type?id="+data.id+"&typeName="+encodeURIComponent(data.typeName); break;
		case 4: url = "/api/product?id="+data.id+"&name="+encodeURIComponent(data.name)+"&createdAt="+data.createdAt+"&function="+encodeURIComponent(data.function)+"&themeImg="+encodeURIComponent(data.themeImg)+"&type="+data.type+"&typeName="+encodeURIComponent(data.typeName)+"&content="+encodeURIComponent(data.content); break;
		default: url = '';
	}
	return url;
}

// 删除信息
function deleteData(evt) {
	$('#myModal').modal('hide')
	const id = $(".js-delete-id").val();
	const type = $(".js-delete-type").val();
	let url = '';
	switch(JSON.parse(type)) {
		case 1: url = '/api/new/'; break;
		case 2: url = '/api/offer/'; break;
		case 4: url = '/api/product/'; break;
		default: url = '';
	}
	$.ajax({
		url: url+id,
		method: "DELETE",
		success: function(data) {
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
