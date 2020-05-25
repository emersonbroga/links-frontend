import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../../components/Icon';

const ManageLayout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <Link to="/manage/links">
              <Icon id="chevron" className="flip-h fill-light" />
            </Link>
          </div>
          <div className="text-center">Links</div>
          <div>
            <Icon id="hamburger" className="fill-light" />
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default ManageLayout;
