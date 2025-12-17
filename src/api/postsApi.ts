import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import mockFetchBaseQuery from "../__mocks__/mockFetchBaseQuery";

const baseQuery =
  process.env.NODE_ENV === "test"
    ? mockFetchBaseQuery
    : fetchBaseQuery({ baseUrl: "https://api.reddit.com" });

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery,
  endpoints: (builder) => ({
    getPopularPosts: builder.query({
      query: () => "/hot",
    }),
  }),
});

export const { useGetPopularPostsQuery } = postsApi;
