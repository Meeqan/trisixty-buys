import CreateAccountPage from './containers/Authentications/CreateAccount';
import LoginPage from './containers/Authentications/Login';
import PasswordResetEmail from './containers/PasswordReset/SendResetEmailPage';
import PasswordReset from './containers/PasswordReset/ChangePasswordPage';
import AccountCreationSuccess from './containers/Authentications/AccountCreationSuccessPage';
import Sample from './containers/Sample';

const routes = [
  {
    path: '/register',
    component: CreateAccountPage,
    name: 'Register',
    exact: false,
  },

  {
    path: '/login',
    component: LoginPage,
    name: 'Login',
    exact: false,
  },

  {
    path: '/password/reset/email',
    component: PasswordResetEmail,
    name: 'SendResetEmail',
    exact: false,
  },

  {
    path: '/password/reset/:token',
    component: PasswordReset,
    name: 'PasswordReset',
    exact: false,
  },

  {
    path: '/register/success/resend',
    component: AccountCreationSuccess,
    name: 'SuccessfulRegistration',
    exact: false,
  },

  {
    path: '/design',
    component: Sample,
    name: 'design',
    exact: false,
  },
];

export default routes;
