import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/colors";

const DrinkCard = ({ id, name, imgLink, size }) => {
  return (
    <View style={[styles.container, { width: 250, height: 300 }]}>
      <Image
        source={{ uri: imgLink }}
        style={{ width: 250, height: 300, borderRadius: 20 }}
      />
      <View
        style={{
          width: 250,
          height: 300,
          backgroundColor: "rgba(0,0,0,0.3)",
          position: "absolute",
          borderRadius: 20,
        }}
      ></View>
      <View style={styles.infoContainer}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.iconBox}>
          <Ionicons name={"heart-outline"} size={30} color={"white"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    left: 15,
  },
  textBox: {
    width: 190,
    justifyContent: "center",
  },
  iconBox: {
    flex: 2,
  },
  text: {
    color: "white",
    fontSize: 18,
    maxWidth: 150,
  },
});

export default DrinkCard;
