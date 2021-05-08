import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login, setUserInfo } from './actions';

// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

const App = ({ keycloak, authenticated, loginUser, setUser, user }) => {
  useEffect(() => {
    console.log(authenticated);

    if (authenticated) {
      loginUser();
      setUser();
    }
  }, []);

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
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
