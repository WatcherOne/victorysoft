//==============================================================================
// File Name: hbs_helper
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const helpers = {
  json: function(val, options) {
		return JSON.stringify(val);
  },

  add: function(val, options){
		return val + 1;
	},
	
	judgeEven: function(val, options) {
		if((value % 2) == 0) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	}
}

module.exports = helpers;
