import { combineReducers } from "@reduxjs/toolkit";

import {fetchPosts} from "./reducers/posts";

const rootReducer = combineReducers({
    posts: fetchPosts
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;