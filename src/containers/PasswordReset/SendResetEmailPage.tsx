import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { errorHandler } from '../../Utilities/utilityFunctions';
import SendEmailComponent from '../../components/SendEmailComponent';
import AuthLayout from '../../components/AuthLayout';
import { sendPasswordResetEmail } from '../../redux/actions/passwordResetActions';
import { resetEmailInterface } from '../../Utilities/Interfaces';

class PasswordResetEmailPage extends Component<resetEmailInterface> {
  state = {
    email: '',
    loading: false,
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { email } = this.state;
    const { sendEmail, history } = this.props;
    this.setState({ loading: true });
    return sendEmail(email)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
        const { errors, message } = err.response.data;
        errorHandler(message, errors);
      });
  };

  handleChange = (e: any) => {
    this.setState({
      email: e.target.value,
    });
  };

  render(): ReactNode {
    return (
      <AuthLayout>
        <SendEmailComponent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          state={this.state}
        />
      </AuthLayout>
    );
  }
}

const PasswordResetEmailPageWithRedux = connect(
  null,
  { sendEmail: sendPasswordResetEmail },
)(PasswordResetEmailPage);

export default PasswordResetEmailPageWithRedux;
