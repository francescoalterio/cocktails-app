import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store from "./store";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import BackgroundGradient from "./components/BackgroundGradient";
import TabBar from "./screens/TabBar";
import Drink from "./screens/Drink";

import mobileAds, {
  AppOpenAd,
  TestIds,
  AdEventType,
  useAppOpenAd,
} from "react-native-google-mobile-ads";

const Stack = createNativeStackNavigator();

const adUnitId = TestIds.APP_OPEN;

export default function App() {
  const [fontLoaded] = useFonts({
    Nanum: require("../assets/fonts/NanumMyeongjo-Regular.ttf"),
  });

  const [adViewed, setAdViewed] = useState(false);
  const { load, show, isLoaded, isClosed, error, isOpened } =
    useAppOpenAd(adUnitId);

  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      load();
    });

  useEffect(() => {
    if (isLoaded && !adViewed) show();
  }, [isLoaded]);

  useEffect(() => {
    if (isOpened) setAdViewed(true);
  }, [isOpened]);

  useEffect(() => {
    if (error) setAdViewed(true);
  }, [error]);

  return adViewed ? (
    fontLoaded ? (
      <Provider store={store}>
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
      </Provider>
    ) : (
      <BackgroundGradient />
    )
  ) : (
    <BackgroundGradient>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#fdde69" />
        <Text style={{ marginTop: 20, color: "fdde69" }}>
          Loading Cocktails
        </Text>
      </View>
    </BackgroundGradient>
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
