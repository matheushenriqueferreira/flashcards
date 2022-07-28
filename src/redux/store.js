import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import collectionSlice from "./collectionSlice";
import refreshPageSlice from "./refreshPageSlice";
import flashcardSlice from './flashcardSlice';
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
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: { user: persistedReducer, collection: collectionSlice, refreshPage: refreshPageSlice, flashcard: flashcardSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



