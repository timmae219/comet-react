import { configureStore } from '@reduxjs/toolkit';
import  postsReducer  from './reducers/posts';

export default configureStore({
  reducer: {
    postsReducer
  }
})