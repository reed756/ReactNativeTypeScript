import React, { useState, FC } from "react";
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
// import { Input } from "react-native-elements/dist/input/Input";
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
      placeholder={name}
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

  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    setNewGig(data);
    setNewGig((prevState) => ({
      ...prevState,
      venue_id: venue_id,
    }));
    Alert.alert("Form Submitted!", JSON.stringify(data), [{ text: "OK" }]);
    postGig(86, newGig)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
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
        <Text style={styles.formText}>Gig's date: </Text>
        <Input name="date" control={control} />
        <Text style={styles.formText}>Band's description: </Text>
        <Input name="description" control={control} />
        <Text style={styles.formText}>Gig's end time: </Text>
        <Input name="end" control={control} />
        <Text style={styles.formText}>Gig's start time: </Text>
        <Input name="start" control={control} />
        <Text style={styles.formText}>Band's genre: </Text>
        <Input name="genre" control={control} />
        <Text style={styles.formText}>Band's small url: </Text>
        <Input name="small_url" control={control} />
        <Text style={styles.formText}>Band's big url: </Text>
        <Input name="big_url" control={control} />
        <Text style={styles.formText}>Spotify link: </Text>
        <Input name="spotify" control={control} />
        <Text style={styles.formText}>Price of gig: </Text>
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
    height: 550,
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
    marginBottom: 5,
  },
  formTextInput: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    textAlign: "center",
    borderColor: "white",
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
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
  },
});

export default AddGig;
