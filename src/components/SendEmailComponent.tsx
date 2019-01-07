import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import IconicInputField from './IconicInputField';
import Button from './Button';
import Loader from './loader';
import { SendEmailComponentInterface } from '../Utilities/Interfaces';

const SendEmailComponent: FunctionComponent<
SendEmailComponentInterface
> = (props) => {
  const { handleChange, handleSubmit, state } = props;
  return (
    <Fragment>
      <h2 className="form-header">Password reset</h2>
      <h6>Forgot your password?</h6>
      <p className="form-password-reset-p">
        Don’t worry!, Enter your email below and we will email you instructions
        on how to reset your password.
      </p>
      {state.loading && <Loader />}
      <form onSubmit={handleSubmit} className="mt-4">
        <IconicInputField
          type="email"
          name="email"
          classes="form-control custom-form-control"
          placeholder="Enter your email"
          icon="fas fa-envelope"
          value={state.email}
          onChange={handleChange}
        />

        <div className="mt-4">
          <Button
            buttonType="submit"
            buttonText="Send"
            classes="btn-custom btn-block btn-sm"
          />
        </div>
      </form>

      <div className="mt-4">
        <Link to="/login">Log in</Link>
      </div>
    </Fragment>
  );
};

export default SendEmailComponent;
