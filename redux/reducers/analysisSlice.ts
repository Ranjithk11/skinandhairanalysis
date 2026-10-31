"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: null,
  visitCount: null,
  // Dynamic, per-analysis identity. Kept in Redux so a new analysis never
  // carries forward the previous user's id/selfie from the persisted session.
  userId: null,
  selfyImage: null,
  selfyImagePath: null,
  location: null,
};

export const analysisSlice: any = createSlice({
  name: "analysisSlice",
  initialState,
  reducers: {
    saveOnboardingQuestions: (state, action) => {
      state.questions = action.payload;
    },
    updateVisitCount: (state, action) => {
      state.visitCount = action.payload;
    },
    setAnalysisUserId: (state, action) => {
      state.userId = action.payload;
    },
    setAnalysisSelfie: (state, action) => {
      state.selfyImage = action.payload?.selfyImage ?? null;
      state.selfyImagePath = action.payload?.selfyImagePath ?? null;
    },
    setAnalysisLocation: (state, action) => {
      state.location = action.payload;
    },
    resetAnalysisSession: (state) => {
      state.userId = null;
      state.selfyImage = null;
      state.selfyImagePath = null;
      state.location = null;
    },
  },
});

export const {
  saveOnboardingQuestions,
  updateVisitCount,
  setAnalysisUserId,
  setAnalysisSelfie,
  setAnalysisLocation,
  resetAnalysisSession,
} = analysisSlice.actions;
export default analysisSlice.reducer;
