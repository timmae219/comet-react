import React from "react";
import "./CometBody.css";
import SearchBar from "./search/SearchBar/SearchBar";
import PostList from "./post/PostList/PostList";
import { useGetPopularPostsQuery } from "../../api/postsApi";
import Post from "../../models/post";

export default function CometBody(): JSX.Element {
  const { data, isLoading } = useGetPopularPostsQuery({});
  const posts = data?.data.children.map((child: any) => {
    return Post.fromJson(child.data);
  });

  return (
    <>
      {!isLoading && (
        <div className="Comet-body">
          <SearchBar />
          <PostList posts={posts} />
        </div>
      )}
    </>
  );
}
