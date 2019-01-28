
import * as constant from './constants.js';
import axios from 'axios'
import { fromJS } from 'immutable'


const changeHomeData = (result) => {
  return {
    type: constant.GET_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList:  result.writerList,
  }
}

const addMoreList = (list, nextPage) => {
  return {
    type: constant.ADD_MORE_LIST,
    list: fromJS(list),
    nextPage
  }
}

export const getHomeInfo = (data) => {
  return (dispatch) => {  // 这里因为是 用了 redux-thunk 中间件。这里可以返回一个 函数
    axios.get('/api/home.json')
      .then(res => {
      // console.log('res.data.data:', res.data.data);
			const result = res.data.data;
			const action = changeHomeData(result); // 这里是为了简化 创建 action 的代码。
			dispatch(action); 
		})
		.catch(err => {
			console.log(err);
		})
  }
}

export const getListMore = (page) => {
  return (dispatch) => {
    axios.get('/api/moreList.json?page=' + page)
         .then((res) => {
           const list = res.data.data;
           const action = addMoreList(list, page + 1);
           dispatch(action);
         })
  }
}