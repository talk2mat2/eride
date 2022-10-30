import { createSlice } from "@reduxjs/toolkit";
import { AsyncRemove } from "../../helpers";

const initialState = {
  locationHistory: [
    {
      bustop: "IKEJA BUS STOPd",
      address: "alen avenue street ",
    },
  ],
  savedLocation: [],
};

export const historySlice = createSlice({
  name: "historySlice",
  initialState,
  reducers: {
    saveLocationHistory(state, action) {
      state.locationHistory.push(action.payload);
    },
    saveDestination: (state, action) => {
      state.savedLocation.push(action.payload);
    },
    deleteDestination: (state, action) => {
      let filtered = state.savedLocation.filter(
        (item) =>
          item.lat !== action.payload.lat && item.lng !== action.payload.lng
      );
      state.savedLocation = filtered;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveLocationHistorym, saveDestination,deleteDestination } = historySlice.actions;

export default historySlice.reducer;
