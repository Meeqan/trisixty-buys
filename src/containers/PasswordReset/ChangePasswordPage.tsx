import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { errorHandler } from '../../Utilities/utilityFunctions';
import { ChangePasswordInterface } from '../../Utilities/Interfaces';
import PasswordChangeComponent from '../../components/PasswordChangeComponent';
import AuthLayout from '../../components/AuthLayout';
import { changePassword } from '../../redux/actions/passwordResetActions';

class ChangePasswordPage extends Component<ChangePasswordInterface> {
  state = {
    data: {
      password: '',
      confirmPassword: '',
      token: '',
    },
    loading: false,
  };

  componentWillMount() {
    const { token } = this.props.match.params;
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        token,
      },
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { data } = this.state;
    const { changePassword, history } = this.props;
    const isMatch = data.confirmPassword === data.password;
    if (isMatch) {
      this.setState({ loading: true });
      return changePassword(data)
        .then(() => {
          history.push('/login');
        })
        .catch((err) => {
          this.setState({ loading: false });
          const { errors, message } = err.response.data;
          errorHandler(message, errors);
        });
    }
    toast.error("Password doesn't match");
  };

  handleChange = (e: any) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [e.target.name]: e.target.value,
      },
    });
  };

  render(): ReactNode {
    return (
      <AuthLayout>
        <PasswordChangeComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          state={this.state}
        />
      </AuthLayout>
    );
  }
}

const ChangePasswordPageWithRedux = connect(
  null,
  { changePassword },
)(ChangePasswordPage);

export default ChangePasswordPageWithRedux;
