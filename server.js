//==============================================================================
// File Name: node_server
// Author: zhubo
// email: 286154864@qq.com
// Create Time: 2018-01-05
//==============================================================================

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./util/helpers');
const routers = require('./routers/index');
const products = require('./routers/products');
const app = new express();

// 处理静态请求
app.use(express.static(path.join(__dirname, 'public')));

// 引用模板引擎
app.engine('.hbs', exphbs({
  layoutsDir: 'views',
  defaultLayout: 'layout',
  partialsDir: [app.get('views') + '/partials'],
  extname: '.hbs',
  helpers: helpers
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// 路由
app.use('/', routers);
app.use('/products', products);

app.listen("3000");
console.log('Listening on port 3000');
console.log('当前文件路径'+ __dirname);
// __dirname是node.js中的全局变量，表示当前文件的路径,本地为 C:\Users\wstd\Desktop\company
