import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const mockFetchBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args) => {
  if (typeof args === 'string' && args === '/hot') {
    return {
      data: {
        data: {
          children: [
            {
              data: {
                title: "Mock Post",
                author: "mockUser",
                subreddit_name_prefixed: "r/mock",
                selftext_html: "Mock content",
                preview: { images: [{ source: { url: "http://example.com/mock-image.jpg" } }] },
                ups: 100,
              },
            },
            {
              data: {
                title: "Mock Post",
                author: "mockUser",
                subreddit_name_prefixed: "r/mock",
                selftext_html: "Mock content",
                preview: { images: [{ source: { url: "http://example.com/mock-image.jpg" } }] },
                ups: 101,
              },
            },
            {
              data: {
                title: "Mock Post",
                author: "mockUser",
                subreddit_name_prefixed: "r/mock",
                selftext_html: "Mock content",
                preview: { images: [{ source: { url: "http://example.com/mock-image.jpg" } }] },
                ups: 102,
              },
            },
          ],
        },
      },
    };
  }

  return { error: { status: 404, data: 'Not Found' } };
};

export default mockFetchBaseQuery;