import { createSlice } from "@reduxjs/toolkit";
import fakeDB from "../../fakeDB";

const randomDrinksSlice = createSlice({
  name: "randomDrinks",
  initialState: {
    value: fakeDB,
  },
  reducers: {
    setRandomDrinks: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setRandomDrinks } = randomDrinksSlice.actions;

export default randomDrinksSlice.reducer;
