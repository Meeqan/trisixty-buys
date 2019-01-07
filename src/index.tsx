import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-next-line
import $ from 'jquery'; // eslint-disable-next-line
import Popper from 'popper.js';
import store from './redux/store';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/base.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setAuth, getCookie } from './redux/actions/api';
import * as types from './redux/types';

$(() => {
  $('[data-toggle="popover"]').popover();
});

const token = getCookie('trisixty-buys-jwt-token');
if (token) {
  const data = decode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  if (data.exp > currentTime) {
    const payload = {
      data: {
        token,
      },
    };
    setAuth(token);
    store.dispatch({ type: types.SAVE_USER_TOKEN, payload });
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
