import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Input } from "react-native-elements/dist/input/Input";
const { width } = Dimensions.get("window");

type Props = {
  [key: string]: any;
};

const Search = (props: Props) => {
  const handleChangeText = (text: any) => {
    if (text === "Manchester") {
      props.setRegion(props.manchester);
    } else if (text === "London") {
      props.setRegion(props.london);
    }
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
    textAlign: "center",
    borderColor: "white",
  },
  searchContainer: {
    marginTop: 5,
    width: width - 30,
    // alignContent: "center",
    justifyContent: "center",
    // alignItems: "center",
    height: 25,
  },
});
export default Search;
