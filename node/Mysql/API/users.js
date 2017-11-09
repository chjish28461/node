const dateUtils=require('../dateUtils/dateUtils');//转换时间对象为需要的格式工具
//node文件系统
const fs=require('fs');
let dateUtil=new dateUtils();

let APIUsers={};
APIUsers.data=[
    { id: 100, name: '张三丰', pass:'zsf', age: 20, ico:'/imgs/0.jpg', en_name:'ZhangSanFeng', money:100 },
    { id: 200, name: '许文强', pass:'xwq', age: 30, ico: '/imgs/1.jpg', en_name:'XueWenQiang', money:200 },
    { id: 300, name: '杨过', pass:'yg', age: 40, ico: '/imgs/2.jpg', en_name:'YangGuo', money:300 }
];
APIUsers.api={
	'/get_all_users':{
		method:"get|post",
		handle:function(req,res){
			let result=APIUsers.data;
			console.log(req.body.name);//req.body是接收到的前端参数
			let logMes=`${dateUtil.getDate()}已向前端发送数据:${req.originalUrl.replace('/api','')}!\r\n\r\n`;
			fs.appendFile(`${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
				if(err) throw err;
				else console.log('The logMes has been saved!')
			});
			res.send(result);
		}
	}
}
APIUsers.handle=(req,res)=>{
	var pathname = req._parsedUrl.pathname, apiname = pathname.replace('/api',''),
        Url = APIUsers.api[apiname], method = req.method.toLowerCase();
    if (Url && Url.method.split("|").toString().indexOf(method)>-1) {
    	let logMes=`${dateUtil.getDate()}正在处理前端请求:${apiname}!\r\n\r\n`;
		fs.appendFile(`${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
			if(err) throw err;
			else console.log('The logMes has been saved!')
		});
        Url.handle(req, res);
    } else {
        res.send({err:400});
        let logMes=`${dateUtil.getDate()}无法处理请求路径:${apiname}!\r\n\r\n`;
		fs.appendFile(`${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
			if(err) throw err;
			else console.log('The logMes has been saved!')
		});
    }
}
module.exports=APIUsers;