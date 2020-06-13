import { apiRefreshToken } from '../../helpers/api';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const refresthToken = () => {
  const payload = apiRefreshToken();
  return { type: REFRESH_TOKEN, payload };
};
