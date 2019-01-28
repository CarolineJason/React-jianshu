import styled from 'styled-components';

export const LoginWrapper = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  background: #eee;
  z-index: 0;
`;

export const LoginBox = styled.div `
  width: 300px;
  height: 200px;
  background: #fff;
  margin: 120px auto;
  box-shadow: 0 0 10px rgba(0,0,0, .1);
  span {
    font-size: 14px;
    font-weight: bold;
    margin-left: 7px;
  }
`;

export const Input = styled.input `
  width: 220px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 6px;
  margin: 20px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #777;
`;

export const Button = styled.div `
  width: 80%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  background: #3194d0;
  border-radius: 20px;
  cursor: pointer;
`;