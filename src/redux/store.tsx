import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shopReducer, { ShopState } from "./slices/shop";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch,
} from "react-redux";
import { persistReducer, PersistConfig, persistStore } from "redux-persist";
import * as rp from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface RootState {
  shop: ShopState;
}

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["shop"],
} as PersistConfig<RootState>;

const rootReducer = combineReducers({
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          rp.FLUSH,
          rp.REHYDRATE,
          rp.PAUSE,
          rp.PERSIST,
          rp.PURGE,
          rp.REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export default store;
