const utils = require("../utils");
const emailUtils = require("../utils/email");
let APIUsers={};
APIUsers.data=[
    { id: 100, name: '张三丰', pass:'zsf', age: 20, ico:'/imgs/0.jpg', en_name:'ZhangSanFeng', money:100 },
    { id: 200, name: '许文强', pass:'xwq', age: 30, ico: '/imgs/1.jpg', en_name:'XueWenQiang', money:200 },
    { id: 300, name: '杨过', pass:'yg', age: 40, ico: '/imgs/2.jpg', en_name:'YangGuo', money:300 }
];
APIUsers.api={
	'/register':{
		method:"post",
		handle:function(req,res){
            const { username, psd, email, code } = req.body;
            console.log(req.body);//req.body是接收到的前端参数
            if(code===req.session.code){
                res.send({success:1});//注册成功
            }else{
                res.send({success:0});//注册失败
            }
		}
    },    
    '/get_code':{
		method:"post",
		handle:function(req,res){
            const { email } = req.body;
            console.log(req.body);//req.body是接收到的前端参数
            let code = "";
            for(let i=0,len=4;i<len;i++){
                code+=utils.random();
            }
            req.session.code = code;
            const mes = {
                to:email,
                text:code
            }
            emailUtils.send(emailUtils.message(mes));
			res.send({success:1});
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