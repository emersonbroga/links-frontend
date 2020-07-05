import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../../Layouts/Manage';
import FormGroup from '../../../../components/FormGroup';
import FormCheck from '../../../../components/FormCheck';

import { linkGet, linkUpdate, linkClear } from '../../../../actions/LinkActions';
import { getFormData } from '../../../../helpers/form';
import { connect } from 'react-redux';

const Edit = ({ link, linkGet, linkUpdate, linkClear }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);

    return () => {
      linkClear();
    };
  }, [id, linkGet, linkClear]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    linkUpdate(id, data);
  };

  return (
    <Layout>
      <h1>Edit Link</h1>
      <div>
        <form onSubmit={submitHandler}>
          <FormGroup label="Label" name="label" data={link} type="text" />
          <FormGroup label="Url" name="url" data={link} type="text" />
          <FormCheck label="Is Social" name="isSocial" data={link} />
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    link: state.link.link,
  };
};

export default connect(mapStateToProps, { linkGet, linkUpdate, linkClear })(Edit);
