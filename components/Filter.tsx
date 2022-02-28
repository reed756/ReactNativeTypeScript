import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getVenues, getGigsByVenue, getGigs, gigsByGenre } from "../utils/api";
import { useEffect, useState } from "react";
const { width } = Dimensions.get("window");

const Filter = () => {
  const [gigs, setGigs] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Rock");
  const navigation: any = useNavigation();
  const handleUserPress = (id: number) => {
    navigation.navigate("Gig", { id: id });
  };
  const handleBackPress = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    gigsByGenre(selectedValue).then((res: any) => {
      console.log(res.data, "<<<<<");
      setGigs(res.data);
    });
  }, [selectedValue]);

  const Item = ({
    bandName,
    genre,
    description,
    id,
    date,
    small_url,
    big_url,
  }: {
    bandName: string;
    genre: string;
    description: string;
    id: number;
    date: string;
    small_url: string;
    big_url: string;
  }) => (
    <View style={styles.gigView}>
      <Pressable onPress={() => handleUserPress(id)}>
        <Text style={styles.gigHeading}>{bandName}</Text>
        <Text style={styles.gigText}>{description}</Text>
        <Text style={styles.gigText}>{genre}</Text>
        <Text style={styles.gigText}>{date}</Text>
      </Pressable>
    </View>
  );
  const renderItem = ({ item }: { item: any }) => (
    <Item
      bandName={item.bandName}
      description={item.description}
      genre={item.genre}
      id={item.id}
      date={item.date}
      small_url={item.small_url}
      big_url={item.big_url}
    />
  );
  return (
    <FlatList
      data={gigs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <View style={styles.BackButton}>
            <Text style={styles.BackButtonText} onPress={handleBackPress}>
              Back
            </Text>
          </View>
          <View>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 200, width: width }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Rock" value="Rock" />
              <Picker.Item label="Pop" value="Pop" />
              <Picker.Item label="Electronic" value="Electronic" />
              <Picker.Item label="Metal" value="Metal" />
            </Picker>
          </View>
        </>
      }
    />
  );
};
const styles = StyleSheet.create({
  ButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  venName: {
    fontWeight: "bold",
  },
  venPhone: {
    fontStyle: "italic",
  },
  callout: {
    flex: 1,
    width: 150,
  },
  FilterButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
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
  buttonContainer: {
    justifyContent: "space-between",
    display: "flex",
    // borderWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  marker: {
    height: 50,
    width: 50,
    // borderRadius: 20,
  },
  mapButtons: {
    position: "absolute",
    top: "3%",
    alignSelf: "flex-start",
    borderRadius: 10,
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 25,
    width: 100,
    borderColor: "black",
    marginLeft: 10,
  },
  mapButtonsFilter: {
    position: "absolute",
    top: "10%",
    alignSelf: "flex-start",
    borderRadius: 10,
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 25,
    width: 100,
    borderColor: "black",
    marginLeft: 10,
  },
  map: {
    height: 440,
    borderTopRightRadius: 50,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
    marginBottom: 10,
    justifyContent: "center",
  },
  gigView: {
    padding: 20,
    backgroundColor: "black",
    opacity: 0.75,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "justify",
    elevation: 3,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 0.1 },
    shadowOpacity: 2,
    shadowRadius: 8,
  },
  gigHeading: {
    color: "#fff",
    fontSize: 18,
    opacity: 1,
    margin: 5,
    fontWeight: "900",
    alignSelf: "center",
  },
  gigText: {
    color: "#fff",
    fontSize: 18,
    opacity: 1,
    fontWeight: "bold",
  },
  smallUrlPic: {
    height: 100,
    width: 100,
    borderRadius: 15,
    alignSelf: "center",
  },
  BackButton: {
    height: 50,
    width: 50,
    marginTop: 60,
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
export default Filter;
