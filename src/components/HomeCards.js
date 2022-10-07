import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import { colors } from "../helpers/colors";

const HomeCards = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 4,
    aspectRatio: 1,
    backgroundColor:colors.grey1,
    borderRadius:10,
    margin:3
  },
});
export default HomeCards;
