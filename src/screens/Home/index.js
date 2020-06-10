import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getAccount } from '../../helpers/account';

const Home = () => {
  const [account] = useState(getAccount());

  if (account) {
    return <Redirect to="/manage/links" />;
  }
  return <Redirect to="/sign-in" />;
};

export default Home;
