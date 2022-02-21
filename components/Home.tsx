import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Button,
} from "react-native";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import MapView, { Marker } from "react-native-maps";
const { width } = Dimensions.get("window");

const Home = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector((storeState: RootState) => storeState.loggedIn);
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };
  const venues = [
    {
      latitude: 51.5072,
      longitude: 0.1276,
      description: "Over here!",
      title: "Hello",
      image: "./assets/favicon.png",
    },
    {
      latitude: 51.5073,
      longitude: 0.1277,
      description: "Over here!",
      title: "Hello",
      image: "./assets/favicon.png",
    },
    {
      latitude: 51.5075,
      longitude: 0.1278,
      description: "Over here!",
      title: "Hello",
      image: "./assets/favicon.png",
    },
  ];
  const londonRegion = {
    latitude: 51.5072,
    longitude: 0.1276,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      </View>
      <Button
        onPress={() => dispatch({ type: "SIGN_IN" })}
        title="log in test"
      />
      {signedIn && <Text>You are logged in</Text>}
      <MapView style={styles.map} initialRegion={londonRegion}>
        {venues.map((venue) => {
          return (
            <Marker
              key={venue.latitude}
              coordinate={{
                latitude: venue.latitude,
                longitude: venue.longitude,
              }}
              description={venue.description}
              title={venue.title}
            />
          );
        })}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingVertical: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: width,
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FF9900",
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  map: {
    width: width,
    height: 500,
  },
});
export default Home;
