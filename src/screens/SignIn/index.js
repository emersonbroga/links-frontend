import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
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
            <button type="submit">Sign In</button>
          </div>
          <div>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
