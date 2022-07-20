import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";

const CocktailGlassListScreen = () => {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <VerticalBarLeft />
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Cocktail
        </Text>
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
});

export default CocktailGlassListScreen;
