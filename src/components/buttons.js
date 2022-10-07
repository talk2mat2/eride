import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const Buttons = ({
  onPress,
  title = "",
  textStyles = {},
  children,
  btnStyles = {},
}) => {
  return (
    <TouchableOpacity onPress={onPress || null}>
      <View style={{ ...styles.container, ...btnStyles }}>
        {children}
        <Text style={{ ...fonts.h1, ...textStyles }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 49,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
export default Buttons;
