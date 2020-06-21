import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';

import { initAccount } from './actions/AccountActions';

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/manage/links/create">
            <ManageLinksCreate />
          </Route>
          <Route path="/manage/links/edit/:id">
            <ManageLinksEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapsStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapsStateToProps, { initAccount })(App);
