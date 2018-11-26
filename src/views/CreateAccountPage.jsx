import React from 'react';
import { Link } from 'react-router-dom';
import IconicInputField from '../components/IconicInputField';
import Button from '../components/Button';

const CreateAccountPage = () => (
  <section id="auth-bg">
    <div className="auth-bg-overlay animated fadeIn slow">
      <div className="container auth-form-wrapper">
        <div className="form-wrapper text-center">
          <h2 className="auth-header">Create an account</h2>
          <form className="mt-5">
            <IconicInputField
              type="text"
              classes="form-control custom-form-control"
              placeholder="Username"
              icon="fas fa-user"
            />
            <IconicInputField
              type="email"
              classes="form-control custom-form-control"
              placeholder="Email"
              icon="fas fa-envelope"
            />
            <IconicInputField
              type="password"
              classes="form-control custom-form-control"
              placeholder="Password"
              icon="fas fa-lock"
            />
            <IconicInputField
              type="password"
              classes="form-control custom-form-control"
              placeholder="Confirm Password"
              icon="fas fa-lock"
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
        </div>
      </div>
    </div>
  </section>
);

export default CreateAccountPage;
