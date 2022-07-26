import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import Title from "../components/Title";
import Constants from "expo-constants";
import TwoColumsList from "../components/TwoColumsList";
import { useSelector } from "react-redux";
import { colors } from "../constants/colors";

const FavoritesScreen = () => {
  const favoriteDrinks = useSelector((state) => state.favoriteDrinks.value);
  return (
    <BackgroundGradient>
      <View
        style={[styles.container, { paddingTop: Constants.statusBarHeight }]}
      >
        <Title text="My favorites" flexHeight={2} fSize={40} mLeft={25} />
        <View style={styles.listContainer}>
          {favoriteDrinks.length > 0 ? (
            <TwoColumsList data={favoriteDrinks} />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: colors.WHITE, fontSize: 18, paddingBottom: 90 }}
              >
                You don't have favorite drinks
              </Text>
            </View>
          )}
        </View>
      </View>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 8,
  },
});

export default FavoritesScreen;
