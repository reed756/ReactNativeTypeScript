import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getGigs, getVenues } from "../utils/api";
const { width } = Dimensions.get("window");

const Map = () => {
  const [venues, setVenues] = useState([]);
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    getVenues().then((res: any) => {
      setVenues(res);
    });
    getGigs().then((res: any) => {
      setGigs(res);
    });
  }, []);

  const londonRegion = {
    latitude: 51.52297,
    longitude: -0.15753,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View>
      <MapView style={styles.map} initialRegion={londonRegion}>
        {venues.map((venue: any) => {
          return (
            <Marker
              key={venue.id}
              coordinate={{
                latitude: venue.latitude,
                longitude: venue.longitude,
              }}
              description={venue.area}
              title={venue.name}
            />
          );
        })}
      </MapView>
      <View style={styles.mapButtons}>
        <Text style={styles.ButtonText}>Filter</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF9900",
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    opacity: 1,
  },
  mapButtons: {
    position: "absolute",
    top: "12%",

    alignSelf: "flex-start",
    borderRadius: 25,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 25,
    width: 100,
    backgroundColor: "grey",
    opacity: 0.5,
    color: "red",
    borderColor: "red",
    marginLeft: 10,
  },
  map: {
    width: width - 10,
    height: 650,
    borderTopRightRadius: 50,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
});

export default Map;
