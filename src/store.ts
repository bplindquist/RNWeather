import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { weatherReducer } from "./state/weather";

const rootReducer = combineReducers({ weatherReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
