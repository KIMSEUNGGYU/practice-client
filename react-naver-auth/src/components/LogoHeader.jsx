import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  margin-top: 105px;
  display: flex;
  justify-content: center;
`;
const Logo = styled.div`
  background: url('./pc_sp_login_190522.png') no-repeat;
  background-position: 0 0;
  width: 231px;
  height: 44px;
  cursor: pointer;
`;

const LogoHeader = ({ history }) => {
  const goMain = () => {
    history.push('/');
  };
  return (
    <Header>
      <Logo onClick={goMain} />
    </Header>
  );
};

export default LogoHeader;
