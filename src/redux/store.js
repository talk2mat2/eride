import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersSlice";
import locationSlice from "./reducers/locationSlice";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import historySlice from "./reducers/history";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "historySlice"],
};

const rootReducer = combineReducers({
  user: usersReducer,
  historySlice: historySlice,
  myLocation: locationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
