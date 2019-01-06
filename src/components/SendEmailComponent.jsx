import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconicInputField from './IconicInputField';
import Button from './Button';


const SendEmailComponent = ({ handleChange, handleSubmit }) => (
  <Fragment>
    <h2 className="auth-header">Password reset</h2>
    <h6>Forgot your password?</h6>
    <p className="auth-password-reset-p">
      Don’t worry!, Enter your email below and we will email you instructions on how to reset your
      password.
    </p>

    <form onSubmit={handleSubmit} className="mt-4">
      <IconicInputField
        type="email"
        classes="form-control custom-form-control"
        placeholder="Enter your email"
        icon="fas fa-envelope"
        onChange={handleChange}
      />

      <div className="mt-4">
        <Button buttonType="submit" buttonText="Send" classes="btn-custom btn-block" />
      </div>
    </form>

    <div className="mt-4">
      <Link to="/login">
        <i className="fas fa-arrow-left" />
        {' '}
        Log in
      </Link>
    </div>
  </Fragment>
);

SendEmailComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default SendEmailComponent;
