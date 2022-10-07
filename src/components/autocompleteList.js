import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../helpers/colors";
import AutoItem from "./autoItem";
const AutoCompleteList = () => {
  return (
    <View style={styles.container}>
      <AutoItem />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "80%",
    backgroundColor: colors.white,
  },
});
export default AutoCompleteList;
