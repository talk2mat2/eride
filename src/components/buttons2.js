import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { LinearGradient } from "expo-linear-gradient";
const Buttons = ({ title = "", textStyles = {}, children, btnStyles = {} }) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        // Button Linear Gradient

        colors={["#2E36A4", "rgba(46, 54, 164, 0.64)"]}
        style={{ ...styles.container, ...btnStyles }}
      >
        <View style={{ flexDirection: "row",alignItems:"center" }}>
          <Text style={{ ...fonts.h1, ...textStyles }}>{title}</Text>
          {children}
        </View>
      </LinearGradient>
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
