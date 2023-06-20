import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentValue: 0,
};

export const stepIndicatorSlice = createSlice({
  name: "stepIndicator",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentValue += 1;
    },
    decrement: (state) => {
      state.currentValue -= 1;
    },
  },
});

export const { increment, decrement } = stepIndicatorSlice.actions;
export default stepIndicatorSlice.reducer;
