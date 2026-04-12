import React, { JSX } from "react";

interface PostBodyProps {
  content?: string;
}

export default function PostBody(props: PostBodyProps): JSX.Element {
  return (
    <div className="Post-body" dangerouslySetInnerHTML={{ __html: props.content || "" }} data-testid="post-body" />
  );
}