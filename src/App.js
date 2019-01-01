import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import store from './store/index';

import Header from './common/header/index';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleIconFont />
        <Header />
      </Provider>
    );
  }
}

export default App;
