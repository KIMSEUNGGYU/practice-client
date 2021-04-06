import React from 'react';
import './App.less';
// import SignIn from '@components/Signin';
// import SignUp from '@components/SignUp';
import Main from '@components/Main';
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
      <Main />
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </>
  );
}

export default App;
