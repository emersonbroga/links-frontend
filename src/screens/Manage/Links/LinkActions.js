import { apiPost, apiGet } from '../../../helpers/api';
export const LINK_CREATE = 'LINK_CREATE';
export const LINK_FETCH = 'LINK_FETCH';

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  const payload = apiPost('/link', { ...data, isSocial });
  return { type: LINK_CREATE, payload };
};

export const linkFetch = () => {
  const payload = apiGet('/link');
  return { type: LINK_FETCH, payload };
};
