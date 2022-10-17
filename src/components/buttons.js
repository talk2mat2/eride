import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const Buttons = ({
  onPress,
  disabled = false,
  title = "",
  textStyles = {},
  children,
  btnStyles = {},
}) => {
  return (
    <TouchableOpacity onPress={!disabled ? onPress : null}>
      <View
        style={{
          ...styles.container,

          backgroundColor: disabled ? colors.grey3 : colors.primary,
          ...btnStyles,
        }}
      >
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
