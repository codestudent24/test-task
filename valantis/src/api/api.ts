import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import md5 from "md5";
import { getDateTemplate } from "../utils/getDateTemplate";
import { TypeFilterParams, TypeGetFieldsBody, TypeGetFieldsParams, TypeGetFieldsResponse, TypeGetIdsParams, TypeGetItemsParams, TypeGetItemsResponse, TypeIdsResponse } from "./api.types";

const baseUrl = 'https://api.valantis.store:41000'

function getHeader() {
  const auth = md5(`Valantis_${getDateTemplate()}`)
  return {
    'X-Auth': auth,
    'Content-Type': 'application/json'
  }
}

const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl }), { maxRetries: 10 });

export const api = createApi({
  reducerPath: 'valantisApi',
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getIds: builder.mutation<TypeIdsResponse, TypeGetIdsParams>({
      query: (payload) => ({
        url: '/',
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
          action: 'get_ids',
          params: {
            offset: payload.offset || 0,
            limit: payload.limit || 50
          }
        })
      }),
    }),
    getItems: builder.mutation<TypeGetItemsResponse, TypeGetItemsParams>({
      query: (payload) => ({
        url: '/',
        method: 'POST',
        headers: getHeader(),
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
    getFields: builder.mutation<TypeGetFieldsResponse, TypeGetFieldsParams>({
      query: (payload) => {
        const { field, offset, limit } = payload
        const bodyObject: TypeGetFieldsBody = {
          action: 'get_fields'
        }
        if (field || offset || limit) {
          const paramsObject: Partial<TypeGetFieldsParams> = {};
          if (field) paramsObject.field = field
          if (offset) paramsObject.offset = offset
          if (limit) paramsObject.limit = limit
          bodyObject.params = paramsObject
        }

        return {
          url: '/',
          method: 'POST',
          headers: getHeader(),
          body: JSON.stringify(bodyObject)
        }
      },
      transformErrorResponse: (response: {status: string | number}) => {
        console.log(`Error on fetching with status ${response.status}`)
        return response.status
      }
    }),
    filter: builder.mutation<TypeIdsResponse, TypeFilterParams>({
      query: (payload) => ({
        url: '/',
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify({
          action: 'filter',
          params: {
            [payload.filterName]: payload.filterValue
          },
        })
      }),
      transformErrorResponse: (response: {status: string | number}) => {
        console.log(`Error on fetching with status ${response.status}`)
        return response.status
      }
    }),
  })
})

export const {
  useGetIdsMutation,
  useGetItemsMutation,
  useGetFieldsMutation,
  useFilterMutation
} = api