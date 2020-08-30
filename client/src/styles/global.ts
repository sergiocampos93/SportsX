import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  background: #000;
  color: #fff;
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
}
`;

export const Header = styled.header`
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #0f171e;

  && h1 {
    text-align: left;
    margin-left: 20px;
    font-weight: bold;
  }
`;
