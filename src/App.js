import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
  const routes = signedIn ? signedInRoutes : defaultRoutes;
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/sign-in">Sign-in</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign-up</Link>
            </li>
            <li>
              <Link to="/manage/links">Links</Link>
            </li>
            <li>
              <Link to="/manage/links/create">Create Link</Link>
            </li>
            <li>
              <Link to="/manage/links/edit">Edit Link</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>{routeComponents}</Switch>
      </div>
    </Router>
  );
};

export default App;
