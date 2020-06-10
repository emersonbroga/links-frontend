import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ManageLayout from '../../Layouts/Manage';
import DeleteConfirmation from '../../../components/DeleteConfirmation';
import Icon from '../../../components/Icon';
import { linkFetch, linkDelete } from './LinkActions';
import { isEmpty } from '../../../helpers/content';

const Links = ({ links, loading, linkFetch, linkDelete, refresh }) => {
  const [itemToRemove, setItemToRemove] = useState(null);

  useEffect(() => {
    linkFetch();
  }, [refresh, linkFetch]);

  const confirmationProps = !!itemToRemove
    ? {
        render: !!itemToRemove,
        title: 'Are you sure?',
        onConfirm: () => {
          linkDelete(itemToRemove.id);
          setItemToRemove(null);
        },
        onCancel: () => setItemToRemove(null),
      }
    : {};

  return (
    <ManageLayout>
      <div className="row">
        <div className="col">
          <h1>Links</h1>
        </div>
        <div className="col text-right align-self-bottom pt-2">
          <Link to="/manage/links/create" className="btn btn-primary ">
            Add
          </Link>
        </div>
      </div>
      <div>
        {isEmpty(links) ? (
          <strong>No data...</strong>
        ) : (
          links.map((item) => {
            const imageClass = item.isSocial ? 'rounded-circle' : 'rounded';
            const deleteClick = (e) => setItemToRemove(item);
            const border =
              itemToRemove && itemToRemove.id === item.id
                ? 'border border-danger rounded'
                : 'border border-transparent';

            return (
              <div className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`} key={item.id}>
                <div className="pr-3">
                  <img src="https://source.unsplash.com/random/100x100" alt="Link" className={imageClass} />
                  <br />
                  <div className="text-center text-small">
                    <small>{item.id}</small>
                  </div>
                </div>
                <div className="align-self-center">
                  <span className="text-primary clearfix">{item.label}</span>
                  <span className="text-default clearfix d-inline-block text-truncate">{item.url}</span>
                </div>
                <div className="ml-auto p-2 clearfix">
                  <a className="pr-2" href={`/manage/links/edit/${item.id}`}>
                    <Icon id="edit" className="fill-primary" />
                  </a>

                  <button type="button" className="btn btn-clear" onClick={deleteClick}>
                    <Icon id="trash" className="fill-default" />
                  </button>
                </div>
              </div>
            );
          })
        )}
        {loading ? <strong>Loading...</strong> : null}
      </div>
      <DeleteConfirmation {...confirmationProps} />
    </ManageLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    links: state.link.links,
    errors: state.link.errors,
    loading: state.link.loading,
  };
};

export default connect(mapStateToProps, { linkFetch, linkDelete })(Links);
