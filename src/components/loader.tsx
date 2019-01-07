import React, { Fragment } from 'react';
import loader from '../assets/images/loader.svg';

const Loader = () => (
  <Fragment>
    <img src={loader} className="loader animated fadeIn" alt="Loader..." />
  </Fragment>
);

export default Loader;
