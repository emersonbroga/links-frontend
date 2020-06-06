import { getApiData, getApiErrors, getApiMetaData } from '../../../helpers/api';
import { LINK_CREATE } from './LinkActions';

const initalState = {
  link: null,
  errors: {},
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  const data = getApiData(payload);
  const metadata = getApiMetaData(payload);
  const errors = getApiErrors(payload);

  switch (type) {
    case `${LINK_CREATE}_LOADING`: {
      return { ...state, loading: true };
    }
    case LINK_CREATE: {
      if (errors) {
        return { ...state, loading: false, errors };
      }
      return { ...state, errors, loading: false, link: data };
    }
    default: {
      return state;
    }
  }
}
