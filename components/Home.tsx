import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Map from "./Map";
import Gig from "./Gig";
import Venues from "./Venues";
import Header from "./Header";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};

const Home = () => {
  return (

    <ImageBackground source={image} style={styles.imgBackground}>
      <View style={styles.container}>
        <Header></Header>
        <Map />
        <Gig />
        <Venues />
      </View>
    </ImageBackground>

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
    // backgroundColor: "#000",
    alignItems: "center",
    width: width,
    height: height,
    paddingVertical: 20,
  },
  imgBackground: {
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width,
  },
});

export default Home;
