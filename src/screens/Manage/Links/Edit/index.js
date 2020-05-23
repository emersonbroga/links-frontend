import React from 'react';
import { Link } from 'react-router-dom';
import ManageLayout from '../../../Layouts/Manage';

const SignIn = () => {
  return (
    <ManageLayout>
      <h1>Edit</h1>
      <div>
        <form>
          <div className="form-group">
            <label>Label</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input className="form-control" type="text" />
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="is_social" />
            <label className="form-check-label" for="is_social">
              Is Social
            </label>
          </div>
          <div>
            <span>
              <span className="badge badge-success">155</span> clicks
            </span>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </ManageLayout>
  );
};

export default SignIn;
