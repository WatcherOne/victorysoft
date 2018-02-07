//==============================================================================
// File Name:   /_router==前台页面路由
// Author:      zhubo
// email:       286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const express = require('express');
const router = express.Router();
const getData = require('../util/util');

router.get('/', function(req, res) {
  Promise.all([getData(`/api/new`), getData(`/api/product`)]).then((values) => {
    res.render('index', { title: '北京威胜通达', nav: '1', news: JSON.parse(values[0]), products: JSON.parse(values[1]) });
  });
})

router.get('/about', function(req, res) {
  res.render('about', { title: '公司简介', nav: '2' });
})

router.get('/products', function(req, res){
  Promise.all([getData(`/api/product/type`), getData(`/api/product`)]).then((values) => {
    res.render('products', { title: "产品中心", nav: '3', type: JSON.parse(values[0]), products: JSON.parse(values[1]) });
  });
})

router.get('/products/:id', function(req, res){
  getData(`/api/product/${req.params.id}`).then((value) => {
    res.render('products_detail', { title: "项目详情", nav: '3', data: JSON.parse(value) });
  });
})

router.get('/news', function(req, res){
  getData(`/api/new`).then((value) => {
    res.render('news', { title: '新闻中心', nav: '4', data: JSON.parse(value) });
  });
})

router.get('/news/:id', function(req, res){
  getData(`/api/new/${req.params.id}`).then((value) => {
    res.render('news_detail', { title: "新闻详情", nav: '4', data: JSON.parse(value) });
  });
})

router.get('/join', function(req, res) {
  getData(`/api/offer`).then((value) => {
    res.render('join', { title: '招聘中心', nav: '5', data: JSON.parse(value) });
  });
})

module.exports = router;
