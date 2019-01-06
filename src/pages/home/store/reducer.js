import { fromJS } from 'immutable'; // 从immutable 库中引入 formJS这个方法


const initialState =fromJS({ // 将 reducer 中的初始数据 通过 fromJS 来封装
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/2836182/3ef15671cb48?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/2836182/3ef15671cb48?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp',
    }
  ],
  articleList: [
    {
      id: 1,
      title: '【南怀瑾老师】今天很坦然地把咒语的秘密告诉大家！',
      content: '葱花饼有好多种做法，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功，下面是详细制作步骤，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功喜欢的朋友赶快一起跟Bella学学吧~',
    },
    {
      id: 2,
      title: '【南怀瑾老师】今天很坦然地把咒语的秘密告诉大家！',
      content: '葱花饼有好多种做法，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功，下面是详细制作步骤，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功喜欢的朋友赶快一起跟Bella学学吧~',
    },
    {
      id: 3,
      title: '【南怀瑾老师】今天很坦然地把咒语的秘密告诉大家！',
      content: '葱花饼有好多种做法，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功，下面是详细制作步骤，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功喜欢的朋友赶快一起跟Bella学学吧~',
    },
    {
      id: 4,
      title: '【南怀瑾老师】今天很坦然地把咒语的秘密告诉大家！',
      content: '葱花饼有好多种做法，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功，下面是详细制作步骤，好多朋友做的又硬还不起层，其实掌握下面2个秘诀，一定会成功喜欢的朋友赶快一起跟Bella学学吧~',
    },
  ]
});

export default (state=initialState, action) => {
  switch(action.type) {
    
    default: 
    return state;
  }
}
