import React from 'react';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Map from './Map'
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const Home = () => {
  return (
  <View style={styles.container}>
    <Map/>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
    paddingVertical: 20,
  },
})

export default Home;
