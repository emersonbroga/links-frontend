import { setAccount, setToken, setRefreshToken } from '../../helpers/account';
import { SIGN_UP } from './SignUpActions';

const initialState = {
  account: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      const response = payload ? payload.data : null;
      const account = response ? response.data : null;
      const metadata = payload ? response.metadata : null;

      const token = metadata ? metadata.token : null;
      const refreshToken = metadata ? metadata.refreshToken : null;

      if (account) setAccount(account);
      if (token) setToken(token);
      if (refreshToken) setRefreshToken(refreshToken);

      return { ...initialState, account };
    default:
      return state;
  }
}
