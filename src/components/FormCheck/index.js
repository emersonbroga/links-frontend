import React, { useState, useEffect } from 'react';
import { get } from '../../helpers/content';

const FormCheck = (props) => {
  const { data, name, label, errors } = props;
  const error = get(errors, name, null);
  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    const isChecked = get(data, name, undefined);
    if (isChecked !== undefined) setIsChecked(isChecked);
  }, [data]);

  const feedback = error ? <div className="invalid-feedback">{error}</div> : null;
  const inputClass = error ? 'form-check-input is-invalid' : 'form-check-input';
  const placeholder = props.placeholder || '';

  const handleChange = (e) => {
    if (isChecked === e.target.value) return;
    setIsChecked(!!e.target.value);
    if (props.onChange) props.onChange(e);
  };
  const inputProps = {
    onChange: handleChange,
    type: 'checkbox',
    className: inputClass,
    placeholder,
    name,
    checked: isChecked,
  };

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input {...inputProps} />
        <span className="form-check-sign"></span>
        {label}
      </label>
      {feedback}
    </div>
  );
};

export default FormCheck;
