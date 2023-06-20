import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  amount: 0,
};

export const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setName, setAmount } = donationSlice.actions;
export default donationSlice.reducer;
