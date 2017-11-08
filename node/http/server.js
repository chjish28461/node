const path=require('path');
const express=require('express');
const request=require('request');
const APIUsers=require('./API/users');

const app=express();

//指定静态资源目录
app.use(express.static(path.join(__dirname, 'src')));
//截取前端请求路径为/api的
app.use('/api',APIUsers.handle);
//监听服务端口
const server=app.listen(2001,function(){
	const port=server.address().port;
	console.log('服务已启动,应用访问地址为:localhost:'+port);
})
