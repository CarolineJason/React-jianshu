import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const searchList = (data) => {
  return {
    type: constants.SEARCH_LIST,
    data: fromJS(data), // 这里传参数也要用formJS方法来处理，因为整体都用了immutable.js处理数据
    totalPage: Math.ceil(data.length / 10)
  }
}

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
})

export const getSearchData = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
         .then((res) => {
          //  console.log(res);
          const data= res.data;
          dispatch(searchList(data.data));

         })
         .catch((err) => {
           console.log(err);
         })
  }
}