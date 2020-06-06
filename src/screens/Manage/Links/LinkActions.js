import { apiPost, apiPut, apiGet } from '../../../helpers/api';
export const LINK_CREATE = 'LINK_CREATE';
export const LINK_FETCH = 'LINK_FETCH';
export const LINK_EDIT = 'LINK_EDIT';
export const LINK_FETCH_SINGLE = 'LINK_FETCH_SINGLE';

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  const payload = apiPost('/link', { ...data, isSocial });
  return { type: LINK_CREATE, payload };
};

export const linkFetch = () => {
  const payload = apiGet('/link/');
  return { type: LINK_FETCH, payload };
};

export const linkFetchSingle = ({ id }) => {
  const payload = apiGet(`/link/${id}`);
  return { type: LINK_FETCH_SINGLE, payload };
};

export const linkEdit = (id, data) => {
  const isSocial = !!data.isSocial;
  const payload = apiPut(`/link/${id}`, { ...data, isSocial });
  return { type: LINK_EDIT, payload };
};
