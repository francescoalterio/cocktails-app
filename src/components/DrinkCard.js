import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/colors";
import useFavoriteSystem from "../hooks/useFavoriteSystem";

const DrinkCard = ({ id, name, imgLink, size, isFavorite }) => {
  const { handleFavorite } = useFavoriteSystem(id, isFavorite);

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
        <TouchableOpacity onPress={handleFavorite} style={styles.iconBox}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
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
