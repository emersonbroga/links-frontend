import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from './SignUpActions';

const SignUp = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    signUp(data);
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
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <label>Password Confirmation</label>
            <input type="password" className="form-control" name="password_confirmation" />
          </div>
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text-muted">Already have an Account?</div>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.signUp.account };
};

export default connect(mapStateToProps, { signUp })(SignUp);
