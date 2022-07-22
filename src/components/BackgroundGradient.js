import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const BackgroundGradient = ({ children }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#2e0f42", "#0f0e15", "#101a25"]}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
