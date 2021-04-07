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

const LabelText = styled.label`
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

const SignUp = () => (
  <Main>
    <LabelText for="id">아이디</LabelText>
    <StyledInput size="large" placeholder="아이디" id="id" />
    <LabelText for="password">비밀번호</LabelText>
    <StyledInput size="large" placeholder="비밀번호" id="password" type="password" />
    <LabelText for="re-password">비밀번호 재확인</LabelText>
    <StyledInput size="large" placeholder="비밀번호 재확인" id="re-password" type="password" />
    <LabelText for="name">이름</LabelText>
    <StyledInput size="large" placeholder="이름" id="name" />

    <Button size="large" type="primary" style={{ width: '100%' }}>
      가입하기
    </Button>
  </Main>
);
export default SignUp;
