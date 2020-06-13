import { getApiMetaData } from '../../helpers/api';
import { setAccount, setToken, setRefreshToken, getAccount } from '../../helpers/account';
import { REFRESH_TOKEN } from './TokenRefresherActions';

const initalState = {
  account: getAccount(),
  errors: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  const metadata = getApiMetaData(payload);
  switch (type) {
    case `${REFRESH_TOKEN}_LOADING`: {
      return { ...state, loading: true };
    }
    case REFRESH_TOKEN: {
      const { token, refreshToken } = metadata || {};
      const account = token ? getAccount() : null;
      setToken(token);
      setRefreshToken(refreshToken);
      setAccount(account);
      return { ...state, loading: false, account };
    }
    default: {
      return state;
    }
  }
}
