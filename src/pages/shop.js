import React from 'react';
import CartContainer from '../components/CartContainer';
import Navbar from '../components/Navbar';

const shop = ({keycloak}) => {
  return (
    <div>
      <Navbar keycloak={keycloak} />
      <CartContainer />
    </div>
  );
};

export default shop;
