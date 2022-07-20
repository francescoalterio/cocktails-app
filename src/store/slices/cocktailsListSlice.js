import { createSlice } from "@reduxjs/toolkit";
import fakeDB from "../../fakeDB";

const cocktailsListSlice = createSlice({
  name: "cocktailsList",
  initialState: {
    value: fakeDB,
  },
  reducers: {
    setCocktailsList: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setCocktailsList } = cocktailsListSlice.actions;

export default cocktailsListSlice.reducer;
