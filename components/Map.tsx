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
    color: "black",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF9900",
    padding: 10,
    borderRadius: 6,
  },
  mapButtons: {
    position: "absolute",
    top: "1%",
    alignSelf: "flex-start",
    borderRadius: 10,
    borderWidth: 2,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 25,
    width: 100,
    borderColor: "black",
    marginLeft: 10,
  },
  map: {
    width: width - 20,
    height: 440,
    borderTopRightRadius: 50,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
});

export default Map;
