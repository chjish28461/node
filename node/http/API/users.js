const utils = require("../utils");
const emailUtils = require("../utils/email");
const mysql=require('../SQL/mysql');//mysql工具类,包括链接池，更新mysql，关闭链接池方法
const moment=require('moment');//转换时间对象为需要的格式工具
const dateFormat = "YYYY-MM-DD HH:mm:ss";
const { logMes, loginEamilCodeErrMsg } = utils;
let mysqlUtil=new mysql({
    'host':'47.107.142.25',
    'user':'root',
    'password':'Chen856856',
    'database':'Test',
    useConnectionPooling: true
});
//连接数据库
mysqlUtil.connectMysql();
let APIUsers={};
APIUsers.api={
	'/register':{
		method:"post",
		handle:function(req,res){
            try{
                const { username, psd, email, code } = req.body;
                if(code===req.session.code&&email===req.session.email){
                    if(!username||!psd||!email||!code){
                        logMes("用户名:"+username+"未填写注册信息注册失败!");
                        res.send({success:0});//注册失败
                        return ;
                    }
                    return mysqlUtil.updataMysql(["select * from Users"],(data)=>{
                        for(let i=0,len=data.length;i<len;i++){
                            const { 用户名, 密码 } = data[i];
                            if(username===用户名){
                                logMes("用户名:"+username+"注册失败,用户已存在!");
                                res.send({success:0,msg:"用户名已存在!"});//注册失败
                                return ;
                            }
                        }
                        const sql = [
                            `insert into Users (ID,用户名,邮箱,密码,验证码,注册时间) values (1,"${username}","${email}","${psd}","${code}","${moment().format(dateFormat)}");`,
                        ];
                        mysqlUtil.updataMysql(sql,()=>{
                            res.send({success:1});//注册成功
                        },()=>{
                            res.send({success:0});//注册失败
                        });
                    },err=>{
                        logMes("用户名:"+username+":"+err);
                        logMes("用户名:"+username+"注册失败!");
                        res.send({success:0,msg:"未知错误!"});//注册失败
                    })
                }else{
                    logMes("用户名:"+username+"验证码错误!");
                    res.send({success:0,msg:"验证码错误!"});//注册失败
                }
            }catch(err){
                logMes(err);
                res.send({success:0,msg:"服务器未知错误,请重试或刷新页面!"});//注册失败
            }
		}
    }, 
    '/login':{
		method:"post",
		handle:function(req,res){
            const { username, psd } = req.body;
            // console.log(req.body);//req.body是接收到的前端参数
            const sql = ["select * from Users"];
            mysqlUtil.updataMysql(sql,(data)=>{
                logMes("用户:"+username+"试图登录!");
                let flag = false;
                for(let i=0,len=data.length;i<len;i++){
                    const { 用户名, 密码 } = data[i];
                    if(username===用户名&&psd===密码){
                        res.send({success:1});
                        flag = true;
                        break;
                    }
                }
                if(!flag){
                    logMes("用户:"+username+"登录失败，用户名或密码错误!");
                    res.send({success:0,msg:"用户名或密码错误!"});
                }
            },(err)=>{
                logMes(err);
                res.send({success:0});
            });
		}
	},   
    '/get_code':{
		method:"post",
		handle:function(req,res){
            const { email } = req.body;
            let code = "";
            for(let i=0,len=4;i<len;i++){
                code+=utils.random();
            }
            req.session.code = code;
            req.session.email = email;
            const mes = {
                to:email,
                text:code
            }
            emailUtils.send(emailUtils.message(mes));
            res.send({success:1})
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