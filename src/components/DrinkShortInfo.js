import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DrinkShortInfo = ({ title, value, extraStyle }) => {
  return (
    <View style={[styles.shorInfo, extraStyle]}>
      <Text style={styles.titleShortInfo}>{title}</Text>
      <Text style={styles.valueShortInfo}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shorInfo: {
    alignItems: "center",
    width: "33%",
  },
  titleShortInfo: {
    fontSize: 13,
    color: "rgba(163, 163, 163, 0.8)",
    fontWeight: "bold",
  },
  valueShortInfo: {
    fontSize: 15,
    color: "rgba(253, 222, 105, 0.9)",
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default DrinkShortInfo;
