//==============================================================================
// File Name:   /_router==后台维护路由
// Author:      zhubo
// email:       286154864@qq.com
// Create Time: 2018-02-07
//==============================================================================
const express = require('express');
const router = express.Router();
const getData = require('../util/util');

router.get('/', function(req, res) {
    Promise.all([getData(`/api/new`), getData(`/api/offer`), getData(`/api/product/type`), getData(`/api/product`)]).then((values) => {
        res.render('input', { title: '后台系统', layout: 'input_layout', news: JSON.parse(values[0]), offers: JSON.parse(values[1]), type: JSON.parse(values[2]), products: JSON.parse(values[3]) });
    });
})

router.get('/news', function(req, res) {
    const newId = req.query.id || '';
    newId ? getData(`/api/new/${newId}`).then((value) => {
        res.render('input_news', { title: '编辑动态', layout: 'input_layout', new: JSON.parse(value) });
    }) : res.render('input_news', { title: '新增动态', layout: 'input_layout' });
})

router.get('/join', function(req, res) {
    const offerId = req.query.id || '';
    offerId ? getData(`/api/offer/${offerId}`).then((value) => {
        res.render('input_join', { title: '编辑招聘信息', layout: 'input_layout', offer: JSON.parse(value) });
    }) : res.render('input_join', { title: '新增招聘信息', layout: 'input_layout' });
})

router.get('/type', function(req, res) {
    const typeId = req.query.id || '';
    const typeName = req.query.typeName || '';
    const title = typeId ? "编辑" : "新增";
    res.render('input_type', { title: `${title}产品分类`, layout: 'input_layout', typeId, typeName });
})

router.get('/products', function(req, res) {
    const productId = req.query.id || '';
    productId ? Promise.all([getData(`/api/product/${productId}`), getData(`/api/product/type`)]).then((values) => {
        res.render('input_products', { title: '编辑产品信息', layout: 'input_layout', products: JSON.parse(values[0]), type: JSON.parse(values[1]) });
    }) : getData(`/api/product/type`).then((value) => {
        res.render('input_products', { title: '新增产品信息', layout: 'input_layout', type: JSON.parse(value) });
    });
})

module.exports = router;
