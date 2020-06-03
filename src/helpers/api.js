import axios from 'axios';
import { get } from './content';

export const getApiUrl = (path) => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};

export const apiGet = (path, params = {}) => {
  const url = getApiUrl(path);
  return axios.get(url);
};

export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path);
  return axios.post(url, data);
};

export const getApiData = (payload) => {
  return get(payload, 'data.data', null);
};

export const getApiMetaData = (payload) => {
  return get(payload, 'data.metadata', null);
};

export const getApiErrors = (payload) => {
  return get(payload, 'response.data.metadata.errors', null);
};
