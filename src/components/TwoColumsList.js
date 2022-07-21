import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import DrinkCard from "./DrinkCard";

const twoColumsList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <DrinkCard
            name={item.strDrink}
            id={item.idDrink}
            imgLink={item.strDrinkThumb}
            isFavorite={item.isFavorite}
            index={index}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.idDrink + item.strDrink}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
});

export default twoColumsList;
