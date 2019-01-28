import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';   // 路由跳转
import { actionCreators } from '../store';


import { 
  ListItem,
  ListInfo,
  LoadMore
} from '../style.js';

class List extends Component {
  render() {
    const { list, getListMore, articlePage} = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
          return (
              <Link key={index} to={"/detail/" + item.get('id')}>
                <ListItem key={index}>
                  <img className="pic" src="//upload-images.jianshu.io/upload_images/15065279-07fdb9dd1082a94e?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                  <ListInfo>
                    <h3 className="title">
                    {item.get('title')}
                    </h3>
                    <p className="desc">
                    {item.get('content')}
                    </p>
                  </ListInfo>
                </ListItem>
              </Link> 
          )
        })
        }
        <LoadMore onClick={() => getListMore(articlePage)}>更多文字</LoadMore>
      </div>
      
    )
  }
}

const mapState = (state) => {
  return {
    // list: state.get('home').get('articleList'),
    list: state.getIn(['home','articleList']), // 用getIn() 方法 直接取值
    articlePage: state.getIn(['home', 'articlePage']),

  }
}

const mapDispatch = (dispatch) => {
  return {
    getListMore(page) {
      const action = actionCreators.getListMore(page);
      dispatch(action);
    }
  }
}

export default connect(mapState, mapDispatch)(List);