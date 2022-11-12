import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from '@/modules/example/example.slice';
import themeSwitcherSlice from '@/modules/themeSwitcher/themeSwitcher.slice';
// IMPORT_NEW_SLICE

export const store = configureStore({
  reducer: {
    example: exampleSlice,
    themeSwitcher: themeSwitcherSlice,
    // DECLARE_NEW_SLICE
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
