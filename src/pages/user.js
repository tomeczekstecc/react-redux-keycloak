import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const user = ({ user, keycloak }) => {
  return (
    <>
      <Navbar keycloak={keycloak} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3> Info z Redux Store</h3>
        <div>
          <h4>{user.name}</h4>
        </div>
        <div>
          <p>{user.email}</p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (store) => {
  const { user } = store;
  return { user };
};

export default connect(mapStateToProps)(user);
