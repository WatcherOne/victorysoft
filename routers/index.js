//==============================================================================
// File Name: /_router
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================
const express = require('express');
const router = express.Router();
const request = require('request');
const proxyUrl = "http://localhost:8080";

router.get('/', function(req, res) {
  request(`${proxyUrl}/api/new`, function(error, response, data1) {
    if(!error && response.statusCode == 200) {
      request(`${proxyUrl}/api/product`, function(error, response, data2) {
        if(!error && response.statusCode == 200) {
          res.render('index', { title: '北京威胜通达', nav: '1', news: data1, products: data2 });
        }
      })
    }
  });
})

router.get('/about', function(req, res) {
  res.render('about', { title: '公司简介', nav: '2' });
})

router.get('/products', function(req, res){
  request(`${proxyUrl}/api/product/type`, function(error, response, data1) {
    if(!error && response.statusCode == 200) {
      request(`${proxyUrl}/api/product`, function(error, response, data2) {
        if(!error && response.statusCode == 200) {
          res.render('products', { title: "产品中心", nav: '3', type: data1, products: data2 });
        }
      })
    }
  })
})

router.get('/products/:id', function(req, res){
  const productId = req.params.id;
  request(`${proxyUrl}/api/product/${productId}`, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('products_detail', { title: "项目详情", nav: '3', data: body });
    }
  });
})

router.get('/news', function(req, res){
  request(`${proxyUrl}/api/new`, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('news', { title: '新闻中心', nav: '4', data: body });
    }
  });
})

router.get('/news/:id', function(req, res){
  const newId = req.params.id;
  request(`${proxyUrl}/api/new/${newId}`, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('news_detail', { title: "新闻详情", nav: '4', data: body });
    }
  });
})

router.get('/join', function(req, res) {
  request(`${proxyUrl}/api/offer`, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('join', { title: '招聘中心', nav: '5', data: body });
    }
  });
})

router.get('/input', function(req, res) {
  request(`${proxyUrl}/api/new`, function(error, response, data1) {
    if(!error && response.statusCode == 200) {
      request(`${proxyUrl}/api/offer`, function(error, response, data2) {
        if(!error && response.statusCode == 200) {
          request(`${proxyUrl}/api/product/type`, function(error, response, data3) {
            if(!error && response.statusCode == 200) {
              res.render('input', { title: '后台系统', layout: 'second_layout', news: data1, offers: data2, type: data3 });
            }
          });
        }
      });
    }
  });
})

router.get('/input/news', function(req, res) {
  const newId = req.query.id || '';
  if(newId) {
    request(`${proxyUrl}/api/new/${newId}`, function(error, response, body) {
      if(!error && response.statusCode == 200) {
        res.render('input_news', { title: '编辑动态', layout: 'second_layout', new: body });
      }
    });
  } else {
    res.render('input_news', { title: '新增动态', layout: 'second_layout' });
  }
})

router.get('/input/join', function(req, res) {
  const offerId = req.query.id || '';
  if(offerId) {
    request(`${proxyUrl}/api/offer/${offerId}`, function(error, response, body) {
      if(!error && response.statusCode == 200) {
        res.render('input_join', { title: '编辑招聘信息', layout: 'second_layout', offer: body });
      }
    });
  } else {
    res.render('input_join', { title: '新增招聘信息', layout: 'second_layout' });
  }
})

router.get('/input/type', function(req, res) {
  const typeId = req.query.id || '';
  const typeName = req.query.typeName || '';
  const title = typeId ? "编辑产品分类" : "新增产品分类";
  res.render('input_type', { title, layout: 'second_layout', typeId, typeName });
})

router.get('/input/type-products', function(req, res) {
  const typeId = req.query.typeId || '';
  request(`${proxyUrl}/api/product`, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('input_type_products', { title: '产品信息管理中心', layout: 'second_layout', data: body, typeId });
    }
  });
})

router.get('/input/products', function(req, res) {
  const productId = req.query.id || '';
  if(productId) {
    request(`${proxyUrl}/api/product/${productId}`, function(error, response, data1) {
      if(!error && response.statusCode == 200) {
        request(`${proxyUrl}/api/product/type`, function(error, response, data2) {
          if(!error && response.statusCode == 200) {
            res.render('input_products', { title: '编辑产品信息', layout: 'second_layout', products: data1, type: data2 });
          }
        });
      }
    });
  } else {
    request(`${proxyUrl}/api/product/type`, function(error, response, body) {
      if(!error && response.statusCode == 200) {
        res.render('input_products', { title: '新增产品信息', layout: 'second_layout', type: body });
      }
    });
  }
})

module.exports = router;
