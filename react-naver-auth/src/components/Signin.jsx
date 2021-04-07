import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';

const ContentsBlock = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  height: 500px;
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
`;

const Login = () => {
  return (
    <ContentsBlock>
      <Main>
        <InputStyle size="large" placeholder="아이디" />
        <InputStyle size="large" placeholder="비밀번호" type="password" />
        <Button size="large" type="primary" style={{ width: '100%' }}>
          로그인
        </Button>
      </Main>
    </ContentsBlock>
  );
};

export default Login;
