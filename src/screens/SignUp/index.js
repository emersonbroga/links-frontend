import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign Up</h1>
      <div className="d-flex flex-column h-100">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an account?</div>
          <Link className="btn btn-secondary btn-round" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
