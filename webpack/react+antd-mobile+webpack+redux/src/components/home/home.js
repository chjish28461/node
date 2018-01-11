import React from 'react';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import { Button } from 'antd-mobile';
import {connect} from 'react-redux';
import './home.scss'


class Home extends React.Component{
	constructor(props){
		super(props);
		this.username='bbb';
		this.dbClickTime=new Date().getTime();
	}
	componentDidMount(){
		this.getSina();
	}
	getSina=()=>{
		let Url='/sina/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=80&sort=changepercent&asc=1&node=hs_a&symbol=&qq-pf-to=pcqq.group';
		fetch(Url).then((res)=>{
			res.json();
		}).then((res)=>{
			console.log(res);
		})
	}
	click=()=>{
//		let nowTime=new Date().getTime();
//		if(nowTime-this.dbClickTime<300){
			this.refs.audio.click();
//		}
//		this.dbClickTime=nowTime;
	}
	audioChange=()=>{
		let files=this.refs.audio.files;
		for(let i=0,len=files.length;i<len;i++){
			var file = files[i];  
		   	var url = URL.createObjectURL(file);  
		   	let a=document.createElement("audio");
		   	fetch("http://127.0.0.1/files://E:/虾米音乐/G.E.M.邓紫棋-泡沫.mp3",{
		   		mode: "cors",
		   	})
		   	.then((res)=>{
		   		console.log(res);
//		   		a.src="E:/虾米音乐/G.E.M.邓紫棋-泡沫.mp3";
//			   	a.controls="controls";
//			   	document.querySelector("body").appendChild(a);
		   	})
		   	.catch((err)=>{
		   		console.log(err);
		   	})
		}
	}
	render(){
//		view发出action的唯一途径是dispatch，这是其中一种方法
//		this.props.dispatch({type:"loaagin",username:this.username});
		return (
			<div>
				<content className="content">
					<label>选择文件<input type="file" ref="audio" multiple="multiple" onChange={this.audioChange}/></label>
					<div onMouseUp={this.click} className="btn">播放</div>
				</content>
			</div>
		)
	}
}
//view发出action的唯一途径是dispatch，这是第二种方法
function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch({type:"login",username:this.username})
  }
}
/**
 * connect输出两个方面的信息，mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射
 * @method mapDispatchToProps
 * @params { function } dipatch 组件发出action的唯一方法
 * @params { object } ownprops 容器组件的所有props
 * @return { object } 
 */
export default connect(null,mapDispatchToProps)(Home);