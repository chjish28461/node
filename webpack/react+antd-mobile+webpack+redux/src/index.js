import React from 'react';
import { Route ,browerHistory} from 'react-router';
//使用哈希路由
import { HashRouter as Router } from 'react-router-dom'
import {render} from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducer/reducer';

const store = createStore(reducers);

import './index.scss';
import './lib/CSS/reset.less';

import Home from './components/home/home';

const Routers=()=>{
	return (
		<Provider store={store}>
			<Router>
				<div className="routes">
					<Route exact path="/" component={Home} />
				</div>
			</Router>
		</Provider>
	) 
};

render(
	<Routers />,document.getElementById('app')
);
