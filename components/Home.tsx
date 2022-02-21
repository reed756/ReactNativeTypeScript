import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import MapView, { Marker } from "react-native-maps";
import { getVenues } from "../utils/api";
const { width } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};

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
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    getVenues().then((res: any) => {
      setVenues(res);
    });
  }, []);

  // const venues = [
  //   {
  //     latitude: 51.5072,
  //     longitude: 0.1276,
  //     description: "Over here!",
  //     title: "Hello",
  //     image: "./assets/favicon.png",
  //   },
  //   {
  //     latitude: 51.5073,
  //     longitude: 0.1277,
  //     description: "Over here!",
  //     title: "Hello",
  //     image: "./assets/favicon.png",
  //   },
  //   {
  //     latitude: 51.5075,
  //     longitude: 0.1278,
  //     description: "Over here!",
  //     title: "Hello",
  //     image: "./assets/favicon.png",
  //   },
  // ];
  const londonRegion = {
    latitude: 51.52297,
    longitude: -0.15753,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  console.log(venues);
  const [user, setUser] = useState("");

  Auth.currentUserInfo().then((userInfo) => {
    setUser(userInfo.username);
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Herd</Text>
        <Text style={styles.headerTextUser}>{user}</Text>
        {/* <Text style={styles.headerText}>
          {Auth.currentUserInfo().then((userInfo) => {
            return userInfo.username[0]
          })}
        </Text> */}

        {/* <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>  */}
      </View>

      {/*  
      <Button
        onPress={() => dispatch({ type: "SIGN_IN" })}
        title="log in test"
      /> 
      {signedIn && <Text>You are logged in</Text>}  */}
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
      <View style={styles.footer}>
        <Text style={styles.footerText}>Button</Text>
        <Text style={styles.footerText}>Button</Text>
        <Text style={styles.footerText}>Button</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingVertical: 20,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom: 50,
    width: width,
    alignItems: "center",
  },
  footerText: {
    fontSize: 28,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#fff",
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  imgBackground: {
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  headerTextUser: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
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
export default Home;
