//转换时间对象
class dateUtils{
	getDate(){
		let myDate = new Date();
		let y = myDate.getFullYear();
		let m = myDate.getMonth()+1;
		m = m>=10?m:"0"+m;
		let d = myDate.getDate();
		let hours = myDate.getHours();
		hours = hours>=10?hours:"0"+hours;
		let minites = myDate.getMinutes();
		let seconds = myDate.getSeconds();
		return y+"-"+m+"-"+d+"  "+hours+":"+minites+":"+seconds+"  ";
	}
	fileName(){
		let myDate = new Date();
		let y = myDate.getFullYear();
		let m = myDate.getMonth()+1;
		m = m>=10?m:"0"+m;
		let d = myDate.getDate();
		let hours = myDate.getHours();
		hours = hours>=10?hours:"0"+hours;
		let minites = myDate.getMinutes();
		let seconds = myDate.getSeconds();
		return y+"-"+m+"-"+d;
	}
}
module.exports=dateUtils;
