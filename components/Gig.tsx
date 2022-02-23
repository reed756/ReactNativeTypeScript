import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getSingleGig } from "../utils/api";

const Gig = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [gig, setGig] = useState({});
  useEffect(() => {
    getSingleGig(id).then((res) => {
      setGig(res);
    });
  });
  const handleUserPress = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView>
      <View style={styles.BackButton}>
        <Text style={styles.BackButtonText} onPress={handleUserPress}>
          Back
        </Text>
        <Text>This is the Gig</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 20,
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
});

export default Gig;
