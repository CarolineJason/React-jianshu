import { fromJS } from 'immutable'; // 从immutable 库中引入 formJS这个方法
import * as constants from './constants';

const initialState =fromJS({ // 将 reducer 中的初始数据 通过 fromJS 来封装
  title: '',
  content: '',
});

export default (state=initialState, action) => {
  console.log('action:', action);
  switch(action.type) {
    case constants.GET_DETAIL_INFO:
    return state.merge({
      title: action.title,
      content: action.content
    });
    default: 
      return state;
  }
}
