//==============================================================================
// File Name: /products/_router
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const express = require('express');
const router = express.Router();

router.get('/product', function(req, res){
  res.render('product', {});
})

module.exports = router;
