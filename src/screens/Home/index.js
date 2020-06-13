import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccount } from '../../helpers/account';
import TokenRefresher from '../../components/TokenRefresher';

const Home = ({ account }) => {
  if (!!account) {
    return <Redirect to="/manage/links" />;
  }
  return <Redirect to="/sign-in" />;
};

const mapStateToProps = (state) => {
  return { account: state.tokenRefresher.account };
};
export default connect(mapStateToProps)(Home);
