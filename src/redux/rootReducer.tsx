import { combineReducers } from "@reduxjs/toolkit";

import {postsReducer} from "./reducers/posts";

const rootReducer = combineReducers({
    posts: postsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;