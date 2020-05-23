import React from 'react';
import { Link } from 'react-router-dom';

import ManageLayout from '../../Layouts/Manage';

const Links = () => {
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
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <div className="row mb-2" key={item}>
              <div className="col">
                <img src="https://via.placeholder.com/100" alt="Link" />
              </div>
              <div className="col align-self-center">
                <span>Facebook</span>
                <br />
                <span>https://facebook.com</span>
              </div>
              <div className="col text-right align-self-center">
                <span>
                  <span className="badge badge-success">155</span> clicks
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </ManageLayout>
  );
};

export default Links;
