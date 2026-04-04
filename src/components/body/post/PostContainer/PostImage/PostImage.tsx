import React, { JSX } from "react";
import "./PostImage.css";

interface PostImageProps {
    url: string;
}

export default function PostImage(props: PostImageProps): JSX.Element {
  const decodedUrl = props.url.replace(/&amp;/g, '&');
  return (
    <div className="Post-image">
      <img src={decodedUrl} alt="Post Image" width={250}/>
    </div>
  );
}