import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './utils';
import { LoginUserI } from './type';

/**
 * ResponseType and ParamsType
 * These are just dummy types , feel free to rename however you want
 * This will be deleted as soon as the team are on the same page
 */
type ResponseType = string;
type ParamsType = string;

export const dummyService = createApi({
  reducerPath: 'dummyService',
  baseQuery,
  endpoints: (builder) => ({
    authUser: builder.mutation<LoginUserI['response'], LoginUserI['request']>({
      query(arg) {
        return {
          url: 'auth/login',
          method: 'POST',
          body: arg,
        };
      },
    }),
    getDummyData: builder.query<ResponseType, ParamsType>({
      query: (param) => '/dummy-url',
    }),
    addDummyData: builder.mutation<ResponseType, ParamsType>({
      query(body) {
        return {
          url: '/dummy-url',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useGetDummyDataQuery, useAddDummyDataMutation } = dummyService;
