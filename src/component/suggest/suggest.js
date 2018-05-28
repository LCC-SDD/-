import React,{Component} from 'react';
import './suggest.scss';
import 'whatwg-fetch';
import img1 from '../../assets/img/黑白配.jpg';
import img2 from '../../assets/img/浓情花意.jpg';
import img3 from '../../assets/img/布朗尼精灵.jpg';
import img4 from '../../assets/img/金色榴莲.jpg';
import img5 from '../../assets/img/papi.jpg';

class Suggest extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	lists:[]
	  };
	}
	componentWillMount(){
		fetch('./data.json')
		.then(res=>res.json())
		.then(data=>{this.setState({lists:data.list})})
		.catch(error=>{console.log("error")})
	}
	render(){
		const lists= this.state.lists;
		return (
			<div className='suggest'>
				<div className='suggest-left'>
					<ul>
					{
								lists.map((el,index)=>{
									return(
										<li key={index}>
											<div className='bao'>
											<div className='img'>
												<img src={ el.image } />
											</div>
											<div className='info'>
												<div className='name'>
													{el.name}
												</div>
												<div className='english'>
													{el.english}
												</div>
												<div className='tian'>
													{el.tian}
													<img src={require('../../assets/img/2x.png')} />
												</div>
												<div className='doller'>
													<span>￥</span>
													<span>{el.doller}</span>
												</div>
											</div>
										</div>
										</li>
										)
								})
							}
						<div className='sive'>
							<img src={require('../../assets/img/jzb.jpg')} />
						</div>
					</ul>
				</div>
				<div className='suggest-right'>
					<div className='video'>
						<video width='360' height='326' controls='controls' 
						poster='https://res.bestcake.com/images-2/index-new/vedio.jpg' muted='false'>
							<source src="https://res.bestcake.com/images/video/唐嫣发布会剪辑成品new.mov" type='video/mp4' />
						</video>
					</div>
					<div className='xiecheng'>	
					</div>
					<div className='jiecai'></div>
				</div>
			</div>
			)
	}
}
export default Suggest;