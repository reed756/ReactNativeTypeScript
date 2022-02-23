import React from "react";
import Dialog from "react-native-dialog";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { Avatar } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};
const AddUserPic = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPhoto, setUserPhoto] = useState(
    "https://st.depositphotos.com/1005730/3830/i/950/depositphotos_38302279-stock-photo-teenager-enjoying-listening-to-music.jpg",
  );
  const [shouldShow, setShouldShow] = useState(false);

  Auth.currentUserInfo().then((userInfo) => {
    setUser(userInfo.username);
    setUserEmail(userInfo.attributes.email);
    setUserPhone(userInfo.attributes.phone_number);
  });
  const handleUserPress = () => {
    navigation.navigate("Home");
  };

  const handleLogOutPressed = () => {
    Auth.signOut();
  };
  const handleUserPic = () => {};

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
        <Avatar
          rounded
          containerStyle={{
            height: 100,
            width: 100,
            borderColor: "white",
            borderWidth: 1,
          }}
          source={{ uri: userPhoto }}
          avatarStyle={styles.userPic}
        ></Avatar>
        <View style={styles.AddPic}>
          <Text
            style={styles.AddPicText}
            onPress={() => setShouldShow(!shouldShow)}
          >
            Add a picture
          </Text>
        </View>
        {shouldShow ? (
          <Input
            style={styles.input}
            placeholder="Enter Image URI"
            
          ></Input>
        ) : null}

        <View style={styles.userInfo}>
          <Text style={styles.userText}>{userEmail}</Text>
          <Text style={styles.userText}>{userPhone}</Text>
        </View>
        <View style={styles.Log}>
          <Text style={styles.LogOutText} onPress={handleLogOutPressed}>
            Log Out
          </Text>
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
    marginTop: 60,
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
    // marginTop: 20,
    backgroundColor: "#000",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 25,
    justifyContent: "space-around",
  },
  userPic: {
    alignItems: "center",
    alignContent: "center",
  },
  AddPic: {
    marginTop: 20,
    paddingVertical: 20,
    marginBottom: 0,
    height: 20,
    width: 120,
    borderRadius: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  AddPicText: {
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 17,
  },
  input: {
    color: "black",
    backgroundColor: "white",
    margin: 5,
    marginTop: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    textAlign: "center",
  },
});

export default AddUserPic;
