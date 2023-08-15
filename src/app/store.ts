import { configureStore } from '@reduxjs/toolkit';
import addLinkReducer from '../features/addLink/model/slice';
import addPictureReducer from '../features/addPicture/model/slice';
import addPersonalDetailsReducer from '../features/addPersonalDetails/model/slice';
import getIdReducer from '../features/getId/model/slice';
import shareLinkReducer from '../features/shareLink/model/slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  addLink: addLinkReducer,
  addPicture: addPictureReducer,
  addPersonalDetails: addPersonalDetailsReducer,
  getId: getIdReducer,
  shareLink: shareLinkReducer,
});

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['addPicture'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
