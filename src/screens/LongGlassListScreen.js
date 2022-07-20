import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";

const LongGlassListScreen = () => {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <VerticalBarLeft />
        <Text>LongGlassListScreen</Text>
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

export default LongGlassListScreen;
