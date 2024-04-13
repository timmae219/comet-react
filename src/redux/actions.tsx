import { AsyncThunkAction } from "@reduxjs/toolkit";
import { GET_POPULAR_POSTS } from "./actionTypes";
import { fetchPosts } from "./reducers/posts";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";
import Post from "../models/post";

export class Action {
    type: string;
    payload: object;

    constructor(type: string, payload: object){
        this.type = type;
        this.payload = payload;
    }
}

export const getPopularPosts = () => (
    fetchPosts()
);