import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import Constants from "expo-constants";
import useFavoriteSystem from "../hooks/useFavoriteSystem";
import { LinearGradient } from "expo-linear-gradient";
import Title from "../components/Title";
import { colors } from "../constants/colors";
import DrinkShortInfo from "../components/DrinkShortInfo";
import { parseIngredientsData } from "../utils/parseIngredientsData";
import IngredientCard from "../components/IngredientCard";

const Drink = () => {
  const [drink, setDrink] = useState();

  const favoriteDrinks = useSelector((state) => state.favoriteDrinks.value);

  const navigation = useNavigation();
  const route = useRoute();

  const { handleFavorite, favoriteState } = useFavoriteSystem(
    route.params.id,
    route.params.isFavorite
  );

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

  const ingredients = drink ? parseIngredientsData(drink) : [];
  console.log(ingredients);

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: drink?.strDrinkThumb }} style={styles.image} />
      </View>
      <View style={styles.goBackContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.iconBox}>
          <Ionicons name={"arrow-back"} size={25} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={styles.favoriteContainer}>
        <TouchableOpacity onPress={handleFavorite} style={styles.iconBox}>
          <Ionicons
            name={favoriteState ? "heart" : "heart-outline"}
            size={25}
            color={"white"}
          />
        </TouchableOpacity>
      </View>

      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#2e0f42", "#0f0e15"]}
        style={styles.gradient}
      >
        <Title text={drink?.strDrink} fSize={25} />
        <View style={styles.shortInfoContainer}>
          <DrinkShortInfo
            title="Category"
            value={drink && drink.strCategory.split(" ")[0]}
          />
          <DrinkShortInfo
            title="Glass"
            value={drink && drink.strGlass.split(" ")[0]}
            extraStyle={{
              borderLeftWidth: 2,
              borderLeftColor: "rgba(120, 120, 120, 0.5)",
            }}
          />
          <DrinkShortInfo
            title="Type"
            value={drink?.strAlcoholic}
            extraStyle={{
              borderLeftWidth: 2,
              borderLeftColor: "rgba(120, 120, 120, 0.5)",
            }}
          />
        </View>
        <View style={styles.ingredientsTitleContainer}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <Text style={styles.itemsLength}>{ingredients.length} items</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={ingredients}
            keyExtractor={(item) => item.ingredient + item.measure}
            renderItem={({ item, index }) => (
              <IngredientCard
                ingredient={item.ingredient}
                measure={item.measure}
                isLastItem={index === ingredients.length - 1}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.ingredientsTitleContainer}>
          <Text style={styles.ingredientsTitle}>Instructions</Text>
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>{drink?.strInstructions}</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Drink;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  goBackContainer: {
    marginTop: Constants.statusBarHeight,
    position: "absolute",
    top: 30,
    left: 30,
    backgroundColor: "rgba(0,0,0,0.3)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
  },
  favoriteContainer: {
    marginTop: Constants.statusBarHeight,
    position: "absolute",
    top: 30,
    right: 30,
    backgroundColor: "rgba(0,0,0, 0.3)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 500,
  },
  gradient: {
    flex: 1,
    marginTop: -40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  shortInfoContainer: {
    width: "100%",
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  ingredientsTitleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  ingredientsTitle: {
    fontSize: 17,
    color: colors.WHITE,
  },
  itemsLength: {
    fontSize: 13,
    color: "rgba(163, 163, 163, 0.7)",
  },
  instructionsContainer: {
    backgroundColor: "rgba(37,30,44,0.8)",
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
  },
  instructions: {
    color: colors.WHITE,
  },
});
