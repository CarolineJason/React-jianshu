import React, { Component } from 'react';
import { connect  } from 'react-redux';


import {
  RecommendWrapper, 
  RecommendItem,
  RecommendInfo,
} from '../style.js';

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <RecommendWrapper>
          {
            list.map((item) => {
              return (
                <RecommendItem className="recommend-item"  imgUrl={item.get('imgUrl')} key={item.get('id')} />
              )
            })
          }
        </RecommendWrapper>
        <RecommendInfo>
          <img 
            className="recommend-pic"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546880051467&di=4ad5bf9898f6cfec4137ccb54d1fcc22&imgtype=0&src=http%3A%2F%2Fy3.ifengimg.com%2Fnews_spider%2Fdci_2013%2F09%2Fb85234c4801f8b2d7771353867a7a0f8.jpg" alt=""/>
          <div className="download">
            <h3 className="title">下载简书手机APP ></h3>
            <p className="desc">随时随地发现和创作内容</p>
          </div>
        </RecommendInfo>
      </div>

    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendList']),
});

export default connect(mapState,null)(Recommend);