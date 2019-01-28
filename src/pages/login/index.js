import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';

class Login extends Component {
	render() {
    const { login, loginStatus } = this.props;
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <span>账号:</span><Input placeholder="请输入账号" ref={(account) => this.account= account}/>
            <span>密码:</span><Input placeholder="请输入密码" type="password" ref={(password) => this.password= password} />
            <Button onClick={() =>login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return (
        <Redirect to="/" />
      )
    }
		
	}
}
const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'loginStatus']),
})

const mapDispatch = (dispatch) => ({
	login(account, password) {
    console.log(account.value, password.value);
    dispatch(actionCreators.getLogin(account.value, password.value))
  }
})

export default connect(mapState, mapDispatch)(Login);