//==============================================================================
// File Name: /_router
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('home', { title: '北京威胜通达' });
})

module.exports = router;
