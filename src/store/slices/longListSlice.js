import { createSlice } from "@reduxjs/toolkit";
import fakeDB from "../../fakeDB";

const longListSlice = createSlice({
  name: "longList",
  initialState: {
    value: [],
  },
  reducers: {
    setLongList: (state, actions) => {
      state.value = actions.payload;
      console.log(state.value);
    },
  },
});

export const { setLongList } = longListSlice.actions;

export default longListSlice.reducer;
