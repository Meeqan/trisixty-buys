/* eslint-disable */
import React from 'react';

const Button = (props: any) => {
  const { buttonType, buttonText, classes, ...otherProps } = props;
  return (
    <button type={buttonType} className={`btn ${classes}`} {...otherProps}>
      {buttonText}
    </button>
  );
};

export default Button;
