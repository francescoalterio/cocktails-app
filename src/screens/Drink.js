import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
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
          <View style={[styles.shorInfo]}>
            <Text style={styles.titleShortInfo}>Category</Text>
            <Text style={styles.valueShortInfo}>
              {drink && drink.strCategory.split(" ")[0]}
            </Text>
          </View>
          <View
            style={[
              styles.shorInfo,
              {
                borderLeftWidth: 2,
                borderLeftColor: "rgba(120, 120, 120, 0.5)",
              },
            ]}
          >
            <Text style={styles.titleShortInfo}>Glass</Text>
            <Text style={styles.valueShortInfo}>
              {drink && drink.strGlass.split(" ")[0]}
            </Text>
          </View>
          <View
            style={[
              styles.shorInfo,
              {
                borderLeftWidth: 2,
                borderLeftColor: "rgba(120, 120, 120, 0.5)",
              },
            ]}
          >
            <Text style={styles.titleShortInfo}>Type</Text>
            <Text style={styles.valueShortInfo}>{drink?.strAlcoholic}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  shorInfo: {
    alignItems: "center",
    width: "33%",
  },
  titleShortInfo: {
    fontSize: 13,
    color: "rgba(163, 163, 163, 0.8)",
    fontWeight: "bold",
  },
  valueShortInfo: {
    fontSize: 15,
    color: "rgba(253, 222, 105, 0.9)",
    marginTop: 5,
    fontWeight: "bold",
  },
});
