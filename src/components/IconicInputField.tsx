import React, { Fragment } from 'react';

const IconicInputField = (props: any) => {
  const {
    type, classes, placeholder, icon, ...otherProps
  } = props;
  return (
    <Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className={icon} />
          </div>
        </div>
        <input
          type={type}
          className={`${classes} form-control-sm`}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    </Fragment>
  );
};

export default IconicInputField;
