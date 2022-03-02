import React, { useEffect, useState, FC } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  Linking,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import {
  getCommentsByGig,
  postCommentsByGig,
  deleteCommentsById,
} from "../utils/api";
import { v4 as uuidv4 } from "uuid";
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

  const [newComment, setNewComment] = useState({
    body: "",
    date: new Date(),
    id: uuidv4(),
    username: "",
    venue_number: venue_id,
    votes: 0,
  });

  Auth.currentUserInfo().then((userInfo) => {
    setNewComment((prevNewComment: any) => {
      prevNewComment.username = userInfo.username;
      return prevNewComment;
    });
  });

  useEffect(() => {
    getCommentsByGig(1).then((res) => {
      setMessages(res);
    });
  }, []);

  const Item = ({
    body,
    date,
    id,
    username,
    votes,
  }: {
    body: string;
    date: string;
    id: number;
    username: string;
    votes: string;
  }) => (
    <View style={styles.message}>
      <Pressable onPress={() => {}}>
        <View style={styles.nameDate}>
          <Text style={styles.textTop}>@{username}</Text>
          <Text style={styles.textTop}>03-03-2022</Text>
        </View>
        <Text style={styles.text}>{body}</Text>
        <View style={styles.upvote}>
          <Feather name="arrow-up-circle" size={24} color="black" />
          <Text style={styles.textVotes}>{votes}</Text>
        </View>
      </Pressable>
    </View>
  );

  const renderItem = ({ item }: { item: any }) => (
    <Item
      body={item.body}
      date={item.date}
      id={item.id}
      username={item.username}
      votes={item.votes}
    />
  );
  const handleChange = (text: any) => {
    setNewComment((prevComment: any) => {
      prevComment.body = text;
      return prevComment;
    });
  };

  const handlePress = () => {
    postCommentsByGig(uuidv4(), JSON.stringify(newComment)).then((res: any) => {
      console.log(res, "<<<<<<<<<res");
      const newComments = [...messages];
      newComments.push(res.newComment);
      setMessages(newComments);
    });
  };

  return (
    <ImageBackground source={image} style={styles.imgBackground}>
      <View style={styles.BackButton}>
        <Text style={styles.BackButtonText} onPress={handleUserPress}>
          Back
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.messageInput}>
          <TextInput
            style={styles.TextInput}
            placeholder="Type your message..."
            onChangeText={handleChange}
          ></TextInput>
          <Pressable style={styles.text} onPress={handlePress}>
            <Text style={styles.button}>SEND</Text>
          </Pressable>
        </View>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
          ListHeaderComponent={<></>}
          style={styles.flatlist}
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
  BackButtonText: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  TextInput: {
    backgroundColor: "white",
    color: "#000",
    padding: 10,
    fontWeight: "bold",
    borderRadius: 15,
    textAlign: "center",
    width: 260,
    height: 35,
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
  messageInput: {
    position: "absolute",
    marginTop: 500,
  },
  text: {
    color: "#000",
    padding: 10,
    fontWeight: "bold",
  },
  flatlist: {
    position: "absolute",
    marginTop: 10,
  },
  textVotes: {
    color: "#000",
    // padding: 10,
    paddingBottom: 3,
    fontWeight: "bold",
    alignContent: "center",
  },
  upvote: {
    alignItems: "flex-end",
    marginBottom: 5,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "center"
  },
  textTop: {
    color: "#000",
    padding: 10,
    fontWeight: "bold",
  },
  nameDate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    borderColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    width: 70,
    textAlign: "center",
    alignSelf: "center",
  },
  message: {
    borderColor: "white",
    borderWidth: 2,
    width: 300,
    borderRadius: 25,
    backgroundColor: "white",
    opacity: 0.85,
    marginBottom: 15,
  },
});

export default Comments;
