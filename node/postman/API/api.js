const config = require('../config/config');
let API={};
const List=[
    { 
        method:"get",
        Url: `http://${config.ip}/get_list`, 
        name: '获取所有接口列表',  
    },{ 
        method:"get",
        Url: `http://${config.ip}/get_all_users`, 
        name: '获取所有用户',  
    },
];
API.api={
	'/get_list':{
		method:"get|post",
		handle:function(req,res){
			let result=List;
			console.log(req.body.name);//req.body是接收到的前端参数
			res.send(result);
		}
	}
}
API.handle=(req,res)=>{
    try{
        var pathname = req._parsedUrl.pathname, apiname = pathname.replace('/api',''),
        Url = API.api[apiname], method = req.method.toLowerCase();
        if (Url && Url.method.split("|").toString().indexOf(method)>-1) {
            console.log(Url);
            Url.handle(req, res);
        } else {
            res.send({err:400});
        }
    }catch(err){
        res.send(err);
    }
}
module.exports=API;