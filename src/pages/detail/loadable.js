import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return (
      <div>正在加载中··········</div>
    );
  },
});

export default () => <LoadableComponent/>;  // 直接暴露出去无状态组件


// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }