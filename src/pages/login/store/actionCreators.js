import axios from 'axios';
import * as constants from './constants';



const login = (result) => ({
  type: constants.CHANGE_LOGSTATUS,
  result,
})


export const logout = () => {
  return {
    type: constants.LOGOUT,
    value: false,
  }
}

export const getLogin = (account,password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+account + '&password='+password)
        .then((res)=> {
          const result = res.data.data;
          dispatch(login(result))
        })
  }
}