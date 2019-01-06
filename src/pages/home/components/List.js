import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  ListItem,
  ListInfo
} from '../style.js';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
          return (
            <ListItem key={item.get('id')}>
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
          )
        })
        }
      </div>
      
    )
  }
}

const mapState = (state) => {
  return {
    // list: state.get('home').get('articleList'),
    list: state.getIn(['home','articleList']), // 用getIn() 方法 直接取值

  }
}

export default connect(mapState)(List);