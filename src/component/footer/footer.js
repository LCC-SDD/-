import React,{Component} from 'react';
import './footer.scss';
class Footer extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return  (
			<div className='footer'>
				 <div className='connent'>
				 	<ul>
				 		<li className='foot-li'>
				 			<a href=''>代金卡章程</a>
				 		</li>
				 		<li className='foot-li'>
				 			<a href=''>品牌故事</a>
				 		</li>
				 		<li className='foot-li'>
				 			<a href=''>购物指南</a>
				 		</li>
				 		<li className='foot-li'>
				 			<a href=''>网站地图</a>
				 		</li>
				 		<li className='foot-li'>
				 			<a href=''>配送方式</a>
				 		</li>
				 		<li className='foot-li'>
				 			<a href=''>服务条款</a>
				 		</li>
				 		<li className='foot-li'>
				 			<a href=''>联系我们</a>
				 		</li>
				 	</ul>
				 </div>
			</div>
			)
	}
}
export default Footer;