import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  TopicWrapper,
  TopicItem,
} from '../style.js';


class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.get('home').get('topicList'),
  }
}

export default connect(mapState,null)(Topic);