import React, { useState, useEffect } from 'react';
import { get } from '../../helpers/content';

const FormGroup = (props) => {
  const { data, name, label, errors, type } = props;
  const error = get(errors, name, null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const value = get(data, name, undefined);
    if (value !== undefined) setValue(value);
  }, [name, data]);

  const inputType = type || 'text';
  const feedback = error ? <div className="invalid-feedback">{error}</div> : null;
  const inputClass = error ? 'form-control is-invalid' : 'form-control';
  const placeholder = props.placeholder || '';

  const handleChange = (e) => {
    if (value === e.target.value) return;
    setValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  const inputProps = {
    onChange: handleChange,
    type: inputType,
    className: inputClass,
    placeholder,
    name,
    value: value || '',
  };
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...inputProps} />
      {feedback}
    </div>
  );
};

export default FormGroup;
