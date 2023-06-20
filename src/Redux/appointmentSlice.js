import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  tcKimlik: "",
  tarih: "",
  place: "",
  city: "",
  bloodgrp: "",
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setKimlik: (state, action) => {
      state.tcKimlik = action.payload;
    },
    setTarih: (state, action) => {
      state.tarih = action.payload;
    },
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setBloodGrp: (state, action) => {
      state.bloodgrp = action.payload;
    },
  },
});

export const { setPlace, setCity, setBloodGrp, setName, setKimlik, setTarih } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
