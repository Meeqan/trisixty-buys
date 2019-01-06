import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconicInputField from './IconicInputField';
import Button from './Button';


const PasswordChangeComponent = ({ handleChange, handleSubmit }) => (
  <Fragment>
    <h2 className="auth-header">Password reset</h2>
    <form onSubmit={handleSubmit} className="mt-4">
      <IconicInputField
        type="password"
        classes="form-control custom-form-control"
        placeholder="Enter new password"
        icon="fas fa-lock"
        onChange={handleChange}
      />
      <IconicInputField
        type="password"
        classes="form-control custom-form-control"
        placeholder="Confirm new password"
        icon="fas fa-lock"
        onChange={handleChange}
      />

      <div className="mt-4">
        <Button buttonType="submit" buttonText="Set new password" classes="btn-custom btn-block" />
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

PasswordChangeComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default PasswordChangeComponent;
