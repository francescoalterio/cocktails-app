import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";
import Constants from "expo-constants";
import Title from "../components/Title";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";
import DrinkCard from "../components/DrinkCard";

const CocktailGlassListScreen = () => {
  const cocktailsList = useSelector((state) => state.cocktailsList.value);

  return (
    <BackgroundGradient>
      <View
        style={[styles.container, { paddingTop: Constants.statusBarHeight }]}
      >
        <VerticalBarLeft
          cocktailConf={{ borderLeftColor: colors.GOLD, zIndex: 30 }}
          longConf={{ borderLeftColor: colors.GRAY, zIndex: 20, top: -15 }}
          nonConf={{ borderLeftColor: colors.DRAK_GRAY, zIndex: 10, top: -30 }}
        />
        <Title text="Choose your drink" />
        <View style={styles.listContainer}>
          <FlatList
            data={cocktailsList}
            renderItem={({ item }) => (
              <DrinkCard
                key={item.id}
                name={item.strDrink}
                id={item.idDrink}
                imgLink={item.strDrinkThumb}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 8,
    alignItems: "center",
    marginLeft: 55,
    paddingLeft: 30,
  },
});

export default CocktailGlassListScreen;
("vlue");
