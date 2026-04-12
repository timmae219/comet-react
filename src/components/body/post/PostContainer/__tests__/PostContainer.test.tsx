import React from "react";
import { render, screen, act } from "@testing-library/react";
import PostContainer from "../PostContainer";
import "@testing-library/jest-dom";
import { POST_LOADING_TIME } from "../../../../constants";

describe("PostContainer Component Tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  const dummyPost = {
    title: "Test Post",
    authorUserName: "testUser",
    subreddit: "r/testSubreddit",
    text: "This is a test post",
    previewMediaUri: "https://example.com/image.jpg",
    votingScore: 42,
    comments: [],
  };

  it("displays loading state initially", () => {
    render(<PostContainer post={dummyPost} />);

    const containerElement = screen.getByRole("main", { hidden: true });
    expect(containerElement).toHaveClass("Post-container-loading");
  });

  it("displays content after loading time elapses", async () => {
    render(<PostContainer post={dummyPost} />);

    await act(async () => {
      jest.advanceTimersByTime(POST_LOADING_TIME);
    });

    const containerElement = screen.getByRole("main", { hidden: true });
    expect(containerElement).toHaveTextContent("Test Post");
    expect(containerElement).toHaveClass("Post-container");
  });

  it("displays empty content if post text is falsy", async () => {
    const postWithFalsyText = { ...dummyPost, text: "" };
    render(<PostContainer post={postWithFalsyText} />);

    await act(async () => {
      jest.advanceTimersByTime(POST_LOADING_TIME);
    });

    const containerElement = screen.getByTestId('post-body');
    expect(containerElement.firstChild).toBeEmptyDOMElement();
    expect(containerElement).toHaveClass("Post-body");});
});
