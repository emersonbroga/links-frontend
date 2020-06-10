import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';
import FormSubmit from '../../../../components/FormSubmit';

import ManageLayout from '../../../Layouts/Manage';
import { linkFetchSingle, linkEdit } from '../LinkActions';

const Edit = ({ link, errors, loading, linkFetchSingle, linkEdit, redirectBack }) => {
  const { id } = useParams();

  useEffect(() => {
    linkFetchSingle({ id });
  }, [id, linkFetchSingle]);

  if (redirectBack) {
    return <Redirect to="/manage/links" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (loading) return;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    linkEdit(id, data);
  };

  return (
    <ManageLayout>
      <h1>Edit</h1>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup name="label" errors={errors} label="Label" data={link} />
          <FormGroup name="url" errors={errors} label="Url" data={link} />
          <FormCheck name="isSocial" errors={errors} label="Is Social" data={link} />
          <FormSubmit label="Edit" loading={loading} />
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
    redirectBack: state.link.redirectBack,
  };
};

export default connect(mapStateToProps, { linkFetchSingle, linkEdit })(Edit);
