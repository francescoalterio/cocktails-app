import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { colors } from "../constants/colors";

const useSTabScreenOptions = () => {
  const setIconTabBar = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "HomeTab") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "FavoritesTab") {
        iconName = focused ? "heart" : "heart-outline";
      } else if (route.name === "SearchTab") {
        iconName = focused ? "search" : "search-outline";
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: colors.GOLD,
    tabBarInactiveTintColor: colors.LIGHT_GRAY,
    tabBarStyle: {
      position: "absolute",
      bottom: 30,
      marginHorizontal: 40,
      height: 60,
      backgroundColor: "rgba(47,46,49,0.7)",
      borderRadius: 10,
      border: 0,
      borderTopWidth: 0,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: "rgba(0,0,0,0)",
    },
    tabBarLabel: () => {
      return null;
    },
  });

  return setIconTabBar;
};

export default useSTabScreenOptions;
