import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WeatherState = {
  location: string;
};

const initialState: WeatherState = {
  location: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const { updateLocation } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;
