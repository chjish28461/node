const bunyan = require('bunyan');
const nodemailer = require('nodemailer');
const utils = require("./index");

const { logMes,loginEamilCodeMsg } = utils;
var transporter = nodemailer.createTransport({
  service: 'QQ',
  auth: {
      user: '1094324109@qq.com',//发送者邮箱
      pass: 'mpzggycqqhthbagc' //邮箱第三方登录授权码
  },
  logger: bunyan.createLogger({
      name: 'nodemailer'
  }),//打印日志
  debug: true
},{
  from: '1094324109@qq.com',//发送者邮箱
  headers: {
      'X-Laziness-level': 1000
  }
});

function message ({to,subject,text,watchHtml}) {
  return {
    // Comma separated lsit of recipients 收件人用逗号间隔
    to:to||'chjish28461@163.com',
    // Subject of the message 信息主题
    subject:subject||'欢迎注册【要鲜果】账号',
    // plaintext body
    text:text||'默认内容',
    // Apple Watch specific HTML body 苹果手表指定HTML格式
    watchHtml:watchHtml||null,
    // An array of attachments 附件
    attachments:[//附件
        // Binary Buffer attchment
        // {
        //     filename: 'image.png',
        //     content: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
        //        '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
        //        'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
        //     cid: '00001'  // should be as unique as possible 尽可能唯一
        // },
    ]

  }
};

const send = (mes,cb,err)=>{
  transporter.sendMail(mes, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        loginEamilCodeMsg("验证码发送失败!");
        loginEamilCodeMsg(error.message);
        return;
    }
    loginEamilCodeErrMsg('验证码发送成功!')
    // console.log('Server responded with "%s"', info.response);
    console.log("验证码发送成功!")
    transporter.close();
  });
}
module.exports = {
  send,
  message
};