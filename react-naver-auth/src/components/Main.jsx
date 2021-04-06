import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@src/theme';
import { Button } from 'antd';

import MainHeader from '@components/MainHeader';

const globalStyle = css`
  body {
    background: white;
    height: 100vh;
  }
`;

const MainBlock = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
`;
const ContentsSection = styled.section`
  background: #c4c4c4;
  height: 100vh;
  flex: 1 1 75%;
  margin-right: 20px;
`;
const LoginSection = styled.section`
  flex: 1 1 25%;
  height: 100px;
  background: #f7f9fa;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
`;

const Text = styled.span`
  font-size: 12px;
  color: grey;
`;

const StyledButton = styled(Button)`
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 2px;
  margin-top: 10px;
  font-size: 16px;
`;

const Main = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <MainHeader />
      <MainBlock>
        <ContentsSection />
        <LoginSection>
          <Text>네이버를 더 안전하고 편리하게 이용하세요</Text>
          <StyledButton size="large" type="primary">
            로그인
          </StyledButton>
        </LoginSection>
      </MainBlock>
    </>
  );
};

export default Main;
