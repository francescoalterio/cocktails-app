import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import VerticalBarLeft from "../components/VerticalBarLeft";
import Constants from "expo-constants";
import Title from "../components/Title";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";
import DrinkCard from "../components/DrinkCard";

const NonAlcoholListScreen = () => {
  const nonList = useSelector((state) => state.nonList.value);
  return (
    <BackgroundGradient>
      <View
        style={[styles.container, { paddingTop: Constants.statusBarHeight }]}
      >
        <VerticalBarLeft
          cocktailConf={{ borderLeftColor: colors.DRAK_GRAY, zIndex: 10 }}
          longConf={{ borderLeftColor: colors.GRAY, zIndex: 20, top: -15 }}
          nonConf={{ borderLeftColor: colors.GOLD, zIndex: 30, top: -30 }}
        />
        <Title text="Choose your drink" flexHeight={3} fSize={45} mLeft={20} />
        <View style={styles.listContainer}>
          <FlatList
            data={nonList}
            renderItem={({ item }) => (
              <DrinkCard
                key={item.id}
                name={item.strDrink}
                id={item.idDrink}
                imgLink={item.strDrinkThumb}
                isFavorite={item.isFavorite}
                size="large"
              />
            )}
            keyExtractor={(item) => item.idDrink + item.isFavorite}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </BackgroundGradient>
  );
};

export default NonAlcoholListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
    paddingLeft: 30,
  },
});
