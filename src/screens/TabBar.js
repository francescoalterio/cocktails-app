import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import FavoritesScreen from "./FavoritesScreen";
import SearchScreen from "./SearchScreen";
import React from "react";

import useTabScreenOptions from "../hooks/useTabScreenOptions";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const tabScreenOptions = useTabScreenOptions();
  return (
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
  );
};

export default TabBar;

const styles = StyleSheet.create({});
