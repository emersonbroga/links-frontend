import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Not Found</h1>
      <div className="text-center">
        <img src="/images/illustrations/undraw_page_not_found_su7k.svg" alt="Illustration: 404 not found page" />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <Link className="btn btn-secondary" to="/sign-in">
            Sign In
          </Link>
        </div>
        <div>
          <Link className="btn btn-primary" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
