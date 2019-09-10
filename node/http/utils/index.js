//node文件系统
const fs=require('fs');
// const dateUtils=require('../utils/dateUtils');//转换时间对象为需要的格式工具
const moment=require('moment');//转换时间对象为需要的格式工具
const dateFormat = "YYYY-MM-DD HH:mm:ss";
function logMes(mes,path,code="utf8",cb){
    path = path || `./log/${moment().format(dateFormat).replace(/\s.*/g,"")}.txt`;
    fs.appendFile(path, mes, code, function(err){
        if(err) logMes(err);
        // else console.log('The logMes has been saved!')
    });
}
function loginEamilCodeMsg(mes,path,code="utf8",cb){
    path = path || `./log/emailCode/${moment().format(dateFormat).replace(/\s.*/g,"")}.txt`;
    fs.appendFile(path, mes, code, function(err){
        if(err) logMes(err);
        // else console.log('The logMes has been saved!')
    });
}
function random(min,max){
    if((min||0)&&(max||0)){
        return Math.random()*(max-min+1)+min;
    }
    return Math.floor(Math.random()*10);
};
exports.random = random;
exports.logMes = logMes;
exports.loginEamilCodeMsg = loginEamilCodeMsg;