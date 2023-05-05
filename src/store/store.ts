import { configureStore } from '@reduxjs/toolkit';
import activePageReducer from './reducers/activePageReducer';

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
