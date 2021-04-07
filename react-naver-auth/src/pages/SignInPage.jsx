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

const SignInPage = ({ history }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <LogoHeader history={history} />
      <SignIn history={history} />
    </>
  );
};

export default SignInPage;
