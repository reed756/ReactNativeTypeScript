import React, { useState, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Map from "./Map";
import Venues from "./Venues";
import Header from "./Header";
import Search from "./search";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};

type Props = {
  [key: string]: any;
};

const Home: FC<Props> = () => {
  const londonRegion = {
    latitude: 51.49307,
    longitude: -0.22559,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const manchesterRegion = {
    latitude: 53.48395,
    longitude: -2.24464,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(londonRegion);
  return (
    <ImageBackground source={image} style={styles.imgBackground}>
      <View style={styles.container}>
        <Header></Header>
        <Search
          setRegion={setRegion}
          manchester={manchesterRegion}
          london={londonRegion}
        ></Search>
        <Map region={region}></Map>
        <Venues />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
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
