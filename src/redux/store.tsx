import { configureStore, Action } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { ThunkAction } from 'redux-thunk'
import { GET_POPULAR_POSTS } from './actionTypes';

export const store =  configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

store.dispatch({type: GET_POPULAR_POSTS});

export default store;