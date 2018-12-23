import React, { Component } from 'react';


/* eslint-disable react/prop-types */
const AuthHOC = WrappedComponent => class HOC extends Component {
    state = {
      user: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
      },
      errors: {},
      loading: false,
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { user } = this.state;
      console.log('USER', user);
    };

    handleChange = (e) => {
      const { user } = this.state;
      this.setState({
        user: {
          ...user,
          [e.target.name]: e.target.value,
        },
        errors: {},
      });
    };

    render() {
      return (
        <WrappedComponent
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.props}
        />
      );
    }
};
/* eslint-enable */
export default AuthHOC;
