import React,{ Component } from 'react';
class Tiao extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		const jumpStyle = {
			background:'red',
			fontSize:'50px',
			textAlign:'center',
			lineHight:'200px',
			fontWeight:'bold'
		}
		return (
			<div className='jump' style={jumpStyle}>
				跳转到这
			</div>
			)
	}
}
export default Tiao;