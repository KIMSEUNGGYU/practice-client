import React from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'antd';

import LogoHeader from '@components/LogoHeader';

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
  <ContentsBlock>
    <LogoHeader />
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
  </ContentsBlock>
);
export default SignUp;
