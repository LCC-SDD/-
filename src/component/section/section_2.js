import React, { Component } from 'react';
import './section_2.scss';
import img1 from '../../assets/img/tab-jd.jpg';
import img2 from '../../assets/img/tab-jz.jpg';
import img3 from '../../assets/img/tab-ns.jpg';

import t1img1 from '../../assets/img/金装云顶曲奇.jpg';
import t1img2 from '../../assets/img/吉致牛轧糖(铁盒).jpg';
import t1img3 from '../../assets/img/吉致泡芙(原味).jpg';
import t1img4 from '../../assets/img/新椰香瑞士卷.jpg';
import t1img5 from '../../assets/img/新杯子蛋糕.jpg';
import t1img6 from '../../assets/img/新蛋黄酥.jpg';

import t2img1 from '../../assets/img/狮子王.jpg';
import t2img2 from '../../assets/img/燃情芝士.jpg';
import t2img3 from '../../assets/img/落莓恋曲.jpg';
import t2img4 from '../../assets/img/椰香芒芒.jpg';
import t2img5 from '../../assets/img/慕尼黑.jpg';
import t2img6 from '../../assets/img/莱茵河妖精.jpg';

import t3img1 from '../../assets/img/马卡龙(2).jpg';
import t3img2 from '../../assets/img/新露水茶盐.jpg';
import t3img3 from '../../assets/img/新星光游乐园_1.jpg';
import t3img4 from '../../assets/img/威尼斯恋人.jpg';
import t3img5 from '../../assets/img/酸奶芝士.jpg';
import t3img6 from '../../assets/img/歌剧魅影.jpg';


import swt2 from '../../assets/img/2x.png';
import swt3 from '../../assets/img/3x.png';
import swt4 from '../../assets/img/4x.png';

const zongdata = [{
	image: img1,
	nei: [{
		name: "金装云顶曲奇",
		id: "id_11",
		ename: "Golden Butter Cookies",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "128",
		image: t1img1
	}, {
		name: "吉致牛轧糖(巴旦木味)",
		id: "id_12",
		ename: "Extreme Nougat(Almonds)",
		kg: "16粒",
		swt: "4",
		ycl: "原料，温度，时间，每一个环节，我们都用心把握，加入了古法工艺和现代...",
		price: "68",
		image: t1img2
	}, {
		name: "吉致泡芙",
		id: "id_13",
		ename: "Extreme Puff",
		kg: "0.8磅",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "88",
		image: t1img3
	}, {
		name: "清椰瑞士卷",
		id: "id_14",
		ename: "Coconut Swiss Roll",
		kg: "80g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "38",
		image: t1img4
	}, {
		name: "杯子蛋糕",
		id: "id_15",
		ename: "Cupcake",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "85",
		image: t1img5
	}, {
		name: "手工蛋黄酥",
		id: "id_16",
		ename: "Golden Butter Cookies",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "288",
		image: t1img6
	}, ]
}, {
	image: img2,
	nei: [{
		name: "新狮子王",
		id: "id_11",
		ename: "Golden Butter Cookies",
		kg: "1.2磅",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "198",
		image: t2img1
	}, {
		name: "冻烤燃情芝士",
		id: "id_12",
		ename: "Extreme Nougat(Almonds)",
		kg: "1.2磅",
		swt: "3",
		ycl: "原料，温度，时间，每一个环节，我们都用心把握，加入了古法工艺和现代...",
		price: "198",
		image: t2img2
	}, {
		name: "落莓恋曲",
		id: "id_13",
		ename: "Extreme Puff",
		kg: "1.2磅",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "198",
		image: t2img3
	}, {
		name: "椰香芒芒",
		id: "id_14",
		ename: "Coconut Swiss Roll",
		kg: "80g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "198",
		image: t2img4
	}, {
		name: "杯子蛋糕",
		id: "id_15",
		ename: "Cupcake",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "198",
		image: t2img5
	}, {
		name: "手工蛋黄酥",
		id: "id_16",
		ename: "Golden Butter Cookies",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "198",
		image: t2img6
	}]
}, {
	image: img3,
	nei: [{
		name: "金装云顶曲奇",
		id: "id_11",
		ename: "Golden Butter Cookies",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "128",
		image: t3img1
	}, {
		name: "吉致牛轧糖(巴旦木味)",
		id: "id_12",
		ename: "Extreme Nougat(Almonds)",
		kg: "16粒",
		swt: "4",
		ycl: "原料，温度，时间，每一个环节，我们都用心把握，加入了古法工艺和现代...",
		price: "68",
		image: t3img2
	}, {
		name: "吉致泡芙",
		id: "id_13",
		ename: "Extreme Puff",
		kg: "0.8磅",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "88",
		image: t3img3
	}, {
		name: "清椰瑞士卷",
		id: "id_14",
		ename: "Coconut Swiss Roll",
		kg: "80g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "38",
		image: t3img4
	}, {
		name: "杯子蛋糕",
		id: "id_15",
		ename: "Cupcake",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "85",
		image: t3img5
	}, {
		name: "手工蛋黄酥",
		id: "id_16",
		ename: "Golden Butter Cookies",
		kg: "300g",
		swt: "3",
		ycl: "纷扰的都市，直线的生活，闲适下来，来一颗曲奇，香酥可口，能量满满。...",
		price: "288",
		image: t3img6
	}]
}]

const tab = ['伴手礼系列', '经典系列', '女神系列']
const arr = ['', '', swt2, swt3, swt4]

class section_2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: zongdata[0]
		}
	}
	btn(res) {
		var arr = [90, 460, 830]
		let btn = document.querySelectorAll('.tab');
		let scroll = document.querySelector('.scroll')
		for (let i = 0; i < btn.length; i++) {
			btn[i].style.color = '#666'
		}
		btn[res].style.color = '#60d2d6';
		scroll.style.left = arr[res] + 'px';
		this.setState({
			date: zongdata[res]
		})
	}
	render() {
		return (
			<div className='onetxt2_box'>
   		    <div className='box_tab'>
	   		    {
	   		    	tab.map((item,index)=>{
	   					return (
	   						<div className='tab' key={index} onClick={()=>{this.btn(index)}}> {item} </div>
	   					)
	   				})
	   		    }
	   		    <div className='scroll'> </div>
      		</div>
      		<div className='tab_txt'>
      			<img src={this.state.date.image} alt="" />
   		    	<ul className='ul1'>
   		    		{
   		    			this.state.date.nei.map((item,index)=>{
   		    				return (
   		    					<li key={index} >
			   		    			<a href="">
			   		    				<img src={item.image} alt="" />
			   		    			</a>
			   		    			<div className='middle_right'>
			   							<div className='right_name'>
			   								<span className='name1'> {item.name }</span>
			   							</div>
			   							<div className='right_ename'>
			   								{item.ename}
			   							</div>
			   							<div className='right_swt'>
											<p>甜度 : </p>
			   								<img src={arr[item.swt]} alt="" />
			   								<span className='name2'> {item.kg}</span>
			   							</div>
			   							<div className='right_detail'>
			   								{item.ycl}
			   							</div>
			   							<div className='right_price'> 
			   								<span className='price1'>¥</span>
			   								<span className='price2'>{item.price}</span>
			   							</div>
			   							<div className='right_btn'>
			   								<div className='btn_add'>加入购物车</div>
			   								<div className='btn_reomve'>立即购买</div>
			   							</div>
			   						</div>
			   		    		</li>
   		    				)
   		    			})
   		    		}
   		    	</ul>
   		    </div>
      </div>
		);
	}
}
export default section_2;