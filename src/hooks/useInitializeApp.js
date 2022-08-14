import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCocktailsList } from "../store/slices/cocktailsListSlice";
import { setLongList } from "../store/slices/longListSlice";
import { setNonList } from "../store/slices/nonListSlice";
import { selectFavorites } from "../utils/selectFavorites";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setFavoriteDrinks } from "../store/slices/favoriteDrinksSlice";

const cocktailsURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

const longURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute";

const nonURL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const useInitializeApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(cocktailsURL)
      .then((res) => res.json())
      .then((result) => {
        selectFavorites(result.drinks).then((result) => {
          const favoritesDesordered = result.sort(function (a, b) {
            return Math.random() - 0.5;
          });
          const drinksSliced = favoritesDesordered.slice(0, 10);
          dispatch(setCocktailsList([...drinksSliced]));
        });
      });

    fetch(longURL)
      .then((res) => res.json())
      .then((result) => {
        selectFavorites(result.drinks).then((result) => {
          const favoritesDesordered = result.sort(function (a, b) {
            return Math.random() - 0.5;
          });
          const drinksSliced = favoritesDesordered.slice(0, 10);
          dispatch(setLongList([...drinksSliced]));
        });
      });

    fetch(nonURL)
      .then((res) => res.json())
      .then((result) => {
        selectFavorites(result.drinks).then((result) => {
          const favoritesDesordered = result.sort(function (a, b) {
            return Math.random() - 0.5;
          });
          const drinksSliced = favoritesDesordered.slice(0, 10);
          dispatch(setNonList([...drinksSliced]));
        });
      });

    AsyncStorage.getItem("favoriteDrinks")
      .then((res) => JSON.parse(res))
      .then((result) => result && dispatch(setFavoriteDrinks(result)));
  }, []);

  return;
};

export default useInitializeApp;
