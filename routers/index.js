//==============================================================================
// File Name: /_router
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const express = require('express');
const router = express.Router();

router.get('/home', function(req, res){
  res.render('home', {});
})

module.exports = router;
