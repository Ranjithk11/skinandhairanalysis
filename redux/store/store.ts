"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { analysisApi } from "../api/analysisApi";
import {analysisSlice} from "../reducers/analysisSlice";
import { authApi } from "../api/authApi";
const rootReducer = combineReducers({
  [analysisApi.reducerPath]: analysisApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  analysisSlice: analysisSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([analysisApi.middleware,authApi.middleware]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
