import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { locationReducer } from "./state/location";

const rootReducer = combineReducers({ locationReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
