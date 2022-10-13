import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const CardListrItems = () => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <Avatar.Image style={{ backgroundColor: colors.primary }} size={31} />
        <View style={{ marginLeft: 10, width: "80%" }}>
          <Text style={{ ...fonts.p }}>************5743</Text>
          <Text style={{ ...fonts.p }}>VISA</Text>
          <Divider style={{ ...styles.hr }} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    padding: 9,
  },
  hr: {
    backgroundColor: colors.grey2,
    height: 2,
    marginVertical: 3,
  },
});
export default CardListrItems;
