import {
  CLEAR_CARTS,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE,
  removeItem,
  LOGIN,
  TOGGLE_AMOUNT,
  SET_USER_INFO,
} from './actions';
import cartItems from './cart-items';

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
  authenticated: false,
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case CLEAR_CARTS:
      return { ...state, cart: [] };

    case DECREASE:
      let tempCart1 = state.cart.map((i) => {
        if (i.id === action.payload.id) {``
          i = {
            ...i,
            amount: i.amount - 1,
          };
        }
        return i;
      });

      return { ...state, cart: tempCart1 };

    case INCREASE:
      let tempCart = state.cart.map((i) => {
        if (i.id === action.payload.id) {
          i = {
            ...i,
            amount: i.amount + 1,
          };
        }
        return i;
      });
      return { ...state, cart: tempCart };

    case REMOVE:
      console.log(state);
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload.id),
      };

    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === 'inc') {
              return (cartItem = {
                ...cartItem,
                amount: cartItem.amount + 1,
              });
            }
            if (action.payload.toggle === 'dec') {
              return (cartItem = {
                ...cartItem,
                amount: cartItem.amount - 1,
              });
            }
          }

          return cartItem;
        }),
      };

    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.amount += amount;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        { total: 0, amount: 0 }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case LOGIN:
      return { ...state, authenticated: true };

    // case SET_USER_INFO:

    //   return { ...state, user: action.payload.user };

    default:
      return state;
  }
}

export default reducer;
