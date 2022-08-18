import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/colors";
import useFavoriteSystem from "../hooks/useFavoriteSystem";
import { useNavigation } from "@react-navigation/native";
import { ads } from "./AdsGrapper";

const DrinkCard = ({ id, name, imgLink, size, isFavorite, index }) => {
  const { handleFavorite, favoriteState } = useFavoriteSystem(id, isFavorite);

  const navigation = useNavigation();
  const { isLoaded, isClosed, load, show } = useContext(ads);

  const sizeStyles = {
    width: size === "large" ? 250 : "47%",
    height: size === "large" ? 300 : 200,
    marginBottom: size === "large" ? 20 : undefined,
    margin: size === "large" ? undefined : 5,
    marginTop:
      index && index === 1 ? 30 : index % 2 == 0 && index > 0 ? -20 : 5,
  };

  React.useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      navigation.navigate("DrinkScreen", {
        id,
        isFavorite,
      });
    }
  }, [isClosed, navigation]);

  const handlePress = () => {
    if (isLoaded) {
      show();
    } else {
      // No advert ready to show yet
      navigation.navigate("DrinkScreen", {
        id,
        isFavorite,
      });
    }
  };

  return (
    <View style={[styles.container, sizeStyles]}>
      <Image
        source={{ uri: imgLink }}
        style={[{ width: "100%", height: "100%" }, { borderRadius: 20 }]}
      />
      <TouchableOpacity
        onPress={handlePress}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.2)",
          position: "absolute",
          borderRadius: 20,
        }}
      ></TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.textBox}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <TouchableOpacity onPress={handleFavorite} style={styles.iconBox}>
          <Ionicons
            name={favoriteState ? "heart" : "heart-outline"}
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
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 10,
    left: 15,
    width: "100%",
  },
  iconBox: {
    marginRight: 25,
  },
  textBox: {
    justifyContent: "center",
    maxWidth: "60%",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default DrinkCard;
