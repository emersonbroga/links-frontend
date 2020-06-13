import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import FormGroup from '../../components/FormGroup';
import { signIn } from './SignInActions';

const SignIn = (props) => {
  const { loading, errors, account, signIn } = props;
  if (account) {
    return <Redirect to="/manage/links" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (loading) return;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    signIn(data);
  };

  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler} noValidate>
          <FormGroup name="email" errors={errors} label="Email" />
          <FormGroup name="password" errors={errors} label="Password" type="password" />
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              {loading ? 'Loading...' : 'Sign In'}
            </button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Don't have an account?</div>
          <Link className="btn btn-secondary btn-round" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.signIn.account,
    errors: state.signIn.errors,
    loading: state.signIn.loading,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);
