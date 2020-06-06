import { getApiData, getApiErrors, getApiMetaData } from '../../../helpers/api';
import { LINK_CREATE, LINK_FETCH } from './LinkActions';

const initalState = {
  link: null,
  links: [],
  errors: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  const data = getApiData(payload);
  const metadata = getApiMetaData(payload);
  const errors = getApiErrors(payload);

  switch (type) {
    case `${LINK_CREATE}_LOADING`:
    case `${LINK_FETCH}_LOADING`: {
      return { ...state, loading: true };
    }
    case LINK_CREATE: {
      if (errors) {
        return { ...state, loading: false, errors };
      }
      return { ...state, errors, loading: false, link: data };
    }
    case LINK_FETCH: {
      if (errors) {
        return { ...state, loading: false, errors };
      }
      return { ...state, errors, loading: false, links: data };
    }
    default: {
      return state;
    }
  }
}
