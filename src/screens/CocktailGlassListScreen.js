import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";
import Constants from "expo-constants";
import Title from "../components/Title";
import { colors } from "../constants/colors";

const CocktailGlassListScreen = () => {
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
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            Cocktail
          </Text>
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
  },
});

export default CocktailGlassListScreen;
("vlue");
