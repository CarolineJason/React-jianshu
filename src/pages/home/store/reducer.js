import { fromJS } from 'immutable'; // 从immutable 库中引入 formJS这个方法
import * as constants from './constants';

const initialState =fromJS({ // 将 reducer 中的初始数据 通过 fromJS 来封装
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
});

export default (state=initialState, action) => {
  console.log('action:', action);
  switch(action.type) {
    case constants.GET_HOME_DATA: 
      return state.merge({
        topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList),
				writerList:  fromJS(action.writerList),
      })
    case constants.ADD_MORE_LIST: 
      // return state.set('articleList', state.get('articleList').concat(action.list));
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage,
      })
    default: 
      return state;
  }
}
