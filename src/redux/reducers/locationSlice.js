import { createSlice } from "@reduxjs/toolkit";
import { AsyncRemove } from "../../helpers";

const initialState = {
  myLocation: null,
  savedLocation: [],
  nearbyDrivers: [],
  myCity: null,
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
    setMyCity: (state, action) => {
      state.myCity = action.payload;
    },
    setDestination: (state, action) => {
      state.myDestination = action.payload;
    },
   
    addNearbyDrivers: (state, action) => {
      // console.log("called")
      if (state.nearbyDrivers.length > 0) {
        let exist = state.nearbyDrivers.findIndex(
          (item) => item.user_id == action.payload?.user_id
        );
        if (exist != -1) {
          let prevLocation = state.nearbyDrivers[exist];
          prevLocation.longitude = action.payload.longitude;
          prevLocation.latitude = action.payload.latitude;
          state.nearbyDrivers[exist] = prevLocation;
        } else {
          state.nearbyDrivers.push(action.payload);
        }
      } else {
        state.nearbyDrivers.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMylocation, setDestination, addNearbyDrivers,setDestinatio} =
  locationSlice.actions;

export default locationSlice.reducer;
