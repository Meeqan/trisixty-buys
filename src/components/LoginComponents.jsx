import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconicInputField from './IconicInputField';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import Button from './Button';


const LoginComponent = ({ handleChange, handleSubmit }) => (
  <Fragment>
    <h2 className="auth-header">Welcome, Log into your account</h2>
    <form onSubmit={handleSubmit} className="mt-5">
      <IconicInputField
        type="email"
        name="email"
        classes="form-control custom-form-control"
        placeholder="Email"
        icon="fas fa-envelope"
        onChange={handleChange}
      />
      <IconicInputField
        type="password"
        name="password"
        classes="form-control custom-form-control"
        placeholder="Password"
        icon="fas fa-lock"
        onChange={handleChange}
      />
      <Link to="/password/reset/email">Forgot your password?</Link>
      <div className="mt-5">
        <Button buttonType="submit" buttonText="Log in" classes="btn-custom btn-block" />
      </div>
    </form>

    <div className="social-login">
      <h6>or sign up using</h6>
      <Link to="#!">
        <img className="icon" src={facebook} alt="Facebook" />
      </Link>
      <Link to="#!">
        <img className="icon" src={google} alt="Google" />
      </Link>
    </div>

    <div className="mt-5">
      <Link to="register">
        Create new account
        {' '}
        <i className="fas fa-arrow-right" />
      </Link>
    </div>
  </Fragment>
);

LoginComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default LoginComponent;
