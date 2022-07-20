import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VerticalBarLeft = ({ cocktailConf, longConf, nonConf }) => {
  const navigation = useNavigation();

  const cocktailColors = {
    icon: cocktailConf.borderLeftColor === "#fdde69" ? "black" : "gray",
    text:
      cocktailConf.borderLeftColor === "#fdde69"
        ? {
            color: "black",
          }
        : { color: "gray" },
  };

  const longColors = {
    icon: longConf.borderLeftColor === "#fdde69" ? "black" : "gray",
    text:
      longConf.borderLeftColor === "#fdde69"
        ? {
            color: "black",
          }
        : { color: "gray" },
  };

  const nonColors = {
    icon: nonConf.borderLeftColor === "#fdde69" ? "black" : "gray",
    text:
      nonConf.borderLeftColor === "#fdde69"
        ? {
            color: "black",
          }
        : { color: "gray" },
  };

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
      <TouchableWithoutFeedback onPress={cocktailNavigate}>
        <View style={[styles.button, cocktailConf]}>
          <View style={styles.infoBox}>
            <Icon
              name={"glass-martini-alt"}
              size={25}
              color={cocktailColors.icon}
            />
            <Text style={[styles.text, cocktailColors.text]}>Cocktail</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={longNavigate}>
        <View style={[styles.button, longConf]}>
          <View style={styles.infoBox}>
            <Icon name={"wine-glass-alt"} size={25} color={longColors.icon} />
            <Text style={[styles.text, longColors.text]}>Long</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={nonAlcoholNavigate}>
        <View style={[styles.button, nonConf]}>
          <View style={styles.infoBox}>
            <Ionicons name={"cafe-outline"} size={25} color={nonColors.icon} />
            <Text style={[styles.text, nonColors.text]}>Non Alcohol</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
