import React from 'react';

const FormSubmit = (props) => {
  const { className, label, loading } = props;
  const inputClass = className || 'btn btn-primary btn-round';

  return (
    <div>
      <button className={inputClass} type="submit">
        {loading ? 'Loading... ' : label}
      </button>
    </div>
  );
};

export default FormSubmit;
