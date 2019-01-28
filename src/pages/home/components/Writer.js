import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  WriterWrap,
  WriterItem
} from '../style.js';

class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <WriterWrap>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <div className="writer">
                  <img
                  className="writer-pic" 
                  src={item.get('imgUrl')} alt=""/>
                  <div className="writer-info">
                    <p className="writer-name">
                      <span style={{ float: 'left' }}>{item.get('wirterName')}</span>
                      <span className="focus">+关注</span>
                    </p>
                    <p className="writer-desc">{item.get('writerDesc')}</p>
                  </div>
                </div>
              </WriterItem>
            )
          })
        }
        
      </WriterWrap>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home','writerList']),
})

export default connect( mapState ,null)(Writer);