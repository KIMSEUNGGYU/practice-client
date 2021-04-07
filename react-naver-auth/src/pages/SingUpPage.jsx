import React from 'react';
import { css, Global } from '@emotion/react';

import LogoHeader from '@components/LogoHeader';
import SignUp from '@components/SignUp';
import theme from '@src/theme';

const globalStyle = css`
  body {
    background: ${theme.backgoundColor};
    height: 100vh;
  }
`;

const SignUpPage = ({ history }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <LogoHeader history={history} />
      <SignUp />
    </>
  );
};

export default SignUpPage;
