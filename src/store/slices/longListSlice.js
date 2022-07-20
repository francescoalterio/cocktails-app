import { createSlice } from "@reduxjs/toolkit";
import fakeDB from "../../fakeDB";

const longListSlice = createSlice({
  name: "longList",
  initialState: {
    value: fakeDB,
  },
  reducers: {
    setLongList: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setLongList } = longListSlice.actions;

export default longListSlice.reducer;
