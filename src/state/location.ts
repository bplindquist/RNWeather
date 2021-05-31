import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LocationState = {
  city: string;
};

const initialState: LocationState = {
  city: "Charlotte",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { updateCity } = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
