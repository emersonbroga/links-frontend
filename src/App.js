import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';
import NotFound from './screens/NotFound';

const defaultRoutes = [
  {
    path: '/sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    component: SignUp,
  },
  {
    path: '/',
    component: Home,
  },
];

const signedInRoutes = [
  {
    path: '/manage/links',
    component: ManageLinks,
  },
  {
    path: '/manage/links/create',
    component: ManageLinksCreate,
  },
  {
    path: '/manage/links/edit',
    component: ManageLinksEdit,
  },
];

const extraRoutes = [{ path: '*', component: NotFound }];
const App = (props) => {
  const { account } = props;
  const routes = account ? [...defaultRoutes, ...signedInRoutes, ...extraRoutes] : [...defaultRoutes, ...extraRoutes];
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { account: state.signIn.account };
};

export default connect(mapStateToProps)(App);
