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
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getCommentsByGig } from "../utils/api";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};

interface Props {
  route: any;
}

const Comments: FC<Props> = ({ route }) => {
  const handleUserPress = () => {
    navigation.navigate("Home");
  };
  const navigation = useNavigation();
  const { venue_id } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getCommentsByGig(1).then((res) => {
      setMessages(res);
    });
  }, []);
  console.log(messages);
  return (
    <ImageBackground source={image} style={styles.imgBackground}>
      <View style={styles.BackButton}>
        <Text style={styles.BackButtonText} onPress={handleUserPress}>
          Back
        </Text>
      </View>
      <View style={styles.container}>
        {messages.map((message: any) => {
          return (
            <Text style={styles.text} key={message.id}>
              {message.username}
              {message.date}
              {message.body}
              {message.votes}
            </Text>
          );
        })}
        <View>
          <TextInput
            style={styles.text}
            placeholder={"Please type in here"}
          ></TextInput>
          <Pressable style={styles.text}>
            <Text>Send</Text>
          </Pressable>
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
  BackButtonText: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
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
  text: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
  },
});

export default Comments;
