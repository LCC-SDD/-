 import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import './home.scss';
import img1 from '../../assets/img/pc-banner-bsl.jpg';
import img2 from '../../assets/img/pcfnjj-banner.jpg';
import img3 from '../../assets/img/pc-hjjr-banner.jpg';
import img4 from '../../assets/img/shenming.jpg';
import img5 from '../../assets/img/shuangyu.jpg';

class Home extends Component{
	constructor(props){
		super(props);
		this.state ={
			index:0,
			itm:setInterval(()=>{
				this.setState({
					index:this.state.index+1
				})
				if(this.state.index >= 5){
					this.setState({
						index:0
					})
				}
			},3000)
		}
	}
	render(){
		const connent = [
			{
				name1:'极地牛乳',
				zhong:'1.2磅',
				english:'Polar Leche',
				tian:'甜度:',
				xilie:'系列：经典系列 口味:浓情芝士',
				cailiao:'原材料：进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁',
				doller:'198',
				shop:'加入购物车',
				goumai:'立即购买'
			},
			{
				name1:'马卡龙の吻',
				zhong:'1.2磅',
				english:'Macaron	Kiss',
				tian:'甜度:',
				xilie:'系列：女神系列 口味:醇香奶油',
				cailiao:'原材料：手工马卡龙、安佳淡奶油、戚风蛋糕胚',
				doller:'218',
				shop:'加入购物车',
				goumai:'立即购买'
			},
			{
				name1:'白色红丝绒',
				zhong:'1.2磅',
				english:'White Red Velvet',
				tian:'甜度:',
				xilie:'系列：经典系列 口味:醇香奶油',
				cailiao:'原材料：进口安佳淡奶油、红丝绒预拌粉、甜菜根粉',
				doller:'198',
				shop:'加入购物车',
				goumai:'立即购买'
			},
			{
				name1:'双果小确幸',
				zhong:'1.2磅',
				english:'Avocado & Pitaya fruit Cake',
				tian:'甜度:',
				xilie:'系列：女神系列 口味:缤纷果味',
				cailiao:'原材料：新西兰安佳淡奶油，木糖醇，越南红心火龙果，墨西哥牛油果，日本小麦粉',
				doller:'288',
				shop:'加入购物车',
				goumai:'立即购买'
			},
		];
		const picter = [img1,img2,img3,img4,img5];
		const pic = {
			backgroundImage:'url('+img1+')'
		}
	
		return  (
			<div className='home'>
			   <div className='carousel'>
			   		{
			   			picter.map((el,index)=>{
			   				return (
			   					<div className='bo' style={{backgroundImage:'url('+el+')',opacity:this.state.index==index?1:0}} key={index}></div>
			   					)
			   			})
			   		}
			   </div>
			   <div className='top-big-menu'>
			   		<marquee className='marquee'>贝思客官方申明：
			   		我司近期发现有客户通过非正常渠道售卖的代金卡无法正常使用，
			   		目前我司正通过法律途径解决此问题。我司在此郑重申明，
			   		从未授权过任何渠道售卖我司代金卡，请客户通过正常渠道
			   		（如：官网、公司销售）进行购买消费。   
			   		公告日期：2017年10月09日</marquee>
			   		<div className='top-but'>
			   			<div className='left'>
			   				<div className='sale'></div>
			   				<div className='city'>配送至：北京
			   					<ul className='animenu__nav__child'>
			   						<li>
			   							<Link to='/tiao'>上海</Link>
			   							<Link to='/tiao'>北京</Link>
			   							<Link to='/tiao'>天津</Link>
			   							<Link to='/tiao'>重庆</Link>
			   						</li>
			   						<li>
				   						<Link to='/tiao'>苏州</Link>
				   						<Link to='/tiao'>无锡</Link>
				   						<Link to='/tiao'>南京</Link>
			   						</li>
			   						<li>
			   							<Link to='/tiao'>杭州</Link>
				   						<Link to='/tiao'>宁波</Link>
				   						<Link to='/tiao'>绍兴</Link>
			   						</li>
			   						<li>
			   							<Link to='/tiao'>成都</Link>
			   						</li>
			   					</ul>
			   				</div>
			   			</div>
			   			<div className='middle'></div>
			   			<div className='right'>
			   				<div className='stock'>
			   					股票代码: 835491
			   				</div>
			   				<div className='shopping'></div>
			   				<div className='personal'></div>
			   			</div>
			   			<div className='nav'>
			   				<ul className='nav-menu'>
			   					<div className='left-l'>
			   						<li>
			   							<span className='moren'>首页</span>
			   							<br />
			   							<span className='xiaoguo'>HOME</span>
			   						</li>
			   						<li>
			   							<span className='moren'>经典系列</span>
			   							<br />
			   							<span className='xiaoguo'>CLASSIC</span>
			   						</li>
			   						<li>
			   							<span className='moren'>女神系列</span>
			   							<br />
			   							<span className='xiaoguo'>GODDESS</span>
			   						</li>
			   						<li>
			   							<span className='moren'>糖蜜系列</span>
			   							<br />
			   							<span className='xiaoguo orange'>MOLASSE</span>
			   						</li>
			   					</div>
			   					<div className='right-r'>
			   						<li>
			   							<span className='winona'>伴手礼系列</span>
			   							<br />
			   							<span className='qiye jz'>SOUVENIR</span>
			   						</li>
			   						<li>
			   							<span className='vip winona'>会员专享</span>
			   							<br />
			   							<span className='vip jz'>VIP Exclusive</span>
			   						</li>
			   						<li>
			   							<span className='winona'>企业福利商城</span>
			   							<br />
			   							<span className='qiye jz'>WELFARE</span>
			   						</li>
			   					</div>
			   				</ul>
			   			</div>
			   		</div>
			   </div> 
			   <div className='promote'>
			   		<div className='am-img'></div>
			   		<div className='bm-img'></div>
			   		<div className='cm-img'></div>
			   		<div className='dm-img'></div>
			   </div>
			   <div className='promote-list'>
			   		{
			   			connent.map((el,index)=>{
			   				return (
			   						<div className='promote-pro pos1' key={index}>
							   			<div className='new'>新</div>
							   			<div className='img-res'>
							   				<img src={require('../../assets/img/'+index+'.jpg')} />
							   			</div>
							   			<div className='pro-r'>
							   				<div className='ji-top'>
							   					<span>{el.name1}</span>
							   					<span>{el.zhong}</span>
							   				</div>
							   				<div className='ename'>
							   					{el.english}
							   				</div>
							   				<div  className='swt'>
							   					<span>
							   						{el.tian}
							   					</span>
							   					<span>
							   						<img src={require('../../assets/img/1x.png')} />
							   					</span>
							   				</div>
							   				<div className='detail'>
							   					{el.xilie}
							   				</div>
							   				<div className='detail1'>
							   					{el.cailiao}
							   				</div>
							   				<div className='line'>
							   				</div>
							   				<div className='price'>
							   					<span>￥</span>
							   					<span>{el.doller}</span>
							   				</div>
							   				<div className='do'>
							   					<span>{el.shop}</span>
							   					<span>{el.goumai}</span>
							   				</div>
							   			</div>
							   		</div>
			   					)
			   			})
			   		}
			   </div>
			</div>
			)
	}
}
export default Home;