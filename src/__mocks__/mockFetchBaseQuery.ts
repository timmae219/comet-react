import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { mockedPosts } from "../test-data/mockedPosts";

const mockFetchBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args) => {
  if (typeof args === "string" && args === "/hot") {
    return mockedPosts;
  }

  return { error: { status: 404, data: "Not Found" } };
};

export default mockFetchBaseQuery;
