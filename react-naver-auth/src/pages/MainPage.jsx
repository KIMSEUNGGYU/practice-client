import React from 'react';
import MainHeader from '@components/MainHeader';
import Main from '@components/Main';

const MainPage = ({ history }) => {
  return (
    <>
      <MainHeader />
      <Main history={history} />
    </>
  );
};

export default MainPage;
