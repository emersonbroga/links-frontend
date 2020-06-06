import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormGroup from '../../../../components/FormGroup';
import ManageLayout from '../../../Layouts/Manage';
import { linkCreate } from '../LinkActions';

const Create = ({ link, errors, loading, linkCreate }) => {
  if (link) {
    return <Redirect to="/manage/links" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (loading) return;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    linkCreate(data);
  };

  return (
    <ManageLayout>
      <h1>New</h1>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup name="label" errors={errors} label="Label" />
          <FormGroup name="url" errors={errors} label="Url" />
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              {loading ? 'Loading... ' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </ManageLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.link.link,
    errors: state.link.errors,
    loading: state.link.loading,
  };
};

export default connect(mapStateToProps, { linkCreate })(Create);
