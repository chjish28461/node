const path=require('path');
const express=require('express');

const app=express();
//指定静态资源目录
app.use(express.static(path.join(__dirname, 'src')));
//监听端口，启动服务
const server=app.listen(2001,()=>{
	const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://localhost:", host, port);
})
