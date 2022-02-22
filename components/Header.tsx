import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";


const Header = () => {
  const [user, setUser] = useState("");
  const navigation = useNavigation();
  Auth.currentUserInfo().then((userInfo) => {
    setUser(userInfo.username);
  });
  const handleUserPress = () => {
    navigation.navigate("UserDetails");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Herd</Text>
        <Text style={styles.headerTextUser} onPress={handleUserPress}>
          {user}
        </Text>
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
});

export default Header;
