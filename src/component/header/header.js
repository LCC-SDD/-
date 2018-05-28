import React,{Component} from 'react';
import './header.scss';
class Header extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	bigLogo(){
		let bl=document.querySelector('.big-logo');
		let bt=document.querySelector('.big-btn');
		let sl=document.querySelector('.small-logo');
		sl.style.display='none';
		bt.style.display='none';
		bl.style.display='block';
	}
	smallLogo(){
		let bl=document.querySelector('.big-logo');
		let bt=document.querySelector('.big-btn');
		let sl=document.querySelector('.small-logo');
		sl.style.display='block';
		bt.style.display='block';
		bl.style.display='none';
	}
	render(){
		return  (
			<div className='top'>
				<img className='big-logo' />
				<img className='small-logo' />
				<img className='big-btn' onClick={ this.bigLogo } />
				<img className='small-btn' onClick={ this.smallLogo } />
			</div>
			)
	}
}
export default Header;