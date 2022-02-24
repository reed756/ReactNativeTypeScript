import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Map from "./Map";
import Gig from "./Gig";
import Venues from "./Venues";
import Header from "./Header";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const Home = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Map />
      {/* <Gig /> */}
      <Venues />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    width: width,
    height: height,
    paddingVertical: 20,
  },
});

export default Home;
