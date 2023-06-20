import { configureStore } from "@reduxjs/toolkit";
import donationReducer from "./donationSlice";
import stepIndicatorReducer from "./stepIndicatorSlice";
import appointmentSlice from "./appointmentSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    donation: donationReducer,
    stepIndicator: stepIndicatorReducer, //name convection..1..call it..xxReducer while importing it from xxSlice
    appointment: appointmentSlice, //name convection..2..call it directly xxSlice while importing it from xxSlice
    user: userReducer,
  },
});
