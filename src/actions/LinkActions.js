import { apiPost } from '../helpers/api';

export const LINK_CREATE = 'LINK_CREATE';

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  const payload = apiPost('/link', { ...data, isSocial });
  return { type: LINK_CREATE, payload };
};
