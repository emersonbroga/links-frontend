import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import signInReducer from './screens/SignIn/SignInReducer';

const loaderMiddleware = (store) => (next) => (action) => {
  const isPromise = action.payload instanceof Promise;
  if (isPromise) {
    store.dispatch({ type: `${action.type}_LOADING`, payload: true });
  }
  next(action);
};

const reducers = combineReducers({
  signIn: signInReducer,
});

const middlewares = applyMiddleware(loaderMiddleware, ReduxPromise);
const store = createStore(reducers, middlewares);

export default store;
