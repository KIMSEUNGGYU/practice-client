import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Input } from 'antd';
import theme from '@src/theme';

const { Search } = Input;

const Header = styled.header`
  border-bottom: 1px solid ${theme.borderColor};
`;

const LogoAndSearch = styled.div`
  height: 160px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  background: url('./main-image.png') no-repeat;
  background-size: 200% auto;
  width: 222px;
  height: 44px;
  background-position: 0px -168px;
  margin-right: 1.5em;
  min-width: 222px;
  max-width: 222px;
`;

const SearchStyled = styled(Search)`
  min-width: 400px;
  max-width: 550px;
  font-weight: bold;
  & input {
    font-weight: bold;
  }
`;

const MenuNav = styled.nav`
  border-top: 1px solid ${theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 50px;
  ul {
    padding-left: 0;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ListNav = styled.li`
  list-style: none;
  margin-right: 15px;
  font-size: 16px;
  cursor: pointer;
  ${(props) =>
    props.fix &&
    css`
      color: ${theme['main-color'][5]};
    `};
`;

const MainHeader = () => {
  return (
    <Header>
      <LogoAndSearch>
        <Logo />
        <SearchStyled size="large" placeholder="" enterButton allowClear />
      </LogoAndSearch>
      <MenuNav>
        <ul>
          <ListNav fix>메일</ListNav>
          <ListNav fix>카페</ListNav>
          <ListNav fix>블로그</ListNav>
          <ListNav fix>지식iN</ListNav>
          <ListNav fix>쇼핑</ListNav>
          <ListNav fix>Pay</ListNav>
          <ListNav fix>TV</ListNav>
          <ListNav>사전</ListNav>
          <ListNav>뉴스</ListNav>
          <ListNav>증권</ListNav>
          <ListNav>부동산</ListNav>
          <ListNav>지도</ListNav>
          <ListNav>영화</ListNav>
          <ListNav>VIBE</ListNav>
          <ListNav>책</ListNav>
          <ListNav>웹툰</ListNav>
        </ul>
      </MenuNav>
    </Header>
  );
};

export default MainHeader;
