import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "./api.types";

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts/'
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], { limit: number, start: number }>({
      query: ({ limit = 5, start = 0}) => ({
        url: '/',
        params: {
          _limit: limit,
          _start: start,
        }
      })
    }),
    getPostById: builder.query<Post, number>({
      query: (id: number = 1) => `${id}`
    }),
  })
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi