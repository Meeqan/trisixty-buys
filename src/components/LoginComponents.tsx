import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import AuthHOC from '../HOC/AuthHOC';
import IconicInputField from './IconicInputField';
import Loader from './loader';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import Button from './Button';
import { AuthenticationInterface } from '../Utilities/Interfaces';

/**
 * @description The login form components
 * @param {*} param0
 *
 */
const LoginComponent: FunctionComponent<AuthenticationInterface> = (props) => {
  const {
    handleChange, handleSubmit, loading, state,
  } = props;
  return (
    <Fragment>
      <h2 className="form-header">Member login</h2>
      {loading && <Loader />}
      <form onSubmit={handleSubmit} className="mt-4 mb-2">
        <IconicInputField
          type="email"
          name="email"
          classes="form-control custom-form-control"
          placeholder="Email"
          icon="fas fa-envelope"
          value={state.user.email}
          onChange={handleChange}
        />
        <IconicInputField
          type="password"
          name="password"
          classes="form-control custom-form-control"
          placeholder="Password"
          value={state.user.password}
          icon="fas fa-lock"
          onChange={handleChange}
        />
        <small className="form-text text-muted">
          * Password must be alphanumeric and must not be less than eight(8)
          characters.
          {' '}
        </small>
        <Link to="/password/reset/email">Forgot your password?</Link>
        <div className="mt-3">
          <Button
            buttonType="submit"
            buttonText="Log in"
            classes="btn-custom btn-block btn-sm"
          />
        </div>
      </form>

      <Link to="register">Create new account</Link>
      <div className="form-social-login mt-4">
        <div className="social-icons">
          <p>Or Login with:</p>
          <Link to="#!">
            <img className="icon" src={facebook} alt="Facebook" />
          </Link>
          <Link to="#!">
            <img className="icon" src={google} alt="Google" />
          </Link>
        </div>
        <div className="mt-4">
          <Link to="/">Back</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthHOC(LoginComponent);
