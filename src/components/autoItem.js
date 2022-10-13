import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const AutoItem = ({ places }) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <Ionicons name="location-outline" size={24} color={colors.grey2} />
        <Text style={{ ...fonts.p, marginRight: "auto", marginLeft: 20 ,maxWidth:"80%"}}>
          {places?.description}
        </Text>
        <Feather name="arrow-up-left" size={24} color={colors.grey2} />
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
export default AutoItem;
