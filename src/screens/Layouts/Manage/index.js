import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../../components/Icon';
import { removeAccount } from '../../../helpers/account';

const ManageLayout = ({ children, history }) => {
  const [redirectBack, setRedirectBack] = useState(false);
  const onLogout = () => {
    removeAccount();
    setRedirectBack(true);
  };

  if (redirectBack) {
    return (window.location.href = '/');
  }

  return (
    <div className="layout">
      <nav className="navbar navbar-expand-lg bg-primary text-light">
        <div className="container d-flex w-100 justify-content-between">
          <div>
            <Link to="/manage/links">
              <Icon id="chevron" className="flip-h fill-light" />
            </Link>
          </div>
          <div className="text-center">
            <strong>Links</strong>
          </div>
          <div>
            <button className="btn btn-clear" onClick={onLogout}>
              <Icon id="logout" className="fill-light" />
            </button>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default ManageLayout;
