import store, { RootState, AppDispatch } from "../store";

describe("Store Configuration", () => {
  it("should have a posts key in initial state", () => {
    const state = store.getState();
    expect(state).toHaveProperty("posts");
  });

  it("should have RootState and AppDispatch types", () => {
    const testRootState: RootState = store.getState();
    const testAppDispatch: AppDispatch = store.dispatch;

    expect(testRootState.posts).toBeDefined();
    expect(typeof testAppDispatch).toBe("function");
  });
});
