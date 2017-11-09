const path=require('path');
const express=require('express');
const APIUsers=require('./API/users');
const fs=require('fs');
const mysql=require('./SQL/mysql');//mysql工具类,包括链接池，更新mysql，关闭链接池方法
const dateUtils=require('./dateUtils/dateUtils');//转换时间对象为需要的格式工具
//默认情况下，前端请求的参数req.body是undefined，当您使用body-parser和multer等身体分析中间件时，它会被填充。
//以下示例显示如何使用身体分析中间件来填充req.body。
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

let dateUtil=new dateUtils();
/*
 * {params}
 * host:mysql连接地址
 * user:用户名
 * password:用户密码
 * database:表名
 * */
let mysqlUtil=new mysql({
    'host':'172.16.32.234',
    'user':'test',
    'password':'test',
    'database':'test'
});
//链接mysql
mysqlUtil.connectMysql();
//更新mysql，这里没有传入任何的sql语句，直接使用了默认的sql语句
mysqlUtil.updataMysql();

const app=express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

//指定静态资源目录
app.use(express.static(path.join(__dirname, 'src')));

//截取前端请求路径为/api的
app.use('/api',APIUsers.handle);

//监听服务端口
const server=app.listen(2001,function(){
	const port=server.address().port;
	let logMes=`${dateUtil.getDate()}服务已启动,应用访问地址为:localhost:${port}\r\n\r\n`;
	fs.appendFile(`${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
		if(err) throw err;
		else console.log('The logMes has been saved!')
	});
})

//module.exports = app;
