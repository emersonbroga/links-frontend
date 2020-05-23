import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>
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
          <Route path="/manage/links/edit">
            <ManageLinksEdit />
          </Route>
          <Route path="/manage/links">
            <ManageLinks />
          </Route>
          <Route path="/">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
