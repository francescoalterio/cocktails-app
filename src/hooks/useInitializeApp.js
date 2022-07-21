import React from "react";
import { useDispatch } from "react-redux";
import { setCocktailsList } from "../store/slices/cocktailsListSlice";
import { setLongList } from "../store/slices/longListSlice";
import { setNonList } from "../store/slices/nonListSlice";

const cocktailsURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

const longURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute";

const nonURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const useInitializeApp = () => {
  const dispatch = useDispatch();

  fetch(cocktailsURL)
    .then((res) => res.json())
    .then((result) => dispatch(setCocktailsList(result.drinks)));

  fetch(longURL)
    .then((res) => res.json())
    .then((result) => dispatch(setLongList(result.drinks)));

  fetch(nonURL)
    .then((res) => res.json())
    .then((result) => dispatch(setNonList(result.drinks)));

  return;
};

export default useInitializeApp;
