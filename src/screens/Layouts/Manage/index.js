import React from 'react';
import { Link } from 'react-router-dom';

const ManageLayout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg navbar-light bg-purbple">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <Link to="/manage/links">Back</Link>
          </div>
          <div className="text-center">Links</div>
          <div>HM</div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default ManageLayout;
