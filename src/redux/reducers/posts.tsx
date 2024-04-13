import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import PostService from "../../services/postService";
import Post from "../../models/post";

interface PostsState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const postService = new PostService();

// TODO: fix non-serializable error
export const fetchPosts = createAsyncThunk<Post[], void>(
    'posts/fetchPosts',
    async () => {
        try {
            const popularPosts: Post[] = await postService.getPopularPosts();
            return popularPosts;
        } catch (error) {
            throw error;
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    } as PostsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    }
});

export default postsSlice.reducer;