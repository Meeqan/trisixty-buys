import React from 'react';
import SendEmailComponent from '../components/SendEmailComponent';
import AuthLayout from '../components/AuthLayout';

const PasswordResetEmailPage = () => (
  <AuthLayout>
    <SendEmailComponent />
  </AuthLayout>
);

export default PasswordResetEmailPage;
