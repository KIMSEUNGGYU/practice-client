import React from 'react';
import './App.less';
import Login from '@components/Login';
import { css, Global } from '@emotion/react';
import theme from '@src/theme';

const globalStyle = css`
  body {
    background: ${theme.backgoundColor};
    height: 100vh;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Login />
    </>
  );
}

export default App;
