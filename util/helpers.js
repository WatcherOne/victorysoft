//==============================================================================
// File Name:   hbs_helper
// Author:      zhubo
// email:       286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const moment = require('moment');

const helpers = {
	json: function(val, options) {
		if (typeof val !== 'string') {
			return JSON.stringify(val);
		}
	},
	
	parse: function(val, options) {
		if (typeof val === 'string') {
			return JSON.parse(val);
		}
	},

	equals: function(val1, val2, options) {
		if(JSON.stringify(val1) === JSON.stringify(val2)) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	},

	formatDate: function(date, type, options) {
		if (!date) {
			return;
		}
		moment.locale('zh-cn');
		date = date === 'now' ? moment() : moment(parseInt(date));
		switch (type) {
			case "day":
				return date.format("YYYY-MM-DD");
			case "minute":
				return date.format("YYYY-MM-DD HH:mm");
			default:
				if (typeof type === "string") {
					return date.format(type);
				} else {
					return date.format("YYYY-MM-DD HH:mm:ss");
				}
		}
  	},

	add: function(val, options) {
		return val + 1;
	},

	decode: function(val, options) {
		return decodeURIComponent(val);
	}
}

module.exports = helpers;
