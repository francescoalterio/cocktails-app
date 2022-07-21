import { createSlice } from "@reduxjs/toolkit";
import fakeDB from "../../fakeDB";

const nonListSlice = createSlice({
  name: "nonList",
  initialState: {
    value: [],
  },
  reducers: {
    setNonList: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setNonList } = nonListSlice.actions;

export default nonListSlice.reducer;
