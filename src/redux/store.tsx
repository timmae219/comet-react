import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { fetchPosts } from './reducers/posts';

export const store = configureStore({
  reducer: rootReducer
})

// TODO: dispatch action/thunk correctly
store.dispatch(fetchPosts);

export default store;