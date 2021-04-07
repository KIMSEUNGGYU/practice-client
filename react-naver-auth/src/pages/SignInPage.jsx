import React from 'react';
import LogoHeader from '@components/LogoHeader';
import SignIn from '@components/SignIn';

import { css, Global } from '@emotion/react';
import theme from '@src/theme';

const globalStyle = css`
  body {
    background: ${theme.backgoundColor};
    height: 100vh;
  }
`;

const SignInPage = ({ history, users, onMakeCookie }) => {
  // console.log(onSetCookie);
  return (
    <>
      <Global styles={globalStyle} />
      <LogoHeader history={history} />
      <SignIn history={history} users={users} onMakeCookie={onMakeCookie} />
    </>
  );
};

export default SignInPage;
