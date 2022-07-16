import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiEnv = {
  develop: process.env.REACT_APP_API_DEV, // TODO add these envs
  production: process.env.REACT_APP_API_PROD,
  localhost: process.env.REACT_APP_API_LOCALHOST,
};

type Env = keyof typeof apiEnv;

export const getApiEnv = (env: Env) => {
  return apiEnv[env];
};

export const getAuthToken = () => ''; // TODO get token from sessionStorage/wherever

export const baseQuery = fetchBaseQuery({
  baseUrl: getApiEnv(process.env.REACT_APP_ENV as Env),
  prepareHeaders: (headers, { getState }) => {
    const authToken = getAuthToken();
    if (authToken) {
      headers.set('authorization', `Bearer ${authToken}`);
    }
    return headers;
  },
});
