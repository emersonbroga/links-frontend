import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';

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
const signedIn = true;
const App = () => {
  const routes = signedIn ? [...defaultRoutes, ...signedInRoutes] : defaultRoutes;
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
};

export default App;
