import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Drink = () => {
  const [drink, setDrink] = useState();

  const favoriteDrinks = useSelector((state) => state.favoriteDrinks.value);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params.isFavorite) {
      const favoriteDrink = favoriteDrinks.find(
        (x) => x.idDrink === route.params.id
      );
      setDrink(favoriteDrink);
    } else {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
      )
        .then((res) => res.json())
        .then((result) => setDrink(result.drinks[0]));
    }
  }, [route.params]);

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>Drink</Text>
      <Button title="Go back" onPress={handleGoBack} />
      <Text>{drink?.strDrink}</Text>
    </View>
  );
};

export default Drink;

const styles = StyleSheet.create({});
