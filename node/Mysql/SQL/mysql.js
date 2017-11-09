//这里面写sql操作
const mysql=require('mysql');
//node文件系统
const fs=require('fs');
const dateUtils=require('../dateUtils/dateUtils');//转换时间对象为需要的格式工具
let dateUtil=new dateUtils();

class mysqlUtil{
	constructor(config){
		this.config=config;
		this.connectMysql.bind(this);
		this.updataMysql.bind(this);
		this.closeMysql.bind(this);
	}
	//链接mysql方法
	connectMysql(){
		this.connection = mysql.createConnection({
		    'host':this.config.host,
		    'user':this.config.user,
		    'password':this.config.password,
		    'database':this.config.database
		});
		this.connection.connect();
		let logMes=`${dateUtil.getDate()}链接mysql成功!\r\n\r\n`;
		fs.appendFile(`./log/${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
			if(err) throw err;
			else console.log('The logMes has been saved!')
		});
	}
	//更新mysql方法
	updataMysql(mysql){
//		mysql是要执行的sql语句,这里是传入操作的sql语句，实际项目一般只会让传入几个固定参数
		let sql=mysql||[
			//删除表
			'drop table student',
			//创建表
			'CREATE TABLE student (自动编号 INT,学号 VARCHAR (10),姓名 VARCHAR (10),课程编号 VARCHAR (10),课程名称 VARCHAR (10),分数 INT)',
			//往表中插入数据
			'insert into student (自动编号,学号,姓名,课程编号,课程名称,分数) values (1,"2005001","张三","0001","数学",69)',
		];
		for(let i=0,len=sql.length;i<len;i++){
			//循环执行传入的sql语句
			this.connection.query(sql[i],(err, res)=>{
			    if(err){
			    	//sql执行失败打印信息
			        let logMes=`${dateUtil.getDate()}\r\n[SELECT ERROR]\r\n${err.message}\r\n\r\n`;
					fs.appendFile(`./log/${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
						if(err) throw err;
						else console.log('The logMes has been saved!')
					});
			        return;
			    }else{
			    	//打印sql执行结果
			    	let logMes=`${dateUtil.getDate()}\r\n数据已插入:\r\n${JSON.stringify(res)}\r\n\r\n`;
					fs.appendFile(`./log/${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
						if(err) throw err;
						else console.log('The logMes has been saved!')
					});
			    }
			    if(i==(len-1)){
					this.closeMysql();
				}
			});
		}
	}
	//关闭连接池
	closeMysql(){
		this.connection.end();
		let logMes=`${dateUtil.getDate()}关闭连接池!\r\n\r\n`;
		fs.appendFile(`./log/${dateUtil.fileName()}.txt`, logMes, 'utf8', function(err){
			if(err) throw err;
			else console.log('The logMes has been saved!')
		});
	}
}
module.exports=mysqlUtil;
