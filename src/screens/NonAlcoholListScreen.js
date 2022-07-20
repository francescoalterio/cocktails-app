import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";

const NonAlcoholListScreen = () => {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <VerticalBarLeft />
        <Text>NonAlcoholListScreen</Text>
      </View>
    </BackgroundGradient>
  );
};

export default NonAlcoholListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
