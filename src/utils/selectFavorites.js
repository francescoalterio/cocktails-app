import AsyncStorage from "@react-native-async-storage/async-storage";

export const selectFavorites = async (data) => {
  const favoriteDrinks = await AsyncStorage.getItem("favoriteDrinks");

  if (favoriteDrinks) {
    const favoriteDrinksParsed = JSON.parse(favoriteDrinks);
    const favoritesFound = data.map((drink) => {
      const founded = favoriteDrinksParsed.find((x) => {
        return x.idDrink === drink.idDrink;
      });

      return { ...drink, isFavorite: founded ? true : false };
    });
    return favoritesFound;
  } else {
    await AsyncStorage.setItem("favoriteDrinks", JSON.stringify([]));
    return data;
  }
};
