import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CocktailGlassListScreen from "./CocktailGlassListScreen";
import LongGlassListScreen from "./LongGlassListScreen";
import NonAlcoholListScreen from "./NonAlcoholListScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: "none" }}>
      <Stack.Screen
        name="Cocktail"
        component={CocktailGlassListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Long"
        component={LongGlassListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Non alcohol"
        component={NonAlcoholListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
