import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const IngredientCard = ({ ingredient, measure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ingredient}>{ingredient}</Text>
      <Text style={styles.measure}>{measure}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(37,30,44,0.8)",
    height: 120,
    width: 100,
    borderRadius: 15,
    marginRight: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  ingredient: {
    color: colors.WHITE,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
  },
  measure: {
    color: colors.GOLD,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
  },
});

export default IngredientCard;
