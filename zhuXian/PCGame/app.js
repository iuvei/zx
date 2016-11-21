var express = require('express');
var http=require('http');
var path = require('path');
var fs=require('fs');

var app = express();

app.use(express.static(path.join(__dirname, 'public/zhuXian')));

// /PCGame/data/white.html
app.get('/white',function (req,res) {
	fs.readFile(path.join(__dirname, '/PCGame/data/white.html'), (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
});

app.get('/jinian',function (req,res) {
	fs.readFile(path.join(__dirname, '/PCGame/data/jinian.html'), (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
});
// 中间件
// 
// 
// 
// 
// 
// app.use(function(req, res, next){
//     console.log("test Middleware1!");
//     next();
// });
// app.use(function(req, res, next){
//     console.log("test Middleware2!");
//     next();
// });
console.log("服务正在运行 115.28.14.114:3000");
app.listen(3000);
