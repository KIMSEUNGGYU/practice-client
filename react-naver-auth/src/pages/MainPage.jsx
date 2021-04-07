import React from 'react';
import MainHeader from '@components/MainHeader';
import Main from '@components/Main';

const MainPage = ({ history, cookies, onRemoveCookie }) => {
  return (
    <>
      <MainHeader />
      <Main history={history} cookies={cookies} onRemoveCookie={onRemoveCookie} />
    </>
  );
};

export default MainPage;
