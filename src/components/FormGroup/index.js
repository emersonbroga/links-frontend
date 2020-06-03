import React from 'react';
import { get } from '../../helpers/content';

const FormGroup = (props) => {
  const { name, label, errors, type } = props;
  const error = get(errors, name, null);

  const inputType = type || 'text';
  const feedback = error ? <div className="invalid-feedback">{error}</div> : null;
  const inputClass = error ? 'form-control is-invalid' : 'form-control';

  const otherProps = {};
  if (props.placeholder) otherProps.placeholder = props.placeholder;
  if (props.value) otherProps.value = props.value;
  if (props.onChange) otherProps.value = props.onChange;

  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={inputType} className={inputClass} name={name} {...otherProps} />
      {feedback}
    </div>
  );
};

export default FormGroup;
