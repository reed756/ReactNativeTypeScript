import * as React from "react";
import { FC, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { Authenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);

// import Input from "./Input";
// import { Fruit, Fruits } from "./data";
// import Item from "./ListItem";

// AKIA3KDFAUFYQ4FLPLKV
// 4U5HxNLi5dE16vyq6/bDhseD2sVaBlyp/P7pn0aH

const App: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
        <Authenticator>
          {({ signOut, user }) => (
            <View>
              <Text>
                Hey {user.username}, welcome to my channel, with auth!
              </Text>
              <Button onPress={signOut} title="Sign out" />
            </View>
          )}
        </Authenticator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default withAuthenticator(App);

{
  /* <View style={styles.container}>
        <Input
          icon="md-search"
          placeholder="Search"
          onChangeText={(text) => {
            console.log(text);
          }}
        />
        <FlatList
          style={{ marginVertical: 10 }}
          data={Fruits}
          renderItem={({ item }) => (
            <Item id={item.id} name={item.name} price={item.price} />
          )}
        />
      </View> */
}

// const [searchQuery, setSearchQuery] = useState();
// const [Fruits, setFruits] = useState<Fruit[] | null>(null);

// useEffect(() => {
//   (() => {
//     setFruits(Fruits);
//   })();
// }, []);

// const handleSearch = (text) => {
//   const fruits: Fruits[] = Fruits.filter((fruit) =>
//     fruit.name.includes(text)
//   );
//   setFruits(fruits);
// };
