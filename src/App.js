import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, setUserInfo } from './actions';

import Shop from './pages/shop';
import User from './pages/user';

const App = ({ keycloak, authenticated, loginUser, setUser }) => {
  useEffect(() => {
    console.log(authenticated);

    if (authenticated) {
      loginUser();
      setUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/shop'
          component={() => <Shop keycloak={keycloak} />}
        />
        <Route
          exact
          path='/user'
          component={() => <User keycloak={keycloak} />}
        />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  console.log(user);
  return {
    loginUser: () => dispatch(login()),
    setUser: () => dispatch(setUserInfo(user)),
  };
};
export default connect(null, mapDispatchToProps)(App);
