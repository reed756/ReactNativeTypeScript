import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { Auth } from "aws-amplify";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./components/Home";
import { allReducers } from "./reducers";
const store = createStore(allReducers);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </Provider>
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
