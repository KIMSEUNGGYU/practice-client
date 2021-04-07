import React from 'react';
import './App.less';
import { Switch, Route } from 'react-router-dom';

import MainPage from '@pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SingUpPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
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
