import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const Title = ({ text, flexHeight, fSize, mLeft }) => {
  return (
    <View
      style={{
        width: 250,
        marginLeft: mLeft,
        flex: flexHeight,
        justifyContent: "center",
      }}
    >
      <Text
        style={{ color: colors.WHITE, fontSize: fSize, fontFamily: "Nanum" }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Title;
