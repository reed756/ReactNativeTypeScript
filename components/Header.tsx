import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  const [user, setUser] = useState("");
  const navigation = useNavigation();
  Auth.currentUserInfo().then((userInfo) => {
    setUser(userInfo.username);
  });
  const handleUserPress = () => {
    navigation.navigate("UserDetails");
  };

  const handleUserPressFilter = () => {
    navigation.navigate("Filter");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Herd</Text>
        <Entypo
          name="folder-music"
          size={30}
          color="white"
          style={styles.icon}
          onPress={handleUserPressFilter}
        />
        <FontAwesome
          name="user-circle"
          size={30}
          color="white"
          style={styles.icon}
          onPress={handleUserPress}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: width,
    paddingVertical: 20,
  },

  icon: {
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 0,
    width: width,
    alignItems: "center",
    alignContent: "center",
    borderColor: "white",
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
});

export default Header;
