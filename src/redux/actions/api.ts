/**
 * @fileOverview Axios Instance setup
 *
 * @author Victor Nwokeocha
 * @requires NPM:axios
 *
 */

import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

/**
 * @method setAuth
 * @description This Sets the axios authorization header
 *
 * @param { string } token
 * @returns defaultHeader
 */
const setAuth = (token: string) => {
  const defaultHeaders = http.defaults.headers.common || {};
  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  } else {
    delete defaultHeaders.Authorization;
  }
  return defaultHeaders;
};

/**
 * @method setCookie
 * @description This method sets the cookie
 *
 * @param { string } name - Cookie name
 * @param { any } value - Cookie value
 * @param { number } days - Expirations days
 *
 */
const setCookie = (name: string, value: any, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

/**
 * @method getCookie
 * @description This method gets a particular cookie
 *
 * @param { string } name
 *
 * @returns { string } null
 *
 */
const getCookie = (name: string) => {
  const cname = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) == 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return null;
};

export { setAuth, setCookie, getCookie  };
export default http;
