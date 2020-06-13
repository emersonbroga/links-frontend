import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken, getTokenExpiration, getAccount } from '../../helpers/account';
import { refresthToken } from './TokenRefresherActions';

const TokenRefresher = ({ account, refresthToken, loading }) => {
  const TRESHOLD = 30;

  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpiration(token);
    const secondsToExpire = expires - Date.now() / 1000;

    return secondsToExpire;
  };
  const hasAccount = !!account;

  useEffect(() => {
    if (hasAccount) {
      if (loading) return;
      const seconds = calculate();
      if (seconds < TRESHOLD) refresthToken();
      const intervalTime = (seconds - TRESHOLD) * 1000;
      setTimeout(refresthToken, intervalTime);
    }
  }, [account, loading, refresthToken]);
  return null;
};

const mapStateToProps = (state) => {
  return {
    account: state.tokenRefresher.account,
    errors: state.tokenRefresher.errors,
    loading: state.tokenRefresher.loading,
  };
};

export default connect(mapStateToProps, { refresthToken })(TokenRefresher);
