// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// import headerReducer from '../common/header/store/reducer';

import { reducer as headerReducer } from '../common/header/store'; // 简化引入的步骤
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers ({  // combineReducers() 方法里面传入一个对象
  header: headerReducer,
  home: homeReducer,
});

export default  reducer;