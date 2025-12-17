import React from "react";

import "./PostList.css";
import PostContainer from "../PostContainer/PostContainer";
import Post from "../../../../models/post";

interface PostListProps {
  posts: Post[];
}

export default function PostList(props: PostListProps): JSX.Element {
  return (
    <div data-testid="post-list">
      {props.posts.map((post: Post) => (
        <PostContainer key={post.title} post={post} />
      ))}
    </div>
  );
}
