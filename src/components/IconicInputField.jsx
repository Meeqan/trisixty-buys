import React, { Fragment } from 'react';

const IconicInputField = ({
  type, classes, placeholder, icon, ...props
}) => (
  <Fragment>
    <div className="input-group mb-4">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <i className={icon} />
        </div>
      </div>
      <input type={type} className={classes} placeholder={placeholder} {...props} />
    </div>
  </Fragment>
);

export default IconicInputField;
