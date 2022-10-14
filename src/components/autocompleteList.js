import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../helpers/colors";
import AutoItem from "./autoItem";
const AutoCompleteList = ({ predictions = [],handleplaces }) => {
  return (
    <View style={styles.container}>
      {predictions?.map((places, index) => (
        <AutoItem handleplaces={handleplaces} places={places} key={index} />
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
