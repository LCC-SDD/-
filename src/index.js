import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Route,Switch,Redirect,NavLink } from 'react-router-dom';
import Admin from './admin';
import Tiao from './component/tiao/tiao';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		{/*<Admin />*/}
		<div>
			<Route exact path='/' component={ Admin }/>
			<Route path='/tiao' component={ Tiao }/>
		</div>
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();
