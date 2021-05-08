import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LOGIN, login, setUserInfo } from './actions';
import Keycloak from 'keycloak-js';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

const  App = ({ loginUser, setUser }) => {
  useEffect(() => {
    const keycloak = Keycloak('./keycloak.json');
    keycloak.init({ onLoad: 'login-required' }).then(async (authenticated) => {
        if (authenticated) {
            loginUser();
            setUser(keycloak);

        }
    });
  }, []);

  // cart setup

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    loginUser: () => dispatch(login()),
    setUser: () => dispatch(setUserInfo())
  };
};
export default connect(null, mapDispatchToProps)(App);
