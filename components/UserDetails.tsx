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
const UserDetails = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPhotoSubmit, setUserPhotoSubmit] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  );
  const [userPhoto, setUserPhoto] = useState(userPhotoSubmit);
  const [shouldShow, setShouldShow] = useState(false);

  Auth.currentUserInfo().then((userInfo) => {
    console.log(userInfo.customAttributes);
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
  const handleUserPhoto = () => {
    setUserPhoto(userPhotoSubmit);
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
        <Avatar
          rounded
          containerStyle={{
            height: 100,
            width: 100,
            borderColor: "white",
            borderWidth: 1,
          }}
          source={{ uri: userPhoto }}
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
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              placeholder="Enter Image URI"
              onChangeText={(newPhoto) => setUserPhotoSubmit(newPhoto)}
            ></Input>
            <View style={styles.submit}>
              <Text onPress={handleUserPhoto}>Submit</Text>
            </View>
          </View>
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
    height: 580,
    width: 340,
    position: "absolute",
    opacity: 0.85,
    borderColor: "white",
    alignSelf: "center",
    borderWidth: 2,
  },
  submit: {
    height: 30,
    width: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
    fontWeight: "bold",
  },
  user: {
    marginTop: 20,
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
    marginTop: 500,
    paddingVertical: 15,
    height: 50,
    width: 100,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
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
    justifyContent: "center",
  },
  BackButtonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  userInfo: {
    backgroundColor: "#000",
    alignItems: "center",
    borderRadius: 25,
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
    justifyContent: "center",
  },
  AddPicText: {
    color: "black",
    fontWeight: "bold",
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
  inputContainer: {
    marginTop: 20,
    margin: 10,
    width: 300,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserDetails;
