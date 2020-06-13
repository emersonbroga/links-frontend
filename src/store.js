import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import signInReducer from './screens/SignIn/SignInReducer';
import signUpReducer from './screens/SignUp/SignUpReducer';
import linkCreateReducer from './screens/Manage/Links/LinkReducer';
import tokenRefresherReducer from './components/TokenRefresher/TokenRefresherReducer';

const loaderMiddleware = (store) => (next) => (action) => {
  const isPromise = action.payload instanceof Promise;
  if (isPromise) {
    store.dispatch({ type: `${action.type}_LOADING`, payload: true });
  }
  next(action);
};

const reducers = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  link: linkCreateReducer,
  tokenRefresher: tokenRefresherReducer,
});

const middlewares = applyMiddleware(loaderMiddleware, ReduxPromise);
const store = createStore(reducers, middlewares);

export default store;
