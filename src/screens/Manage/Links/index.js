import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ManageLayout from '../../Layouts/Manage';
import Icon from '../../../components/Icon';
import { linkFetch } from './LinkActions';

const Links = ({ links, loading, linkFetch }) => {
  useEffect(() => {
    if (links) linkFetch();
  }, [links, linkFetch]);

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
        {!links
          ? null
          : links.map((item) => {
              return (
                <div className="row mb-2 pl-3 pr-3" key={item.id}>
                  <div className="pr-3">
                    <img src="https://via.placeholder.com/100" alt="Link" className="rounded" />
                  </div>
                  <div className="align-self-center">
                    <span className="text-primary">{item.label}</span>
                    <br />
                    <span className="text-default">{item.url}</span> <br />
                    <a className="mr-5" href={`/manage/links/edit/${item.id}`}>
                      Edit
                    </a>
                    <span className="text-default ">155 clicks</span>
                  </div>
                </div>
              );
            })}
        {loading ? <strong>Loading...</strong> : null}
      </div>
      <div className="text-xs-center mt-5">
        <ul className="pagination ">
          <li className="page-item">
            <a className="page-link" href="?page-0">
              <Icon id="chevron" className="flip-h fill-default" />
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="?page-1">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link " href="?page-2">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="?page-3">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="?page-4">
              <Icon id="chevron" className="fill-default" />
            </a>
          </li>
        </ul>
      </div>
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

export default connect(mapStateToProps, { linkFetch })(Links);
