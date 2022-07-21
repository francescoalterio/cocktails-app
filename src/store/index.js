import { configureStore } from "@reduxjs/toolkit";
import cocktailsListReducer from "./slices/cocktailsListSlice";
import longListReducer from "./slices/longListSlice";
import nonListReducer from "./slices/nonListSlice";
import favoriteDrinksReducer from "./slices/favoriteDrinksSlice";

export default configureStore({
  reducer: {
    cocktailsList: cocktailsListReducer,
    longList: longListReducer,
    nonList: nonListReducer,
    favoriteDrinks: favoriteDrinksReducer,
  },
});
