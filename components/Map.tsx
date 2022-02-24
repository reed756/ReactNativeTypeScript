import React, { useState, useEffect, useRef, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getGigs, getVenues } from "../utils/api";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

const Map: FC = () => {
  const [venues, setVenues] = useState([]);
  const [gigs, setGigs] = useState([]);
  const mapRef: any = useRef(null);
  const navigation: any = useNavigation();

  const handleUserPress = (id: number) => {
    navigation.navigate("Gig", { id: id });
  };

  const Item = ({
    bandName,
    genre,
    description,
    id,
  }: {
    bandName: string;
    genre: string;
    description: string;
    id: number;
  }) => (
    <View style={styles.gigView}>
      <Pressable onPress={() => handleUserPress(id)}>
        <Text style={styles.gigHeading}>{bandName}</Text>
        <Text style={styles.gigText}>{description}</Text>
        <Text style={styles.gigText}>{genre}</Text>
      </Pressable>
    </View>
  );

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
  const goToLondon = () => {
    mapRef.current.animateToRegion(londonRegion, 3 * 1000);
  };

  const renderItem = ({ item }: { item: any }) => (
    <Item
      bandName={item.bandName}
      description={item.description}
      genre={item.genre}
      id={item.id}
    />
  );

  return (
    <FlatList
      data={gigs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <MapView style={styles.map} initialRegion={londonRegion} ref={mapRef}>
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
            <Text style={styles.FilterButtonText}>Filter</Text>
          </View>
          <View>
            <Pressable style={styles.button} onPress={() => goToLondon()}>
              <Text style={styles.gigText}>Back to Home</Text>
            </Pressable>
          </View>
          <View>
            <Text style={styles.gigHeading}>UPCOMING GIGS:</Text>
          </View>
        </>
      }
    />
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
  FilterButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    // backgroundColor: "black",
  },
  mapButtons: {
    position: "absolute",
    top: "3%",
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
    marginBottom: 10,
    justifyContent: "center"
  },
  gigView: {
    width: width - 20,
    padding: 20,
    backgroundColor: "black",
    opacity: 0.75,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "justify",
    elevation: 3,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 0.1 },
    shadowOpacity: 2,
    shadowRadius: 8,
  },
  gigHeading: {
    color: "#fff",
    fontSize: 18,
    opacity: 1,
    margin: 5,
    fontWeight: "900",
  },
  gigText: {
    color: "#fff",
    fontSize: 18,
    opacity: 1,
    margin: 5,
  },
});

export default Map;
