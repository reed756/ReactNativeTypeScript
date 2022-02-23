import React from "react";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};
const UserDetails = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  Auth.currentUserInfo().then((userInfo) => {
    setUser(userInfo.username);
    setUserEmail(userInfo.attributes.email);
    setUserPhone(userInfo.attributes.phone_number);
  });
  const handleUserPress = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={image} style={styles.imgBackground}>
      <View style={styles.BackButton}>
        <Text style={styles.BackButtonText} onPress={handleUserPress}>
          Back
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.user}>
          <Text style={styles.LoggedInUser}>You are logged in as:</Text>
          <Text style={styles.username}>{user}</Text>
        </View>
        <View style={styles.userPic}></View>
        <View style={styles.userInfo}>
          <Text style={styles.userText}>{userEmail}</Text>
          <Text style={styles.userText}>{userPhone}</Text>
        </View>
        <View style={styles.Log}>
          <Text style={styles.LogOutText}>Log Out</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    borderRadius: 25,
    height: 550,
    width: 340,
    position: "absolute",
    opacity: 0.85,
    borderColor: "white",
    borderWidth: 2,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  LoggedInUser: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  imgBackground: {
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width,
  },
  LogOutText: {
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    height: 20,
    fontWeight: "bold",
  },
  user: {
    marginTop: 50,
    height: 60,
    width: 200,
    alignItems: "center",
    alignContent: "center",
  },
  userText: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
  },

  Log: {
    marginTop: 70,
    paddingVertical: 15,
    height: 50,
    width: 100,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
  BackButton: {
    height: 50,
    width: 50,
    marginBottom: 670,
    marginRight: 290,
    borderRadius: 15,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  BackButtonText: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  userInfo: {
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: "#000",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 25,
    justifyContent: "center",
  },
  userPic: {
    marginTop: 20,
    paddingVertical: 20,
    height: 120,
    width: 120,
    borderRadius: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
  },
});

export default UserDetails;
