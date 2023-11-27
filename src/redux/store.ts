import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
