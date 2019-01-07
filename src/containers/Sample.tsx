import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import IconicInputField from '../components/IconicInputField';
import Button from '../components/Button';
import shape1 from '../assets/images/Shape-1.svg';
import shape2 from '../assets/images/Shape-2.svg';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import loginImage from '../assets/images/loginImage.png';

class Sample extends Component {
  render(): ReactNode {
    return (
      <div>
        <img src={shape1} className="shapes shapes_1" />
        <img src={shape2} className="shapes shapes_2" />
        <section className="container wrapper animated fadeIn slow">
          <div className="wrapper-background wrapper-flex-space-around">
            <div className="form-left">
              <img src={loginImage} className="" />
            </div>
            <div className="form-center-line" />
            <div className="form-right form-wrapper text-center">
              <h2 className="form-header">Member Login</h2>
              <form className="mt-4 mb-2">
                <IconicInputField
                  type="email"
                  name="email"
                  classes="form-control custom-form-control"
                  placeholder="Email"
                  icon="fas fa-envelope"
                />
                <IconicInputField
                  type="password"
                  name="password"
                  classes="form-control custom-form-control"
                  placeholder="Password"
                  icon="fas fa-lock"
                />
                <small className="form-text text-muted">
                  * Password must be alphanumeric and must not be less than
                  eight(8) characters.
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
                <div className="float">
                  <Link to="/">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Sample;
