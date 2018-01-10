//==============================================================================
// File Name: /_router
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res) {
  request('http://localhost:8080/api/user', function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('home', { title: '北京威胜通达', data: body });
    }
  })
})

router.get('/input', function(req, res) {
  res.render('input', { title: '加入数据库数据', layout: 'second_layout' })
})

module.exports = router;
