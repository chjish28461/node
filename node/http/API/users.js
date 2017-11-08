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
			console.log(req.body.name);
			res.send(result);
		}
	}
}
APIUsers.handle=(req,res)=>{
	var pathname = req._parsedUrl.pathname, apiname = pathname.replace('/api',''),
        Url = APIUsers.api[apiname], method = req.method.toLowerCase();
    if (Url && Url.method.split("|").toString().indexOf(method)>-1) {
        Url.handle(req, res);
    } else {
        res.send({err:400});
    }
}
module.exports=APIUsers;