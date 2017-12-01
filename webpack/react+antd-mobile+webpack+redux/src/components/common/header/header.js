import React from 'react';
import './header.scss';

export default class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<header id="header">
				我是头部
			</header>
		)
	}
}
