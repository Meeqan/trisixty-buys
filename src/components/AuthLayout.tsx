import React, { Fragment, FunctionComponent } from 'react';
import shape1 from '../assets/images/Shape-1.svg';
import shape2 from '../assets/images/Shape-2.svg';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import loginImage from '../assets/images/loginImage.png';

interface AuthLayoutProps {
  children: any;
}
const AuthLayout: FunctionComponent<AuthLayoutProps> = (props) => {
  const { children } = props;
  return (
    <Fragment>
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
              {children}
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
