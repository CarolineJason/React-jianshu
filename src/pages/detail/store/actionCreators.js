import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const getDetail = (result) => {
  return {
    type: constants.GET_DETAIL_INFO,
    title: fromJS(result.title),
    content: fromJS(result.content),
  }
}

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+ id)
         .then((res) => {
           console.log(res);
           const result = res.data.data[0];
           dispatch(getDetail(result));
         })
         .catch((err) => {
           console.log(err);
         })
  }
}