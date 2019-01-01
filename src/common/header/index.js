import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators } from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Additon,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SerachInfoItem,
  ItemList,
  NavSearch,
} from './style'

class Header extends Component {
  render () {
    const { 
      focused,
      mouseIn, 
      list,
      page,
      totalPage,
      handleInputFocus,
      handleInputBlur,
      handleMouseEnter,
      handleMouseLeave,
      handleChangeList 
    } = this.props;
    const getSearchArea = (show) => {
      const newList = list.toJS(); // 将 immutable类型的 lsit数组 转化为 普通类型的list 数组
      const pageList = [];
      if(newList.length) {
        for(let i = (page - 1) * 10; i< page * 10; i++) {
          if(newList[i]) { // 判断 如果为空的话 不让它push进去;
            pageList.push(
              <SerachInfoItem key={newList[i]}>{newList[i]}</SerachInfoItem>
            )
          }
        }
      }
      if (show || mouseIn) {
        return (
          <SearchInfo 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={ () => handleChangeList (page, totalPage)}>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <ItemList>
              { pageList }
              
            </ItemList>
          </SearchInfo>
        )
      } else {
        return null;
      }
    
    }

    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe642;
            </i>
            {
              getSearchArea(focused)
            }
          </SearchWrapper>
        </Nav>
        <Additon>
          <Button className="writting">
            <i className="iconfont">&#xe60d;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Additon>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    // focused: state.header.focused,
    // focused: state.header.get('focused'), // 如果用了 immutable 这个库。这里取值需要用get（） 方法
    // focused: state.get('header').get('focused'), // 或者下面的写法
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    mouseIn: state.getIn(['header','mouseIn']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getSearchData())
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangeList(page, totalPage) {
      // console.log(page, totalPage);
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
        return ;
      }
      dispatch(actionCreators.changePage(1));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
