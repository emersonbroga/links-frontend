import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div>
      <div>
        <h1>Links</h1>
        <div>
          <Link to="/manage/links/add">Add</Link>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Link" />
          </div>
          <div>
            <span>Facebook</span>
            <span>https://facebook.com</span>
          </div>
          <div>
            <span>1151</span>
          </div>
        </div>

        <div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Link" />
          </div>
          <div>
            <span>Facebook</span>
            <span>https://facebook.com</span>
          </div>
          <div>
            <span>1151</span>
          </div>
        </div>

        <div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Link" />
          </div>
          <div>
            <span>Facebook</span>
            <span>https://facebook.com</span>
          </div>
          <div>
            <span>1151</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
