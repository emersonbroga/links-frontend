import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <h1>Edit</h1>
      <div>
        <form>
          <div>
            <label>Label</label>
            <input type="text" />
          </div>
          <div>
            <label>Url</label>
            <input type="text" />
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Is Social
            </label>
          </div>
          <div>
            <span>1155 clicks</span>
          </div>
          <div>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
