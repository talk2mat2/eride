import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../helpers/colors";
import AutoItem from "./autoItem";
const AutoCompleteList = () => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4].map((xx,index) => (
        <AutoItem key={index} />
      ))}
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
