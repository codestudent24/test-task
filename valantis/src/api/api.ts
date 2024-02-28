import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import md5 from "md5";
import { getDateTemplate } from "../utils/getDateTemplate";
import { TypeGetIdsParams, TypeGetIdsResponse, TypeGetItemsParams, TypeGetItemsResponse } from "./api.types";

const baseUrl = 'https://api.valantis.store:41000'

const headers = {
  'X-Auth': md5(`Valantis_${getDateTemplate()}`),
  'Content-Type': 'application/json'
}

const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl }), { maxRetries: 10 });

export const api = createApi({
  reducerPath: 'valantisApi',
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getIds: builder.mutation<TypeGetIdsResponse, TypeGetIdsParams>({
      query: (payload) => ({
        url: '/',
        method: 'POST',
        headers,
        body: JSON.stringify({
          action: 'get_ids',
          params: {
            offset: payload.offset || 0,
            limit: payload.limit || 5
          }
        })
      }),
    }),
    getItems: builder.mutation<TypeGetItemsResponse, TypeGetItemsParams>({
      query: (payload) => ({
        url: '/',
        method: 'POST',
        headers,
        body: JSON.stringify({
          action: 'get_items',
          params: {
            ids: payload.ids
          }
        })
      }),
      transformErrorResponse: (response: {status: string | number}) => {
        console.log(`Error on fetching with status ${response.status}`)
        return response.status
      }
    }),
  })
})

export const { useGetIdsMutation, useGetItemsMutation } = api