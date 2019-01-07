import React, { Component, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { errorHandler } from '../Utilities/utilityFunctions';
import { AuthHOCInterface } from '../Utilities/Interfaces';

export const AuthHOC = (WrappedComponent: any) => class HOC extends Component<AuthHOCInterface> {
    state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        checked: false,
      },
      loading: false,
    };

    private handleSubmit = (e: any) => {
      e.preventDefault();
      const { user } = this.state;
      const {
        submit,
        history: { location },
      } = this.props;
      const isMatch = user.confirmPassword === user.password;
      if (location.pathname === '/register' && isMatch) {
        this.callSubmitAction(submit, user);
      } else if (location.pathname === '/login') {
        this.callSubmitAction(submit, user);
      } else {
        toast.error('Password doesn\'t match');
      }
    };

    private callSubmitAction = (submit: any, user: any) => {
      this.setState({ loading: true });
      return submit(user).catch((err: any) => {
        this.setState({ loading: false });
        const { errors, message } = err.response.data;
        errorHandler(message, errors);
      });
    };

    private handleChange = (e: any) => {
      const { user } = this.state;
      let { value } = e.target;
      if (e.target.name === 'checked') value = !user.checked;
      this.setState({
        user: {
          ...user,
          [e.target.name]: value,
        },
      });
    };

    render(): ReactNode {
      const { loading } = this.state;
      return (
        <WrappedComponent
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          loading={loading}
          {...this.props}
        />
      );
    }
};

export default AuthHOC;
