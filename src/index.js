import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import Keycloak from 'keycloak-js';
import reducer from './reducer';

import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const keycloak = Keycloak('./keycloak.json');
keycloak.init({ onLoad: 'login-required' }).then(async (authenticated) => {
  if (authenticated) {
    ReactDOM.render(
      <Provider store={store}>
        <App
          keycloak={keycloak}
          authenticated={authenticated}
          user={await keycloak.loadUserInfo()}
        />
      </Provider>,

      document.getElementById('root')
    );
  }
});
