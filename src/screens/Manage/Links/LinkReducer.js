import { getApiData, getApiErrors } from '../../../helpers/api';
import { LINK_CREATE, LINK_EDIT, LINK_FETCH, LINK_FETCH_SINGLE, LINK_DELETE, LINK_DELETE_ALERT } from './LinkActions';

const initalState = {
  loading: false,
  link: null,
  remove: null,
  links: [],
  errors: {},
  redirectBack: false,
  refresh: false,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  const data = getApiData(payload);
  const errors = getApiErrors(payload);
  if (errors) {
    return { ...state, loading: false, errors };
  }

  switch (type) {
    case `${LINK_CREATE}_LOADING`:
    case `${LINK_FETCH}_LOADING`:
    case `${LINK_EDIT}_LOADING`: {
      return { ...state, loading: true };
    }
    case LINK_CREATE: {
      return { ...state, errors, loading: false, link: data, refresh: true };
    }
    case LINK_EDIT: {
      return { ...state, errors, loading: false, link: null, redirectBack: true, refresh: true };
    }
    case LINK_FETCH: {
      return { ...state, errors, loading: false, links: data, link: null };
    }
    case LINK_FETCH_SINGLE: {
      return { ...state, errors, loading: false, link: data };
    }
    case LINK_DELETE: {
      return { ...state, errors, loading: false, link: null, refresh: true };
    }
    case LINK_DELETE_ALERT: {
      return { ...state, errors, loading: false };
    }
    default: {
      return state;
    }
  }
}
