import {render} from "@testing-library/react";
import React from "react";
import CometBody from "../CometBody";
import {useGetPopularPostsQuery} from "../../../api/postsApi";

jest.mock("../../../api/postsApi", () => ({
    __esModule: true,
    useGetPopularPostsQuery: jest.fn(),
}));

const mockUseGetPopularPostsQuery =
    useGetPopularPostsQuery as jest.MockedFunction<typeof useGetPopularPostsQuery>;

describe("Comet Body Component Tests", () => {
    beforeEach(() => {
        mockUseGetPopularPostsQuery.mockReturnValue({
            data: {
                data: {
                    children: [
                        {
                            data: {
                                title: "Mock Post",
                                author: "mockUser",
                                subreddit_name_prefixed: "r/mock",
                                selftext_html: "Mock content",
                                preview: {
                                    images: [
                                        {source: {url: "http://example.com/mock-image.jpg"}},
                                    ],
                                },
                                ups: 100,
                            },
                        }
                    ]
                }
            },
            isLoading: false,
        } as any);
    });

    it("Renders CometBody correctly", () => {
        render(<CometBody/>);
    });
});