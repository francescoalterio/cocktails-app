import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import SearchScreen from "./screens/SearchScreen";
import useTabScreenOptions from "./hooks/useTabScreenOptions";

import store from "./store";
import { Provider } from "react-redux";
import CocktailGlassListScreen from "./screens/CocktailGlassListScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const tabScreenOptions = useTabScreenOptions();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={tabScreenOptions}>
          <Tab.Screen
            name="HomeTab"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="FavoritesTab"
            component={FavoritesScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="SearchTab"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
