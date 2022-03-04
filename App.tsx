import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Header from "./components/Header";
import UserDetails from "./components/UserDetails";
import AddUserPic from "./components/AddUserPic";
import AddGig from "./components/AddGig";
import Gig from "./components/Gig";
import Filter from "./components/Filter";
import Comments from "./components/Comments";
import { I18n } from "aws-amplify";
const authScreenLabels = {
  en: {
    "Sign Up": "Sign Up",
    "Sign Up Account": "Create a new account",
    "Sign in to your account": "Welcome to Herd",
    Username: "Username",
    "Forgot Password": "Forgot Password?",
    "Please Sign In / Sign Up": " ",
    "Sign In": "Sign In",
  },
};
I18n.setLanguage("en");
I18n.putVocabularies(authScreenLabels);
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
          <Stack.Screen name="AddUserPic" component={AddUserPic} />
          <Stack.Screen name="Gig" component={Gig} />
          <Stack.Screen name="AddGig" component={AddGig} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="Comments" component={Comments} />
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
const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "black",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    width: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    ...AmplifyTheme.button,
    backgroundColor: "black",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    width: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    width: "100%",
    backgroundColor: "black",
    alignSelf: "center",
    // height: "60%"
    // opacity: 0.85
  },
  section: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "white",
    color: "white",
    textAlign: "center",
  },
  sectionHeaderText: {
    width: "100%",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  sectionScroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    // backgroundColor: "white"
  },
};
export default withAuthenticator(App, { theme: customTheme });
