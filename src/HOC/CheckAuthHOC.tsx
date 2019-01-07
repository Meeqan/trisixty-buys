import React from 'react';
import { Redirect } from 'react-router-dom';
import { CheckAuthHOCInterface } from '../Utilities/Interfaces';

const CheckAuthHOC = (WrappedComponent: any) => (
  props: CheckAuthHOCInterface,
) => {
  if (props.token) {
    return <Redirect to="/" />;
  }
  return <WrappedComponent {...props} />;
};

export default CheckAuthHOC;
