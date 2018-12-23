import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => (
  <Fragment>
    <section id="auth-bg">
      <div className="auth-bg-overlay animated fadeIn slow">
        <div className="container auth-form-wrapper">
          <div className="form-wrapper text-center">{children}</div>
        </div>
      </div>
    </section>
  </Fragment>
);

/* eslint-disable react/forbid-prop-types */
AuthLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
/* eslint-enable */
export default AuthLayout;
