import { getApiData, getApiErrors, getApiMetaData } from '../../helpers/api';
import { setAccount, setToken, setRefreshToken } from '../../helpers/account';
import { SIGN_UP } from './SignUpActions';

const initalState = {
  account: null,
  errors: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  const data = getApiData(payload);
  const metadata = getApiMetaData(payload);
  const errors = getApiErrors(payload);

  switch (type) {
    case `${SIGN_UP}_LOADING`: {
      return { ...state, loading: true };
    }
    case SIGN_UP: {
      if (errors) {
        return { ...state, loading: false, errors };
      }
      const { token, refreshToken } = metadata || {};
      if (data) setAccount(data);
      if (token) setToken(token);
      if (refreshToken) setRefreshToken(refreshToken);
      return { ...state, errors, loading: false, account: data };
    }
    default: {
      return state;
    }
  }
}
