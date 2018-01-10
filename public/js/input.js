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
