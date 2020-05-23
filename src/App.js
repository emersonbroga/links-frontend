import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
            <h1>Sign In</h1>
          </Route>
          <Route path="/sign-up">
            <h1>Sign Up</h1>
          </Route>
          <Route path="/manage/links/create">
            <h1>Create Link</h1>
          </Route>
          <Route path="/manage/links/edit">
            <h1>Edit Link</h1>
          </Route>
          <Route path="/manage/links">
            <h1>Manage Links</h1>
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
