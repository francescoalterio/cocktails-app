import { createSlice } from "@reduxjs/toolkit";

const favoriteDrinksSlice = createSlice({
  name: "favoriteDrinks",
  initialState: {
    value: [],
  },
  reducers: {
    setFavoriteDrinks: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setFavoriteDrinks } = favoriteDrinksSlice.actions;

export default favoriteDrinksSlice.reducer;
