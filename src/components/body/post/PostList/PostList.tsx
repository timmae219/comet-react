import React from "react";

import './PostList.css';
import PostContainer from "../PostContainer/PostContainer";

export default function PostList (): JSX.Element {    
    return (<div className="Post-list">
        <PostContainer />
    </div>);
}