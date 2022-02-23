import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
import Gig from "./components/Gig";

const store = createStore(allReducers);
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserDetails" component={UserDetails} />
          <Stack.Screen name="Gig" component={Gig} />
        </Stack.Navigator>
      </NavigationContainer>
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
