import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VerticalBarLeft = () => {
  const navigation = useNavigation();

  const cocktailNavigate = () => {
    navigation.navigate("Cocktail");
  };
  const longNavigate = () => {
    navigation.navigate("Long");
  };
  const nonAlcoholNavigate = () => {
    navigation.navigate("Non alcohol");
  };

  return (
    <View style={[styles.container]}>
      <TouchableHighlight
        onPress={cocktailNavigate}
        style={[styles.button, { borderLeftColor: "#fdde69", zIndex: 30 }]}
      >
        <View style={styles.infoBox}>
          <Icon name={"glass-martini-alt"} size={25} color={"black"} />
          <Text style={[styles.text, { color: "black" }]}>Cocktail</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={longNavigate}
        style={[
          styles.button,
          { borderLeftColor: "#20212c", zIndex: 20, top: -15 },
        ]}
      >
        <View style={styles.infoBox}>
          <Icon name={"wine-glass-alt"} size={25} color={"gray"} />
          <Text style={[styles.text]}>Long</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={nonAlcoholNavigate}
        style={[
          styles.button,
          { borderLeftColor: "#16151c", zIndex: 10, top: -30 },
        ]}
      >
        <View style={styles.infoBox}>
          <Ionicons name={"cafe-outline"} size={25} color={"gray"} />
          <Text style={[styles.text]}>Non Alcohol</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "nowrap",
    position: "absolute",
    left: 0,
  },
  button: {
    width: 0,
    height: 120,
    borderTopWidth: 25,
    borderTopColor: "transparent",
    borderBottomWidth: 25,
    borderBottomColor: "transparent",
    borderLeftWidth: 55,
    position: "relative",
  },
  infoBox: {
    position: "absolute",
    left: -55,
    alignItems: "center",
    width: 55,
    height: 70,
    justifyContent: "center",
  },
  text: {
    fontSize: 11,
    color: "gray",
    textAlign: "center",
    marginTop: 5,
  },
});

export default VerticalBarLeft;
