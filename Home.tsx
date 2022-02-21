// import React from "react";
// import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
// import { Auth } from "aws-amplify";
// import MapView, { Marker } from "react-native-maps";
// const { width } = Dimensions.get("window");
// const Home = () => {
//   const londonRegion = {
//     latitude: 51.5072,
//     longitude: 0.1276,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//   };
//   const signOut = async () => {
//     try {
//       await Auth.signOut({ global: true });
//     } catch (error) {
//       console.log("error signing out: ", error);
//     }
//   };
//   const venues = [
//     {
//       latitude: 51.5072,
//       longitude: 0.1276,
//       description: "Over here!",
//       title: "Hello",
//       image: "./assets/favicon.png",
//     },
//     {
//       latitude: 51.5073,
//       longitude: 0.1277,
//       description: "Over here!",
//       title: "Hello",
//       image: "./assets/favicon.png",
//     },
//     {
//       latitude: 51.5075,
//       longitude: 0.1278,
//       description: "Over here!",
//       title: "Hello",
//       image: "./assets/favicon.png",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Welcome!</Text>
//         <Pressable style={styles.button} onPress={() => signOut()}>
//           <Text style={styles.buttonText}>Sign out</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     width: width,
//     paddingVertical: 20,
//   },
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 20,
//     width: width,
//     alignItems: "center",
//   },
//   headerText: {
//     fontSize: 28,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#FF9900",
//     padding: 10,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   map: {
//     width: width,
//     display: "flex",
//   },
// });
// export default Home;

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   SafeAreaView,
//   Image,
// } from "react-native";
// import MapView, { Callout, Marker, MarkerAnimated } from "react-native-maps";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import cd from "./assets/cd.png";

// export default function App() {
//   const londonRegion = {
//     latitude: 51.5072,
//     longitude: 0.1276,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//   };

//   const venues = [
//     {
//       latitude: 51.5072,
//       longitude: 0.1276,
//       description: "Over here!",
//       title: "Hello",
//       image: "./assets/favicon.png",
//     },
//     {
//       latitude: 51.5073,
//       longitude: 0.1277,
//       description: "Over here!",
//       title: "Hello",
//       image: "./assets/favicon.png",
//     },
//     {
//       latitude: 51.5075,
//       longitude: 0.1278,
//       description: "Over here!",
//       title: "Hello",
//       image: "./assets/favicon.png",
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text>Open up App.tsx to start working on your app!</Text>
//         <StatusBar style="auto" />
//         <MapView style={styles.map} initialRegion={londonRegion}>
//           {venues.map((venue) => {
//             return (
//               <Marker
//                 key={venue.latitude}
//                 coordinate={{
//                   latitude: venue.latitude,
//                   longitude: venue.longitude,
//                 }}
//                 description={venue.description}
//                 title={venue.title}
//               />
//             );
//           })}
//         </MapView>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
