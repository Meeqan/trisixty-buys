import React, { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Loader from './loader';
import IconicInputField from './IconicInputField';
import Button from './Button';
import { SendEmailComponentInterface} from '../Utilities/Interfaces'

const AccountCreationSuccessComponent: FunctionComponent<SendEmailComponentInterface> = (props) => {
  const { handleChange, handleSubmit, state } = props;

  return (
    <Fragment>
      <h2 className="auth-header">You have successfully registered</h2>
      <h6>Hi there!</h6>
      <p className="auth-password-reset-p">
        We have sent an email with a confirmation link to your email address. Please allow 2-5
        minutes for this message to arrive, or try re-sending the email.
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
          <Button buttonType="submit" buttonText="Resend" classes="btn-custom btn-block" />
        </div>
      </form>

      <div className="mt-4">
        <Link to="/login"> Proceed to login</Link>
      </div>
    </Fragment>
  );
};

export default AccountCreationSuccessComponent;
