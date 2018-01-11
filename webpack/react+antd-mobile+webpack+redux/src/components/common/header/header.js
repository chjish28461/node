import React from 'react';
import './header.scss';

export default class Header extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<header id="header">
				<nav>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</nav>
				<div className="search"></div>
			</header>
		)
	}
}
