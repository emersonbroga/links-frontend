import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { signIn } from './SignInActions';

const SignIn = (props) => {
  const { account, signIn } = props;

  if (account) {
    return <Redirect to="/manage/links" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    signIn(data);
  };

  return (
    <div className="container h-100 pt-5">
      <h1>Sign Up</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" name="password" />
          </div>
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an account?</div>
          <Link className="btn btn-secondary btn-round" to="/sign-up">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.signIn.account };
};

export default connect(mapStateToProps, { signIn })(SignIn);
