import postsReducer, { fetchPosts } from "../../reducers/posts";
import { PayloadAction } from "@reduxjs/toolkit";
import Post from "../../../models/post";

// Mocking Post model
const mockPosts = [
  new Post('Post Title', 'user', 'subreddit', 'Post content', null, 10, []),
];

describe("Posts Reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      posts: [],
      status: 'idle',
      error: null,
    };

    const action = { type: 'UNKNOWN_ACTION' };
    const state = postsReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it("should set status to 'loading' when fetchPosts is pending", () => {
    const action = { type: fetchPosts.pending.type };
    const state = postsReducer(undefined, action);
    expect(state.status).toBe('loading');
  });

  it("should set status to 'succeeded' and update posts when fetchPosts is fulfilled", () => {
    const action: PayloadAction<Post[]> = { type: fetchPosts.fulfilled.type, payload: mockPosts };
    const state = postsReducer({ posts: [], status: 'loading', error: null }, action);
    expect(state.status).toBe('succeeded');
    expect(state.posts).toEqual(mockPosts);
  });

  it("should set status to 'failed' and set error message when fetchPosts is rejected", () => {
    const action = { type: fetchPosts.rejected.type, error: { message: "Error fetching posts" } };
    const state = postsReducer({ posts: [], status: 'loading', error: null }, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe('Error fetching posts');
  });

  it("should set status to 'failed' and set error message to null when fetchPosts is rejected and no error message is specified", () => {
    const action = { type: fetchPosts.rejected.type, error: { message: null } };
    const state = postsReducer({ posts: [], status: 'loading', error: null }, action);
    expect(state.status).toBe('failed');
    expect(state.error).toBe(null);
  });
});
