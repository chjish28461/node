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
	}
	render(){
		//view发出action的唯一途径是dispatch，这是其中一种方法
//		this.props.dispatch({type:"loaagin",username:this.username});
		return (
			<div className="flexBox">
				<Header title="首页" />
				<content className="content">
					我是首页
				</content>
				<Footer title="首页" />
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