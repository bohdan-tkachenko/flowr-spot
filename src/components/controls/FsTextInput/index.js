import React from 'react';
import './index.scss';

const FsTextInput = ({className, label, inputProps}) => {
  return <div className={`fs-text-input-container ${className}`}>
    <label>{label}</label>
    <input {...inputProps} />
  </div>;
}

export default FsTextInput;