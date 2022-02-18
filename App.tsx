import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import Home from "./Home";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
       <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default withAuthenticator(App);
