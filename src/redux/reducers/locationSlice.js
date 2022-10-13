import { createSlice } from "@reduxjs/toolkit";
import { AsyncRemove } from "../../helpers";

const initialState = {
  myLocation: null,
  myBustop1: null,
  myBustop2: null,
  myDestination: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setMylocation: (state, action) => {
      state.myLocation = action.payload;
    },
    setDestination: (state, action) => {
      state.myDestination = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMylocation, setDestination } = locationSlice.actions;

export default locationSlice.reducer;
