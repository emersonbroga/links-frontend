import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { get } from '../../helpers/content';
import FormGroup from '../../components/FormGroup';
import { signUp } from './SignUpActions';

const SignUp = (props) => {
  const { loading, errors, account, signUp } = props;
  if (account) {
    return <Redirect to="/manage/links" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (loading) return;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    signUp(data);
  };

  return (
    <div className="container h-100 pt-5">
      <h1>Sign Up</h1>
      <div className="d-flex flex-column h-100">
        <form onSubmit={submitHandler} noValidate>
          <FormGroup name="email" errors={errors} label="Email" autocomplete="disabled" />
          <FormGroup name="password" errors={errors} label="Password" type="password" autocomplete="off" />
          <FormGroup
            name="password_confirmation"
            errors={errors}
            label="Password Confirmation"
            type="password"
            autocomplete="off"
          />
          <div>
            <button className="btn btn-primary btn-round" type="submit">
              {loading ? 'Loading...' : 'Sign Up'}
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

const mapStateToProps = (state) => {
  return {
    account: state.signUp.account,
    errors: state.signUp.errors,
    loading: state.signUp.loading,
  };
};

export default connect(mapStateToProps, { signUp })(SignUp);
