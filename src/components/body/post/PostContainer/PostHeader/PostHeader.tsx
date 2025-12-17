import React from "react";

interface PostHeaderProps {
  title: string;
}

export default function PostHeader(props: PostHeaderProps): JSX.Element {
  return (
    <div className="Post-header">
      <h2>{props.title}</h2>
    </div>
  );
}
