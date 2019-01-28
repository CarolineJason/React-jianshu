import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import store from './store/index';

import Home from './pages/home';
// import Detail from './pages/detail'; 
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';


import Header from './common/header/index';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div> */}
          <GlobalStyle />
          <GlobalStyleIconFont />
          <BrowserRouter>
        		<div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
              {/*  动态路由  */}
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        {/* </div> */}
      </Provider>
    );
  }
}

export default App;
