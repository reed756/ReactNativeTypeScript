import { createNativeStackNavigator } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Home: any;
  UserDetails: any;
  AddUserPic: any;
  Filter: any;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
