import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = ({ amount, keycloak }) => {
  return (
    <nav>
      <div className='nav-center'>
        <div>
          <Link className='link-container' to='/'>
            HOME
          </Link>
        </div>
        <div>
          <Link className='link-container' to='/shop'>
            SKLEP
          </Link>
        </div>

        <div>
          <Link className='link-container' to='/user'>
            PROFIL
          </Link>
        </div>

        <h3>ReReKe</h3>

        <div className='nav-container'>
          {' '}
          <Logout keycloak={keycloak} />
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { amount: state.amount };
};
export default connect(mapStateToProps)(Navbar);
