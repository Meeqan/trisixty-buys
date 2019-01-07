import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import AccountCreationSuccessComponent from '../../components/AccountCreationSuccessComponent';
import AuthLayout from '../../components/AuthLayout';
import CheckAuthHOC from '../../HOC/CheckAuthHOC';
import { resendVerificationEmail } from '../../redux/actions/userActions';
import { AccountCreationSuccessInterface } from '../../Utilities/Interfaces';

class AccountCreationSuccessPage extends Component<AccountCreationSuccessInterface> {
  state = {
    email: '',
    loading: false,
  };

  componentWillMount() {
    const { email } = this.props;
    email ? this.setState({ email: this.props.email }) : null;
  }

  private handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  private handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { email } = this.state;
    const { resendEmail } = this.props;
    return resendEmail(email)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((err: any) => {
        this.setState({ loading: false });
        const { message } = err.response.data;
        const msg = message || 'Provide a valid email address.';
        toast.error(msg);
      });
  };

  render(): ReactNode {
    return (
      <AuthLayout>
        <AccountCreationSuccessComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </AuthLayout>
    );
  }
}

const mapStateToProps = (state: { user: { email: string; token: string } }) => ({
  email: state.user.email,
  token: state.user.token,
});

const AccountCreationSuccessPageWithRedux = connect(
  mapStateToProps,
  { resendEmail: resendVerificationEmail },
)(CheckAuthHOC(AccountCreationSuccessPage));
export default AccountCreationSuccessPageWithRedux;
