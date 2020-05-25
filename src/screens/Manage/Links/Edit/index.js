import React from 'react';
import ManageLayout from '../../../Layouts/Manage';

const Edit = () => {
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
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" />
              <span class="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div className="form-group">
            <label>155 clicks</label>
          </div>

          <div>
            <button className="btn btn-primary btn-round" type="submit">
              Edit
            </button>
          </div>
        </form>
      </div>
    </ManageLayout>
  );
};

export default Edit;
