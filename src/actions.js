export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const CLEAR_CARTS = 'CLEAR_CARTS';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';
export const LOGIN = 'LOGIN';
export const SET_USER_INFO = 'SET_USER_INFO';
export const REMOVE = 'REMOVE';

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const login = () => {
  return { type: LOGIN };
};

export const setUserInfo = (user) => {
  console.log(user, 'action');
  return { type: SET_USER_INFO, payload: user};
};
