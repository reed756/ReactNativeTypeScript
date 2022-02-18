// import React, { FC } from "react";
// import { TextInput, View, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// interface Props {
//   icon: string;
//   placeholder: string;
//   onChangeText: (text: string) => void;
// }

// const Input: FC<Props> = (props) => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flex: 0.1,
//           justifyContent: "center",
//           alignItems: "flex-start",
//         }}
//       >
//         <Ionicons
//           style={{ padding: 5 }}
//           name={props.icon}
//           size={22}
//           color="#555"
//         />
//       </View>
//       <View style={{ flex: 1, justifyContent: "center" }}>
//         <TextInput
//           style={{ padding: 5 }}
//           placeholderTextColor="#555"
//           placeholder={props.placeholder}
//           onChangeText={props.onChangeText}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default Input;
