import { Action, getPopularPosts } from "../actions";
import * as postsReducer from "../reducers/posts"; 

describe("Action Class", () => {
  it("should create an action with the correct type and payload", () => {
    const action = new Action("TEST_ACTION", { data: "test data" });
    expect(action.type).toBe("TEST_ACTION");
    expect(action.payload).toEqual({ data: "test data" });
  });
});

describe("getPopularPosts Action Creator", () => {
  it("should call fetchPosts from posts reducer", () => {
    const fetchPostsSpy = jest.spyOn(postsReducer, "fetchPosts");
    getPopularPosts();
    expect(fetchPostsSpy).toHaveBeenCalled();
    fetchPostsSpy.mockRestore();
  });
});
