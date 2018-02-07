$.fn.serializeObject = function() {  
	var data = {};  
	var a = this.serializeArray();  
	$.each(a, function() {  
		if (data[this.name]) {  
			if (!data[this.name].push) {  
				data[this.name] = [ data[this.name] ];  
			}  
			data[this.name].push(this.value || '');  
		} else {  
			data[this.name] = this.value || '';  
		}
	});
	return data; 
};
