import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ text }) => {
  return (
    <View
      style={{
        width: "60%",
        marginLeft: 20,
        flex: 3,
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 50, fontFamily: "Nanum" }}>
        {text}
      </Text>
    </View>
  );
};

export default Title;
