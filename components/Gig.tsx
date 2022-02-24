import React, { useEffect, useState, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Linking,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getSingleGig } from "../utils/api";
import { FontAwesome } from "@expo/vector-icons";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};
interface Props {
  route: any;
}

const Gig: FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [gig, setGig] = useState({
    bandName: "",
    date: "",
    description: "",
    genre: "",
    start: "",
    end: "",
    price: 0,
    spotify: "",
    big_url: "www.image.com",
    small_url: "",
  });
  useEffect(() => {
    getSingleGig(id).then((res) => {
      setGig(res);
    });
  }, []);
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
        <Text style={styles.GigTitle}>{gig.bandName}</Text>
        <Image source={{ uri: gig.big_url }} style={styles.bigImg}></Image>
        <Text style={styles.GigText}>{gig.date}</Text>
        <Text style={styles.GigText}>{gig.description}</Text>
        <Text style={styles.GigText}>{gig.genre}</Text>
        <Text style={styles.GigText}>{gig.start}PM</Text>
        <Text style={styles.GigText}>{gig.end}PM</Text>
        <Text style={styles.GigText}>£{gig.price}</Text>
        <FontAwesome
          name="spotify"
          size={30}
          color="white"
          onPress={() => {
            Linking.openURL(gig.spotify);
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    borderRadius: 25,
    height: 600,
    width: 340,
    position: "absolute",
    opacity: 0.85,
    borderColor: "white",
    borderWidth: 2,
  },
  imgBackground: {
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width,
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
  GigTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  GigText: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
  },

  bigImg: {
    marginTop: 10,
    height: 200,
    width: 200,
    borderRadius: 15
  },
});

export default Gig;
