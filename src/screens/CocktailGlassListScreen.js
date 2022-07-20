import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";

const CocktailGlassListScreen = () => {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <VerticalBarLeft
          cocktailConf={{ borderLeftColor: "#fdde69", zIndex: 30 }}
          longConf={{ borderLeftColor: "#20212c", zIndex: 20, top: -15 }}
          nonConf={{ borderLeftColor: "#16151c", zIndex: 10, top: -30 }}
        />
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
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
  },
});

export default CocktailGlassListScreen;
