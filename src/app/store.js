import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import { loadState, saveState } from './components/localStorage';
import throttle from 'lodash.throttle';


export const store = configureStore({
  reducer: {
    posts: postsReducer
  },
  preloadedState: loadState()
});

store.subscribe(
  throttle( () => {
  saveState({
    posts: store.getState().posts
  }    )},1000),
  );

