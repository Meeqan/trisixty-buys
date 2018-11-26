import React from 'react';
import { Link } from 'react-router-dom';
import IconicInputField from '../components/IconicInputField';
import Button from '../components/Button';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';

const LoginPage = () => (
  <section id="auth-bg">
    <div className="auth-bg-overlay animated fadeIn slow">
      <div className="container auth-form-wrapper">
        <div className="form-wrapper text-center">
          <h2 className="auth-header">Welcome, Log into your account</h2>

          <form className="mt-5">
            <IconicInputField
              type="text"
              classes="form-control custom-form-control"
              placeholder="Username"
              icon="fas fa-user"
            />
            <IconicInputField
              type="password"
              classes="form-control custom-form-control"
              placeholder="Password"
              icon="fas fa-lock"
            />
            <Link to="#!">Forgot password or username?</Link>
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
        </div>
      </div>
    </div>
  </section>
);

export default LoginPage;
