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

const SignInPage = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <LogoHeader />
      <SignIn />
    </>
  );
};

export default SignInPage;
