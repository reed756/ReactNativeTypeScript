import React, { useEffect, useState, FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Linking,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getSingleGig, sendReminder, getGigsByVenue } from "../utils/api";
import { FontAwesome } from "@expo/vector-icons";
import { Auth } from "aws-amplify";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};
interface Props {
  route: any;
}

const Gig: FC<Props> = ({ route }) => {
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wasPressed, setWasPressed] = useState(false);
  const navigation = useNavigation();
  const { id, venue_id } = route.params;

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
    venue_id: "",
  });

  Auth.currentUserInfo().then((userInfo) => {
    setUserEmail(userInfo.attributes.email);
    setUsername(userInfo.username);
  });

  const email = {
    to: `${userEmail}`,
    from: "j.souttar@gmail.com",
    subject: "Reminder About Upcoming Gig",
    text: `Hi ${username}, 
    
    You have asked us to send you are reminder regarding an upcoming live music event at ${venue_id},
    here are the details of the gig:

    Date: ${gig.date}

    Band Name: ${gig.bandName}

    Description: ${gig.description}
    
    Genre: ${gig.genre}

    Best Wishes,
    The Team at Herd
    `,
  };

  useEffect(() => {
    setIsLoading((prevState) => !prevState);
    getSingleGig(id).then((res) => {
      setGig(res);
      setIsLoading((prevState) => !prevState);
    });
  }, []);
  const handleUserPress = () => {
    navigation.navigate("Home");
  };
  const comment = () => {
    if (gig.venue_id) {
      navigation.navigate("Comments", { venue_id: gig.venue_id });
    }
  };

  const reminderEmailOnSubmit = () => {
    Alert.alert("Reminder Email Sent!", "A reminder email is on its way!", [
      { text: "OK" },
    ]);
    setWasPressed(true);
    return sendReminder(email);
  };

  return (
    <ImageBackground source={image} style={styles.imgBackground}>
      <View style={styles.BackButton}>
        <Text style={styles.BackButtonText} onPress={handleUserPress}>
          Back
        </Text>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingIcon}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        ) : (
          <>
            <Text style={styles.GigTitle}>{gig.bandName}</Text>
            <Image source={{ uri: gig.big_url }} style={styles.bigImg}></Image>
            <Text style={styles.GigText}>{gig.date}</Text>
            <Text style={styles.GigText}>{gig.description}</Text>
            <Text style={styles.GigText}>{gig.genre}</Text>
            <Text style={styles.GigText}>
              {gig.start}PM - {gig.end}PM
            </Text>
            <Text style={styles.GigText}>£{gig.price}</Text>
            <FontAwesome
              name="spotify"
              size={30}
              color="white"
              onPress={() => {
                Linking.openURL(gig.spotify);
              }}
            />
            <View>
              <Pressable
                onPress={() => reminderEmailOnSubmit()}
                disabled={wasPressed ? true : false}
                style={wasPressed ? styles.disabledButton : styles.button}
              >
                <Text style={styles.gigText}>Send Reminder Email</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPress={() => comment()}
                disabled={wasPressed ? true : false}
                style={wasPressed ? styles.disabledButton : styles.button}
              >
                <Text style={styles.gigText}>Comment</Text>
              </Pressable>
            </View>
          </>
        )}
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "black",
  },
  disabledButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "grey",
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
    marginTop: 10,
  },
  GigText: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
  },
  gigText: {
    color: "#fff",
    fontSize: 18,
    opacity: 1,
    fontWeight: "bold",
  },
  bigImg: {
    marginTop: 10,
    height: 200,
    width: 200,
    borderRadius: 15,
  },
  loadingIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Gig;
