import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../../components/LoginComponents';
import AuthLayout from '../../components/AuthLayout';
import { LoginInterface } from '../../Utilities/Interfaces';
import CheckAuthHOC from '../../HOC/CheckAuthHOC';
import { login } from '../../redux/actions/userActions';

class LoginPage extends React.Component<LoginInterface> {
  login = (details: { email: string; password: string }) => {
    const { loginAction } = this.props;
    const data = {
      email: details.email,
      password: details.password,
    };
    return loginAction(data);
  };

  render(): ReactNode {
    const { history } = this.props;
    return (
      <AuthLayout>
        <LoginComponent submit={this.login} history={history} />
      </AuthLayout>
    );
  }
}

export const mapStateToProps = (state: any) => ({
  token: state.user.token,
});

const LoginComponentWithRedux = connect(
  mapStateToProps,
  { loginAction: login },
)(CheckAuthHOC(LoginPage));

export default LoginComponentWithRedux;
