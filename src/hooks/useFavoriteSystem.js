import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux/";
import { selectFavorites } from "../utils/selectFavorites";
import { setCocktailsList } from "../store/slices/cocktailsListSlice";
import { setLongList } from "../store/slices/longListSlice";
import { setNonList } from "../store/slices/nonListSlice";

const useFavoriteSystem = (id, isFavorite) => {
  const cocktailsList = useSelector((state) => state.cocktailsList.value);
  const longList = useSelector((state) => state.longList.value);
  const nonList = useSelector((state) => state.nonList.value);

  const dispatch = useDispatch();

  const setGlobalStates = async (data) => {
    await AsyncStorage.setItem("favoriteDrinks", JSON.stringify(data));

    const cocktailFavoriteFounded = await selectFavorites(cocktailsList);
    const longFavoriteFounded = await selectFavorites(longList);
    const nonFavoriteFounded = await selectFavorites(nonList);

    dispatch(setCocktailsList(cocktailFavoriteFounded));
    dispatch(setLongList(longFavoriteFounded));
    dispatch(setNonList(nonFavoriteFounded));
  };

  const handleFavorite = async () => {
    const favoriteDrinks = await AsyncStorage.getItem("favoriteDrinks");
    const drinksParsed = JSON.parse(favoriteDrinks);
    if (!isFavorite) {
      const drink = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const drinkParsed = await drink.json();
      const addNewDrink = [...drinksParsed, drinkParsed.drinks[0]];
      setGlobalStates(addNewDrink);
    } else {
      const removeFavorite = drinksParsed.filter((x) => x.idDrink !== id);
      setGlobalStates(removeFavorite);
    }
  };

  return { handleFavorite };
};

export default useFavoriteSystem;
