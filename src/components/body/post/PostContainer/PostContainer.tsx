import React, { useState, useEffect } from "react";
import "./PostContainer.css";
import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import Post from "../../../../models/post";

interface PostContainerProps {
  post: Post;
}

export default function PostContainer(props: PostContainerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={isLoading ? "Post-container-loading" : "Post-container"}
      data-testid={`post-container-${props.post.title}`}
      role="main"
      aria-label="Post Container"
    >
      {isLoading && <div className="Post-loading">Loading...</div>}
      {!isLoading && (
        <>
          <PostHeader title={props.post.title} />
          <PostBody />
        </>
      )}
    </div>
  );
}
