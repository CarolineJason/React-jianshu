import React, { Component } from 'react';
import { Carousel } from 'antd';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import "antd/dist/antd.css";
import {actionCreators }  from './store';
import { BackTop } from 'antd';

import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
} from './style.js'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.getHomeData();
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<Carousel autoplay>
						<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4598/6eab2d9b6506c6302c4b5602405021a9e321408b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='' />
						<img src="//upload.jianshu.io/admin_banners/web_images/4599/375ea8a4f97b669a27a57bbcd8dbe6944a2e091d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
						<img src="//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
						<img src="//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
						<img src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
					</Carousel>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				<BackTop />
			</HomeWrapper>
		)
	}
}

const mapDispatch = (dispathch) => ({
	getHomeData () {
		// 组件中的 业务逻辑都放在 actionCreators 中去处理。
		const action = actionCreators.getHomeInfo();
		dispathch(action); // 这里派发的 action 是去 请求数据
	}
})

export default connect(null, mapDispatch)(Home);