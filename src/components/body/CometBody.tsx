import React from "react";
import './CometBody.css';
import SearchBar from "./search/SearchBar/SearchBar";
import PostList from "./post/PostList/PostList";

export default function CometBody (): JSX.Element {
    return (<div className="Comet-body">
        <SearchBar />
        <PostList />
    </div>);
}