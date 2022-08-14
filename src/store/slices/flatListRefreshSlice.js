import { createSlice } from "@reduxjs/toolkit";
import fakeDB from "../../fakeDB";

const flatlistRefreshSlice = createSlice({
  name: "flatListRefresh",
  initialState: {
    value: false,
  },
  reducers: {
    setFlatlistRefresh: (state, actions) => {
      state.value = !state.value;
    },
  },
});

export const { setFlatlistRefresh } = flatlistRefreshSlice.actions;

export default flatlistRefreshSlice.reducer;
