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
import { useFonts } from "expo-font";
import BackgroundGradient from "./components/BackgroundGradient";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    Nanum: require("../assets/fonts/NanumMyeongjo-Regular.ttf"),
  });

  const tabScreenOptions = useTabScreenOptions();

  return loaded ? (
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
  ) : (
    <BackgroundGradient />
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
