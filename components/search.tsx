import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Input } from "react-native-elements/dist/input/Input";
const { width } = Dimensions.get("window");

const Search = () => {
  const handleChangeText = () => {
      
  };
  return (
    <View style={styles.searchContainer}>
      <Input
        style={styles.search}
        placeholder={"Search a location"}
        onChangeText={handleChangeText}
      ></Input>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 0,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  searchContainer: {
    width: width - 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});
export default Search;
