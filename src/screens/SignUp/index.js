import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <form>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="text" />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <Link to="/sign-in">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
