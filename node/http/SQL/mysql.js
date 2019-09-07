//这里面写sql操作
const mysql=require('mysql');
// const dateUtils=require('../utils/dateUtils');//转换时间对象为需要的格式工具
const moment=require('moment');//转换时间对象为需要的格式工具
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
		this.connection = mysql.createConnection({
		    'host':this.config.host,
		    'user':this.config.user,
		    'password':this.config.password,
			'database':this.config.database,
			useConnectionPooling: true,
		});
	}
	//链接mysql方法
	connectMysql(){
		const { connection } = this;
		clearTimeout(this.timer);
		connection.connect((err)=>{
			if(err) {
				console.log(' Error when connecting to db  (DBERR001):', err);
				this.timer=setTimeout(()=>this.connectMysql(), 2000);
			}
		});
		// let mes=`${moment().format(dateFormat)}链接mysql成功!\r\n\r\n`;
		// logMes( mes );
		connection.on("error",()=>this.connectMysql());
	}
	//更新mysql方法
	updataMysql(mysql,cb,errCb){
		const { connection } = this;
		// this.connectMysql();
//		mysql是要执行的sql语句,这里是传入操作的sql语句，实际项目一般只会让传入几个固定参数
		// let sql=mysql||[
			//删除表
			// 'drop table student',
			// //创建表
			// 'CREATE TABLE student (自动编号 INT,学号 VARCHAR (10),姓名 VARCHAR (10),课程编号 VARCHAR (10),课程名称 VARCHAR (10),分数 INT)',
			// //往表中插入数据
			// // 'CREATE TABLE student (自动编号 INT,学号 VARCHAR (10),姓名 VARCHAR (10),课程编号 VARCHAR (10),课程名称 VARCHAR (10),分数 INT)',
			// //往表中插入数据
			// 'insert into student (自动编号,学号,姓名,课程编号,课程名称,分数) values (1,"2005001","张三","0001","数学",69);',
		// ];
		// for(let i=0,len=sql.length;i<len;i++){
		// 	//循环执行传入的sql语句
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
		// }
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
