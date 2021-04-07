import React, { useState } from 'react';
import './App.less';
import { Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import MainPage from '@pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';

function App() {
  const [cookies, setCookies, removeCookie] = useCookies(['name']);
  const [users, setUser] = useState([
    {
      id: 'gyu',
      password: 'gyu',
      name: '김승규',
    },
  ]);

  const onSignUp = (user) => {
    setUser([...users, user]);
  };

  const onMakeCookie = (newName) => {
    setCookies('name', newName, { path: '/' });
  };

  const onRemoveCookie = () => {
    removeCookie('name');
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <MainPage {...props} cookies={cookies} onRemoveCookie={onRemoveCookie} />
        )}
      />
      <Route
        path="/signin"
        render={(props) => <SignInPage {...props} users={users} onMakeCookie={onMakeCookie} />}
      />
      <Route path="/signup" render={(props) => <SignUpPage {...props} onSignUp={onSignUp} />} />
      <Route
        render={({ location }) => (
          <>
            <h1>해당 페이지는 존재하지 않습니다.</h1>
            <p>path: {location.pathname}</p>
          </>
        )}
      />
    </Switch>
  );
}

export default App;
