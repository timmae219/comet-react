import rootReducer from "../rootReducer";
import * as postsReducer from "../reducers/posts";

describe("Root Reducer", () => {
  it("should include the posts reducer under 'posts' key", () => {
    const initialState = rootReducer(undefined, { type: "@@INIT" });
    expect(initialState).toHaveProperty("posts");
  });

  it("should handle posts actions within 'posts' state", () => {
    const action = { type: "posts/fetchPosts/pending" };
    const updatedState = rootReducer(undefined, action);
    expect(updatedState.posts).toBeDefined();
  });
});
