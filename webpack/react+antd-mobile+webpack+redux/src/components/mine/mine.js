import React from 'react';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import {connect} from 'react-redux';

class Mine extends React.Component{
	constructor(props){
		super(props);
		//取出redux里面的props实例
		console.log(this.props.reduxState);
	}
	render(){
		return (
			<div className="flexBox">
				<Header />
				<content>
					个人中心页面
				</content>
				<Footer />
			</div>
		)
	}
}
function mapStateToProps(state){
	//用reduxState接收redux里面储存的所有props
    return {reduxState:state}
}
/**
 * connect输出两个方面的信息，一个是mapStateToProps(a,b)函数,建立一个从(外部的)state对象到(UI组件的)props对象的映射关系，这里只传入第一个函数
 * @method mapStateToProps
 * @params { object } state redux的所有状态，也就是储存在redux的所有外部属性
 * @params { object } ownprops 容器组件的所有props
 * @return { object }
 */
export default connect(mapStateToProps)(Mine);
