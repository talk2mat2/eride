import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HeaderMenu = ({ title = "" }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems:"center",justifyContent:"center" }}>
        <Ionicons name="menu" size={35} color={colors.white} />
      </TouchableOpacity>
      <Text style={{ ...fonts.h1, marginLeft: 30,fontSize:30 }}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    padding: 3,
    paddingLeft:10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default HeaderMenu;
