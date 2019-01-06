import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconicInputField from './IconicInputField';
import Button from './Button';

const CreateAccountComponent = ({ handleChange, handleSubmit }) => (
  <Fragment>
    <h2 className="auth-header">Create an account</h2>
    <form onSubmit={handleSubmit} className="mt-5">
      <IconicInputField
        type="text"
        classes="form-control custom-form-control"
        placeholder="First name"
        icon="fas fa-user"
        onChange={handleChange}
      />
      <IconicInputField
        type="text"
        classes="form-control custom-form-control"
        placeholder="Last name"
        icon="fas fa-user"
        onChange={handleChange}
      />
      <IconicInputField
        type="email"
        classes="form-control custom-form-control"
        placeholder="Email"
        icon="fas fa-envelope"
        onChange={handleChange}
      />
      <IconicInputField
        type="password"
        classes="form-control custom-form-control"
        placeholder="Password"
        icon="fas fa-lock"
        onChange={handleChange}
      />
      <IconicInputField
        type="password"
        classes="form-control custom-form-control"
        placeholder="Confirm Password"
        icon="fas fa-lock"
        onChange={handleChange}
      />
      <div className="form-check">
        <input type="checkbox" className="" id="terms" />
        <label className="form-check-label text-white" htmlFor="terms">
          I agree to the Terms of the User
        </label>
      </div>
      <div className="mt-5">
        <Button
          buttonType="submit"
          buttonText="Create account"
          classes="btn-custom btn-block mb-5"
        />
      </div>
    </form>
    <div className="mt-5">
      <Link to="/login">
        <i className="fas fa-arrow-left" />
        &nbsp;Log in
      </Link>
    </div>
  </Fragment>
);

CreateAccountComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateAccountComponent;
