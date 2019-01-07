import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import AuthHOC from '../HOC/AuthHOC';
import Loader from './loader';
import IconicInputField from './IconicInputField';
import Button from './Button';
import { AuthenticationInterface } from '../Utilities/Interfaces';

const CreateAccountComponent: FunctionComponent<
AuthenticationInterface
> = (props) => {
  const {
    handleChange, handleSubmit, loading, state,
  } = props;
  return (
    <Fragment>
      <h2 className="form-header">Create an account</h2>
      {loading && <Loader />}
      <form onSubmit={handleSubmit} className="mt-4 mb-2">
        <IconicInputField
          type="text"
          name="firstname"
          classes="form-control custom-form-control"
          placeholder="First name"
          icon="fas fa-user"
          value={state.user.firstname}
          onChange={handleChange}
        />
        <IconicInputField
          type="text"
          name="lastname"
          classes="form-control custom-form-control"
          placeholder="Last name"
          icon="far fa-user"
          value={state.user.lastname}
          onChange={handleChange}
        />
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
          icon="fas fa-lock"
          value={state.user.password}
          onChange={handleChange}
        />
        <IconicInputField
          type="password"
          name="confirmPassword"
          classes="form-control custom-form-control"
          placeholder="Confirm Password"
          icon="fas fa-unlock-alt"
          value={state.user.confirmPassword}
          onChange={handleChange}
        />
        <div className="form-check">
          <input
            type="checkbox"
            id="terms"
            name="checked"
            defaultChecked={state.user.checked}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the
            {' '}
            <Link to="#!">Terms of the User</Link>
          </label>
        </div>
        <div className="mt-3">
          <Button
            buttonType="submit"
            buttonText="Create account"
            classes="btn-custom btn-block mb-3 btn-sm"
            disabled={!state.user.checked}
          />
        </div>
      </form>
      <div className="mt-3">
        <Link to="/login">Already have an account.</Link>
      </div>
    </Fragment>
  );
};

export default AuthHOC(CreateAccountComponent);
