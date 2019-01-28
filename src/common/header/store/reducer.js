import * as constants from './constants';
import { fromJS } from 'immutable'; // 从immutable 库中引入 formJS这个方法


const initialState =fromJS({ // 将 reducer 中的初始数据 通过 fromJS 来封装
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state=initialState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS: 
    // immutable 对象的set 方法，会结合之前的immutable 对象的值和设置的值，返回一个全新的对象。
      return state.set('focused', true);  // 用了 immutable.js return 需要用set（） 方法
    case constants.SEARCH_BLUR: 
      return state.set('focused', false);
    case constants.SEARCH_LIST: 
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({ // merge 可以一次改变多个值
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER :
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE :
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE :
      return state.set('page', action.page);
    default: 
    return state;
  }
}
