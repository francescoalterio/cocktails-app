import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const Title = ({ text }) => {
  return (
    <View
      style={{
        width: 250,
        marginLeft: 20,
        flex: 3,
        justifyContent: "center",
      }}
    >
      <Text style={{ color: colors.WHITE, fontSize: 50, fontFamily: "Nanum" }}>
        {text}
      </Text>
    </View>
  );
};

export default Title;
