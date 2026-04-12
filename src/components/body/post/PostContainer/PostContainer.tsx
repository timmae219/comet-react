import React, { useState, useEffect, JSX } from "react";
import "./PostContainer.css";
import PostHeader from "./PostHeader/PostHeader";
import PostBody from "./PostBody/PostBody";
import Post from "../../../../models/post";
import PostImage from "./PostImage/PostImage";
import { marked } from "marked";

interface PostContainerProps {
  post: Post;
}

export default function PostContainer(props: PostContainerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [parsedContent, setParsedContent] = useState<string>("");

  useEffect(() => {
    const parseContent = async () => {
      const html = await marked.parse(props.post.text || "");
      setParsedContent(html);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      parseContent();
    }, 5000);

    return () => clearTimeout(timer);
  }, [props.post.text]);

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
          {props.post.previewMediaUri && <PostImage url={props.post.previewMediaUri} />}
          <PostBody content={parsedContent} />
        </>
      )}
    </div>
  );
}
