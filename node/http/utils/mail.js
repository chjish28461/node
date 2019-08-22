var bunyan = require('bunyan');
var nodemailer = require('nodemailer');

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

var message = {
  // Comma separated lsit of recipients 收件人用逗号间隔
  to: 'chjish28461@163.com',

  // Subject of the message 信息主题
  subject:  'Nodemailer is unicode friendly',

  // plaintext body
  text: 'Hello to myself~',

  // Html body
  // html: '<p><b>Hello</b> to myself <img src= "cid:00001"/></p>' + 
  //     '<p>Here\'s a nyan car for you as embedded attachment:<br/><img src="cid:00002"/></p>',

  // Apple Watch specific HTML body 苹果手表指定HTML格式
  watchHtml: '<b>Hello</b> to myself',

  // An array of attachments 附件
  attachments: [
      // String attachment
      {
          filename: 'notes.txt',
          content: 'Some notes about this e-mail',
          contentType: 'text/plain' // optional,would be detected from the filename 可选的，会检测文件名
      },
      // Binary Buffer attchment
      {
          filename: 'image.png',
          content: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
             '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
             'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
          cid: '00001'  // should be as unique as possible 尽可能唯一
      },
  ]

};

const send = (mes)=>{
  console.log('Send Mail');
  transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
    transporter.close();
  });
}
module.exports = send;