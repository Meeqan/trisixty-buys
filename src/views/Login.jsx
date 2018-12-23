import React from 'react';
import PropTypes from 'prop-types';
import LoginComponent from '../components/LoginComponents';
import AuthLayout from '../components/AuthLayout';
import AuthHOC from '../components/HOC/AuthHOC';

const LoginPage = ({ handleChange, handleSubmit }) => (
  <AuthLayout>
    <LoginComponent handleChange={handleChange} handleSubmit={handleSubmit} />
  </AuthLayout>
);

LoginPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default AuthHOC(LoginPage);
