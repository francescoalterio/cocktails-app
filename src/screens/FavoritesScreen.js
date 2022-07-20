import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";

const FavoritesScreen = () => {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          Favorites
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

export default FavoritesScreen;
