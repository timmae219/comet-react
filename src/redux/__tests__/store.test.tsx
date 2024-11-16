import store, { RootState, AppDispatch } from "../store";

describe("Store Configuration", () => {
  it("should have a posts key in initial state", () => {
    const state = store.getState();
    expect(state).toHaveProperty("posts");
  });

  it("should have RootState and AppDispatch types", () => {
    type StateType = ReturnType<typeof store.getState>;
    type DispatchType = typeof store.dispatch;

    let testRootState: RootState;
    let testAppDispatch: AppDispatch;

    testRootState = store.getState();
    testAppDispatch = store.dispatch;

    expect(testRootState.posts).toBeDefined();
    expect(typeof testAppDispatch).toBe("function");
  });
});
