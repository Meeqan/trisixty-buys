/* eslint-disable */
import React from 'react';

const Button = ({ buttonType, buttonText, classes, ...props }) => (
  <button type={buttonType} className={`btn ${classes}`} {...props}>
    {buttonText}
  </button>
);

export default Button;
