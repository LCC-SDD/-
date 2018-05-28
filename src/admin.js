import React,{Component} from 'react';
import './index.css';
import Header from './component/header/header';
import Home from './component/body/home';
import Section from './component/section/section_2';
import Suggest from './component/suggest/suggest';
import Footer from './component/footer/footer';

class Admin extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		const adminStyle = {
			background:'#eee'
		}
		return (
				<div className='admin' style={ adminStyle }>
					<Header />
					<Home />
					<Section />
					<Suggest />
					<Footer />
				</div>
			)
	}
}
export default Admin;