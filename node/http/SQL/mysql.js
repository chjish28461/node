//这里面写sql操作
const mysql=require('mysql');
// const dateUtils=require('../utils/dateUtils');//转换时间对象为需要的格式工具
const moment=require('moment');//转换时间对象为需要的格式工具
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const logMes = require("../utils").logMes;
const dateFormat = "YYYY-MM-DD HH:mm:ss";
// let dateUtil=new dateUtils();
//链接mysql
// mysqlUtil.connectMysql();
//更新mysql，这里没有传入任何的sql语句，直接使用了默认的sql语句
// mysqlUtil.updataMysql();
//CREATE TABLE table_name(column_name column_type);

class mysqlUtil{
	constructor(config){
		this.config=config;
		this.connectMysql.bind(this);
		this.updataMysql.bind(this);
		this.closeMysql.bind(this);
		const sessionConfig = {
			secret: 'session',
			cookie:{
				maxAge: 1000*60*30
			}
		}
		this.options = {
		    'host':this.config.host,
		    'user':this.config.user,
		    'password':this.config.password,
			'database':this.config.database,
			useConnectionPooling: true,
		};
	}
	//链接mysql方法
	connectMysql(){
		const { options } = this;
		this.connection = mysql.createConnection(options);
		this.sessionStore = new MySQLStore(options)
		if(this.timer)
			clearTimeout(this.timer);
		this.connection.connect((err)=>{
			if(err) {
				console.log(' Error when connecting to db  (DBERR001):', err);
				this.timer=setTimeout(()=>this.connectMysql(), 2000);
			}
		});
		// let mes=`${moment().format(dateFormat)}链接mysql成功!\r\n\r\n`;
		// logMes( mes );
		this.connection.on("error",()=>this.connectMysql());
	}
	//更新mysql方法
	updataMysql(mysql,cb,errCb){
		const { connection } = this;
//		mysql是要执行的sql语句,这里是传入操作的sql语句，实际项目一般只会让传入几个固定参数
			connection.query(mysql[0],(err, res)=>{
				try{
					if(err){
						//sql执行失败打印信息
						errCb&&errCb(err)
						let mes=`${moment().format(dateFormat)}\r\n\r\n${err.message}\r\n\r\n`;
						logMes( mes );
					}else{
						//打印sql执行结果
						cb&&cb(res);
						let mes=`${moment().format(dateFormat)}\r\n数据已执行:\r\n${JSON.stringify(res)}\r\n\r\n`;
						logMes( mes );
					}					
				}catch(err){
					logMes(err);
				}
			});
	}
	//关闭连接池
	closeMysql(){
		const { connection } = this;
		connection.end();
		let mes=`${moment().format(dateFormat)}关闭连接池!\r\n\r\n`;
		logMes( mes );
	}
}
module.exports=mysqlUtil;
