import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';

import LogoHeader from '@src/components/LogoHeader';

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
      <LogoHeader />
      <Main>
        <InputStyle size="large" placeholder="아이디" />
        <InputStyle size="large" placeholder="비밀번호" type="password" />
        <Button size="large" type="primary" style={{ width: '100%' }}>
          로그인
        </Button>
      </Main>
    </ContentsBlock>

    /* <main style={main}>Login</main>
      <div class="input-box">
        <input id="id" type="text" class="input" placeholder="아이디" />
      </div>
      <div class="input-box">
        <input id="password" type="password" class="input" placeholder="비밀번호" />
      </div>
      <button class="login-btn">로그인</button>
      <a class="register" href="./signup.html">
        회원가입
      </a> */
    //
  );
};

export default Login;
