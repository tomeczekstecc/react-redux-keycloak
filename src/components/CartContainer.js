import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { CLEAR_CARTS, GET_TOTALS } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>Koszyk</h2>
          <h4 className='empty-cart'>jest pusty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>Koszyk</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            Razem <span>{total} PLN</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch({ type: CLEAR_CARTS })}
        >
          Wyczyść
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state;
  return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);
