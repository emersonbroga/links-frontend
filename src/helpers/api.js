import axios from 'axios';
import { get } from './content';
import { getToken, getRefreshToken } from './account';

const getHeaders = () => {
  return {
    Authorization: `Bearer ${getToken()}`,
  };
};

export const apiRefreshToken = () => {
  const url = getApiUrl('/auth/refresh');
  const refreshToken = getRefreshToken();
  const options = {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  if (!refreshToken) return Promise.resolve({});
  return axios.post(url, {}, options);
};

export const getApiUrl = (path) => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};

export const apiGet = (path, params = {}) => {
  const url = getApiUrl(path);
  const options = { headers: getHeaders() };
  return axios.get(url, options);
};

export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = { headers: getHeaders() };
  return axios.post(url, data, options);
};

export const apiPut = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = { headers: getHeaders() };
  return axios.put(url, data, options);
};

export const apiDelete = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = { headers: getHeaders() };
  return axios.delete(url, options);
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
