import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/loader.svg';

class Homepage extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo ml-20" alt="logo" />
          <Link to="/login">Login</Link>
        </header>
      </div>
    );
  }
}

export default Homepage;
