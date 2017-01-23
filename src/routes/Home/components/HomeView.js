import React from 'react';

import Col from './Col';
import './HomeView.scss';

import bannerImg from '../assets/stars.jpg';
import anaImg from '../assets/ana.png';
import pharaImg from '../assets/phara.gif';
import reinImg from '../assets/rein.jpg';

export const HomeView = () => (
	<div className='view'>
		<div className='banner'>
			<img
			alt='Have a good dream'
			className='stars'
			src={bannerImg}
			/>
			<div className='quote'>
				我是一张图片
			</div>
		</div>

		<div className='threeCol'>
			<Col
				header='我是第一栏'
				imgSrc={anaImg}
				paragraph='妈妈永远是对的，正义需要打个瞌睡，论美貌你是比不过我的'
				linkText='给你风油精'
				link='/home'
			/>
			<Col
				header='我是第二栏'
				imgSrc={pharaImg}
				paragraph='让我来保护无辜的人民'
				linkText='天降正义！'
				link='/home'
			/>
			<Col
				header='我是第三栏'
				imgSrc={reinImg}
				paragraph='出来，面对我！'
				linkText='吃我一锤'
				link='/home'
			/>
		</div>
	</div>
)

export default HomeView
