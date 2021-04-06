import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  padding: 105px 53px;
`;
const Logo = styled.div`
  background: url('./pc_sp_login_190522.png') no-repeat;
  background-position: 0 0;
  width: 231px;
  height: 44px;
`;

const LogoHeader = () => {
  return (
    <Header>
      <Logo />
    </Header>
  );
};

export default LogoHeader;
