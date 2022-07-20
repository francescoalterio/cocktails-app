import { configureStore } from "@reduxjs/toolkit";
import randomDrinksReducer from "./slices/randomDrinksSlice";

export default configureStore({
  reducer: {
    randomDrinks: randomDrinksReducer,
  },
});
