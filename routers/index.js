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
  // request('http://localhost:8080/api/user', function(error, response, body) {
  //   if(!error && response.statusCode == 200) {
  //     res.render('home', { title: '北京威胜通达', data: body });
  //   }
  // })
  request('http://localhost:8080/api/new', function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('index', { title: '北京威胜通达', nav: '1', data: body });
    }
  });
})

router.get('/test', function(req, res) {
  request('http://localhost:8080/api/new', function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('test', { title: '北京威胜通达', nav: '1', layout: 'test_layout', data: body });
    }
  });
})

router.get('/input', function(req, res) {
  res.render('input', { title: '后台系统', layout: 'second_layout' })
})

router.get('/products/:id', function(req, res){
  res.render('products', { title: "产品", nav: '3', id: req.params.id });
})

module.exports = router;
