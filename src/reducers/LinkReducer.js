import {
  LINK_CREATE,
  LINK_LIST,
  LINK_GET,
  LINK_UPDATE,
  LINK_TO_REMOVE,
  LINK_REMOVE,
  LINK_CLEAR,
} from '../actions/LinkActions';

const initialState = {
  link: null,
  links: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LINK_CREATE: {
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;
      return { ...state, link };
    }
    case LINK_UPDATE: {
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;
      return { ...state, link };
    }
    case LINK_GET: {
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;
      return { ...state, link };
    }
    case LINK_LIST: {
      const response = payload ? payload.data : null;
      const links = response ? response.data : null;
      return { ...state, links };
    }
    case LINK_TO_REMOVE: {
      return { ...state, linkToRemove: payload };
    }
    case LINK_REMOVE: {
      const links = state.links.filter((link) => link.id !== state.linkToRemove.id);
      return { ...state, linkToRemove: null, links };
    }
    case LINK_CLEAR: {
      return { ...state, link: null };
    }
    default: {
      return state;
    }
  }
}
