import React from "react";
import { render, screen, act } from "@testing-library/react";
import PostContainer from "../PostContainer";
import "@testing-library/jest-dom";

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
    act(() => {
      render(<PostContainer post={dummyPost}/>);
    });

    const containerElement = screen.getByRole("main", { hidden: true });
    expect(containerElement).toHaveClass("Post-container-loading");
  });

  it("displays content after loading time elapses", () => {
    act(() => {
      render(<PostContainer post={dummyPost}/>);
    });

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const containerElement = screen.getByRole("main", { hidden: true });
    expect(containerElement).toHaveTextContent("Test Post");
    expect(containerElement).toHaveClass("Post-container");
  });
});
