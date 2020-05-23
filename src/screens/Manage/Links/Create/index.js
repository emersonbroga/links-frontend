import React from 'react';
import { Link } from 'react-router-dom';
import ManageLayout from '../../../Layouts/Manage';

const SignIn = () => {
  return (
    <ManageLayout>
      <h1>New</h1>
      <div>
        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" />
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
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </ManageLayout>
  );
};

export default SignIn;
