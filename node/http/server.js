const path=require('path');
const express=require('express');
const APIUsers=require('./API/users');
//默认情况下，前端请求的参数req.body是undefined，当您使用body-parser和multer等身体分析中间件时，它会被填充。
//以下示例显示如何使用身体分析中间件来填充req.body。
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

const app=express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
//指定静态资源目录
app.use(express.static(path.join(__dirname, 'src')));
//截取前端请求路径为/api的
app.use('/api',APIUsers.handle);
//监听服务端口
const server=app.listen(3000,function(){
	const port=server.address().port;
	console.log('服务已启动,应用访问地址为:localhost:'+port);
})

module.exports = app;
