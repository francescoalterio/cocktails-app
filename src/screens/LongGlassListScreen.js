import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";
import Constants from "expo-constants";
import Title from "../components/Title";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";
import DrinkCard from "../components/DrinkCard";

const LongGlassListScreen = () => {
  const longList = useSelector((state) => state.longList.value);
  return (
    <BackgroundGradient>
      <View
        style={[styles.container, { paddingTop: Constants.statusBarHeight }]}
      >
        <VerticalBarLeft
          cocktailConf={{ borderLeftColor: colors.GRAY, zIndex: 20 }}
          longConf={{ borderLeftColor: colors.GOLD, zIndex: 30, top: -15 }}
          nonConf={{ borderLeftColor: colors.GRAY, zIndex: 20, top: -30 }}
        />
        <Title text="Choose your drink" />
        <View style={styles.listContainer}>
          <FlatList
            data={longList}
            renderItem={({ item }) => (
              <DrinkCard
                name={item.strDrink}
                id={item.idDrink}
                imgLink={item.strDrinkThumb}
                isFavorite={item.isFavorite}
              />
            )}
            keyExtractor={(item) => item.idDrink + item.strDrink}
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
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
    paddingLeft: 30,
  },
});

export default LongGlassListScreen;
