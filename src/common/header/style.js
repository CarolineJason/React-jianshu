import styled from 'styled-components';
import logo from './../../statics/logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logo});
  background-size: contain;
`;


export const Nav = styled.div `
  height: 100%;
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div `
  line-height: 56px;
  font-size: 17px;
  padding: 0 20px;
  cursor: pointer;
  &.left {
    float: left;
    margin-right: 10px;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
    font-size: 18px;
  }
`

export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    top: 13px;
    right: 4px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 14px;
    &.iconfont {
      background: #999;
    }
  }
`;

export const SearchInfo = styled.div `
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  background: red;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div `
  height: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  /* float: left; */
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.a `
  height: 20px;
  float: right;
  margin-right: 20px;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  background-color: transparent;
  border-width: 0;
  padding: 0;
  display: block;
`;

export const SerachInfoItem = styled.a `
  margin-right: 8px;
  margin-bottom: 6px;
  display: inline-block;
  line-height: 14px;
  padding: 4px 10px;
  font-size: 12px;
  display: inline-block;
  cursor: pointer;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;


export const ItemList = styled.div `
  overflow: hidden;
  margin-left: 20px;

`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  width: 160px;
  line-height:38px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  outline: none;
  border: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #ccc;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-in-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`


export const Additon = styled.div `
  height: 56px;
  position: absolute;
  right: 0;
  top :0;
`

export const Button = styled.div `
  float: right;
  line-height: 38px;
  margin-top: 9px;
  border-radius: 19px;
  border:1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  cursor: pointer;
  &.writting {
    background-color: #ea6f5a;
    color: #fff;
  }
  &.reg {
    border: 1px solid rgba(236,97,73,.7);
    color: #ea6f5a;
  }
`


