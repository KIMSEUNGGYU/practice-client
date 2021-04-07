import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';

const Main = styled.main`
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  width: 470px;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
`;

const SingupButton = styled.button`
  align-self: flex-end;
  margin-top: 12px;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  color: #8e8e8e;
`;

const Login = ({ history }) => {
  const goSignUp = () => history.push('signup');
  return (
    <Main>
      <InputStyle size="large" placeholder="아이디" />
      <InputStyle size="large" placeholder="비밀번호" type="password" />
      <Button size="large" type="primary" style={{ width: '100%' }}>
        로그인
      </Button>
      <SingupButton onClick={goSignUp}>회원가입</SingupButton>
    </Main>
  );
};

export default Login;
