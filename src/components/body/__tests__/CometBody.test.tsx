import { render } from "@testing-library/react";
import React from "react";
import CometBody from "../CometBody";
import { useGetPopularPostsQuery } from "../../../api/postsApi";
import { mockedPosts } from "../../../test-data/mockedPosts";

jest.mock("../../../api/postsApi", () => ({
  __esModule: true,
  useGetPopularPostsQuery: jest.fn(),
}));

const mockUseGetPopularPostsQuery =
  useGetPopularPostsQuery as jest.MockedFunction<
    typeof useGetPopularPostsQuery
  >;

type HookResult = ReturnType<typeof useGetPopularPostsQuery>;

describe("Comet Body Component Tests", () => {
  beforeEach(() => {
    const result: Pick<HookResult, "data" | "isLoading" | "refetch"> = {
      ...mockedPosts,
      isLoading: false,
      refetch: jest.fn(),
    };

    mockUseGetPopularPostsQuery.mockReturnValue(result as HookResult);
  });

  it("Renders CometBody correctly", () => {
    render(<CometBody />);
  });
});
