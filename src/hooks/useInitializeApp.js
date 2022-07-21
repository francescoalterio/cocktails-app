import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCocktailsList } from "../store/slices/cocktailsListSlice";
import { setLongList } from "../store/slices/longListSlice";
import { setNonList } from "../store/slices/nonListSlice";
import { selectFavorites } from "../utils/selectFavorites";

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
          dispatch(setCocktailsList([...favoritesDesordered]));
        });
      });

    fetch(longURL)
      .then((res) => res.json())
      .then((result) => {
        selectFavorites(result.drinks).then((result) => {
          const favoritesDesordered = result.sort(function (a, b) {
            return Math.random() - 0.5;
          });
          dispatch(setLongList([...favoritesDesordered]));
        });
      });

    fetch(nonURL)
      .then((res) => res.json())
      .then((result) => {
        selectFavorites(result.drinks).then((result) => {
          const favoritesDesordered = result.sort(function (a, b) {
            return Math.random() - 0.5;
          });
          dispatch(setNonList([...favoritesDesordered]));
        });
      });
  }, []);

  return;
};

export default useInitializeApp;
