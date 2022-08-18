import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store from "./store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import BackgroundGradient from "./components/BackgroundGradient";
import TabBar from "./screens/TabBar";
import Drink from "./screens/Drink";
import AdsGrapper from "./components/AdsGrapper";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Nanum: require("../assets/fonts/NanumMyeongjo-Regular.ttf"),
  });

  return loaded ? (
    <Provider store={store}>
      <AdsGrapper>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="TabBar" component={TabBar} />
            <Stack.Screen name="DrinkScreen" component={Drink} />
          </Stack.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </AdsGrapper>
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
