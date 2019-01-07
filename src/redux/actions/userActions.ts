import { toast } from 'react-toastify';
import api, { setAuth, setCookie } from './api';
import * as types from '../types';

const login = (details: any) => (dispatch: any) => api.post('/user/login', details).then((res) => {
  setCookie('trisixty-buys-jwt-token', res.data.data.token, 3);
  setAuth(res.data.data.token);
  toast.success(res.data.message);
  return dispatch({ type: types.SAVE_USER_TOKEN, payload: res.data });
});

const register = (details: any) => (dispatch: any) => api
  .post('/user/register', details)
  .then(res => dispatch({ type: types.SAVE_USER_EMAIL, payload: details }));

const resendVerificationEmail = (email = undefined) => (dispatch: any) => api.get(`/user/activate/${email}/resend`).then((res) => {
  toast.success(res.data.message);
});



export { login, register, resendVerificationEmail };
