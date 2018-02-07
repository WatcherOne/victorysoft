//==============================================================================
// File Name:   util.js
// Author:      zhubo
// email:       286154864@qq.com
// Create Time: 2018-02-07
//==============================================================================
const request = require('request');
const proxyUrl = "http://localhost:8080";

module.exports = function getData(url){
	return new Promise(function(resolve, reject) {
		request(`${proxyUrl}${url}`, function(error, response, body) {
    		if(!error && response.statusCode == 200) {
    			resolve(body)
    		} else if(error) {
        		reject(error)
    		}
    	})
 	})
}
