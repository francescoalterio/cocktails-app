import { configureStore } from "@reduxjs/toolkit";
import cocktailsListReducer from "./slices/cocktailsListSlice";
import longListReducer from "./slices/longListSlice";
import nonListReducer from "./slices/nonListSlice";
import randomDrinksReducer from "./slices/randomDrinksSlice";

export default configureStore({
  reducer: {
    randomDrinks: randomDrinksReducer,
    cocktailsList: cocktailsListReducer,
    longList: longListReducer,
    nonList: nonListReducer,
  },
});
