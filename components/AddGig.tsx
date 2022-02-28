import React, { useState, useEffect, FC } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,
  Button,
} from "react-native";
import { useForm, useController } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { postGig } from "../utils/api";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const image = {
  uri: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg",
};
interface Props {}
function Input({ name, control }: { name: any; control: any }) {
  const { field } = useController({
    control,
    name,
  });
  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      // placeholder={name}
    />
  );
}
interface Props {
  route: any;
}
const AddGig: FC<Props> = ({ route }) => {
  const { venue_id } = route.params;
  const [newGig, setNewGig] = useState({
    bandName: "",
    big_url: "",
    date: "",
    description: "",
    end: "",
    genre: "",
    price: "",
    small_url: "",
    spotify: "",
    start: "",
    venue_id: venue_id,
  });
  const [inputGig, setInputGig] = useState({});
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    setNewGig(data);
    setNewGig((prevState) => ({
      ...prevState,
      venue_id: venue_id,
    }));
    setInputGig(newGig);
    Alert.alert(
      "Form Submitted!",
      "The gig was successfully added to the database",
      [{ text: "OK" }],
    );
  };
  useEffect(() => {
    postGig(uuidv4(), newGig)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [inputGig]);
  const navigation = useNavigation();
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
      <ScrollView style={styles.container}>
        <Text style={styles.formText}>Band Name: </Text>
        <Input name="bandName" control={control} />
        <Text style={styles.formText}>Date of Gig: </Text>
        <Input name="date" control={control} />
        <Text style={styles.formText}>Band Description: </Text>
        <Input name="description" control={control} />
        <Text style={styles.formText}>Gig Start Time: </Text>
        <Input name="start" control={control} />
        <Text style={styles.formText}>Gig End Time: </Text>
        <Input name="end" control={control} />
        <Text style={styles.formText}>Band's Genre: </Text>
        <Input name="genre" control={control} />
        <Text style={styles.formText}>Link to Small Image: </Text>
        <Input name="small_url" control={control} />
        <Text style={styles.formText}>Link to Big Image: </Text>
        <Input name="big_url" control={control} />
        <Text style={styles.formText}>Spotify Link: </Text>
        <Input name="spotify" control={control} />
        <Text style={styles.formText}>Gig Price: </Text>
        <Input name="price" control={control} />
        <View style={{ marginBottom: 40 }}>
          <Button title="submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: 20,
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
  formText: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  formTextInput: {
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "white",
    alignContent: "center",
  },
  submitButtonText: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
    alignContent: "center",
    alignSelf: "center",
    width: 300,
    textAlign: "center",
  },
});
export default AddGig;
