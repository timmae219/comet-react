import PostService from "../../services/postService";
import Post from "../../models/post";
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
// import { createAppSlice } from "../store";

const postService = new PostService();

interface PostsState {
    posts: Post[];
}


// TODO: move to a global file for better structure
export const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const postsSlice = createAppSlice({
    name: 'posts',
    initialState: {
        posts: []
    } satisfies PostsState as PostsState,
    reducers: (create) => ({
        fetchPosts: create.asyncThunk(async () => {
            const popular_posts: Post[] = await postService.getPopularPosts();
            console.log(popular_posts);
            return popular_posts;
        },
            {
                fulfilled: (state, action) => {
                    state = { posts: action.payload };
                }
            }
        )
    })
});

export const { fetchPosts } = postsSlice.actions;