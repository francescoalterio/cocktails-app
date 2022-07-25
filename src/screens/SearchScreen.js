import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import BackgroundGradient from "../components/BackgroundGradient";
import Title from "../components/Title";
import Constants from "expo-constants";
import TwoColumsList from "../components/TwoColumsList";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../constants/colors";

const SearchScreen = () => {
  const [drinks, setDrinks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setDrinks(result.drinks);
      });
  }, []);

  const handleSearch = () => {
    setIsLoading(true);
    setSearchWord(inputValue);
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setDrinks(result.drinks);
      });
  };

  return (
    <BackgroundGradient>
      <View
        style={[styles.container, { paddingTop: Constants.statusBarHeight }]}
      >
        <Title text="Search drink" flexHeight={2} fSize={45} mLeft={25} />
        <View style={styles.inputBox}>
          <TextInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            style={styles.input}
            placeholder="Find any drink..."
            placeholderTextColor={colors.LIGHT_GRAY}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.btnSearch}>
            <Ionicons name={"search"} size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={styles.resultTextBox}>
          <Text style={styles.searchWord}>Results by: {searchWord}</Text>
        </View>
        {isLoading ? (
          <View
            style={[
              styles.listContainer,
              { justifyContent: "center", alignItems: "center" },
            ]}
          >
            <View style={{ marginBottom: 90 }}>
              <ActivityIndicator size={50} color={colors.GOLD} />
            </View>
          </View>
        ) : !drinks ? (
          <View style={[styles.listContainer]}>
            <Text>There is no drink with {searchWord}</Text>
          </View>
        ) : (
          <View style={styles.listContainer}>
            <TwoColumsList data={drinks} />
          </View>
        )}
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
    marginTop: 20,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  resultTextBox: {
    paddingHorizontal: 25,
    marginTop: 15,
  },
  btnSearch: {
    padding: 10,
    backgroundColor: colors.GOLD,
    borderRadius: 5,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: colors.WHITE,
    paddingHorizontal: 10,
    backgroundColor: "rgba(47,46,49,0.8)",
    borderRadius: 5,
  },
  searchWord: {
    color: colors.WHITE,
  },
});

export default SearchScreen;
