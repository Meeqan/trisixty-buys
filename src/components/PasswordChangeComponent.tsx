import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import IconicInputField from './IconicInputField';
import Button from './Button';
import Loader from './loader';
import { PasswordChangeComponentInterface } from '../Utilities/Interfaces';

const PasswordChangeComponent: FunctionComponent<
PasswordChangeComponentInterface
> = (props) => {
  const { handleChange, handleSubmit, state } = props;
  return (
    <Fragment>
      <h2 className="form-header">Password reset</h2>
      {state.loading && <Loader />}
      <form onSubmit={handleSubmit} className="mt-4 mb-2">
        <IconicInputField
          type="password"
          name="password"
          classes="form-control custom-form-control"
          placeholder="Enter new password"
          icon="fas fa-lock"
          value={state.data.password}
          onChange={handleChange}
        />
        <IconicInputField
          type="password"
          name="confirmPassword"
          classes="form-control custom-form-control"
          placeholder="Confirm new password"
          icon="fas fa-lock"
          value={state.data.confirmPassword}
          onChange={handleChange}
        />

        <div className="mt-4">
          <Button
            buttonType="submit"
            buttonText="Set new password"
            classes="btn-custom btn-block btn-sm"
          />
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
};

export default PasswordChangeComponent;
