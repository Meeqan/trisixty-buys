import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import CreateAccountComponent from '../../components/CreateAccountComponent';
import AuthLayout from '../../components/AuthLayout';
import CheckAuthHOC from '../../HOC/CheckAuthHOC';
import { register } from '../../redux/actions/userActions';
import { AccountInterface } from '../../Utilities/Interfaces';

class CreateAccountPage extends Component<AccountInterface> {
  register = (details: any) => {
    const { registerAction, history } = this.props;
    return registerAction(details).then(() => {
      history.push('/register/success/resend');
    });
  };

  render(): ReactNode {
    const { history } = this.props;
    return (
      <AuthLayout>
        <CreateAccountComponent submit={this.register} history={history} />
      </AuthLayout>
    );
  }
}

export const mapStateToProps = (state: any) => ({
  token: state.user.token,
});

const CreateAccountPageWithRedux = connect(
  mapStateToProps,
  { registerAction: register },
)(CheckAuthHOC(CreateAccountPage));

export default CreateAccountPageWithRedux;
