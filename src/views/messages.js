import React from "react";
import { View, StyleSheet,Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import { colors } from "../helpers/colors";
const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        textStyle={{ fontSize: 19 }}
        navigation={navigation}
        title="Messages"
      />
      <View style={{ alignItems: "center", marginTop: "30%" }}>
        <Ionicons name="warning-outline" size={30} color={colors.primary} />
        <Text style={{ color: colors.grey2 }}>No New Messages</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
export default Messages;
