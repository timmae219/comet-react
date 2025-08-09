import React from "react";
import { render, screen, act } from "@testing-library/react";
import PostList from "../PostList";
import Post from "../../../../../models/post";
import "@testing-library/jest-dom";

describe("PostList Component", () => {
    const mockPosts: Post[] = [
        { 
            title: "Post 1", 
            text: "Content 1", 
            authorUserName: "User1", 
            subreddit: "Subreddit1", 
            previewMediaUri: "https://example.com/media1", 
            votingScore: 100, 
            comments: [] 
        },
        { 
            title: "Post 2", 
            text: "Content 2", 
            authorUserName: "User2", 
            subreddit: "Subreddit2", 
            previewMediaUri: "https://example.com/media2", 
            votingScore: 200, 
            comments: []
        },
    ];

    it("should render without crashing", () => {
        act(() => {
            render(<PostList posts={mockPosts} />);
        });

        const postListElement = screen.getByTestId("post-list");
        expect(postListElement).toBeInTheDocument();
    });

    it("should render the correct number of PostContainer components", () => {
        act(() => {
            render(<PostList posts={mockPosts} />);
        });

        const postContainers = screen.queryAllByLabelText("Post Container");
        expect(postContainers).toHaveLength(mockPosts.length);
    });

    it("should pass the correct post data to each PostContainer", () => {
        jest.useFakeTimers();

        act(() => {
            render(<PostList posts={mockPosts} />);
        });

        act(() => {
              jest.advanceTimersByTime(5000);
        });

        mockPosts.forEach((post, _) => {
            const postContainer = screen.getByTestId(`post-container-${post.title}`);
            expect(postContainer).toHaveTextContent(post.title);
        });
    });

    it("should render an empty fragment if no posts are provided", () => {
        act(() => {
            render(<PostList posts={[]} />);
        });

        const postListElement = screen.queryByTestId("post-list");
        expect(postListElement).toBeInTheDocument();
        const postContainers = screen.queryAllByLabelText("Post Container");
        expect(postContainers).toHaveLength(0);
    });
});