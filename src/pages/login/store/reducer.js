import { fromJS } from 'immutable'; // 从immutable 库中引入 formJS这个方法
import * as constants from './constants';

const initialState =fromJS({ // 将 reducer 中的初始数据 通过 fromJS 来封装
  loginStatus: false,
});

export default (state=initialState, action) => {
  console.log('action:', action);
  switch(action.type) {
    case constants.CHANGE_LOGSTATUS: 
      return state.set('loginStatus', action.result)
    case constants.LOGOUT: 
      return state.set('loginStatus', action.value)
    default: 
      return state;
  }
}
