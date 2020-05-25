import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Links</h1>
      <div className="text-center">
        <img
          src="/images/illustrations/undraw_stock_prices_afrt.svg"
          alt="Illustration: Woman looking at stock price charts"
        />
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

export default Home;
