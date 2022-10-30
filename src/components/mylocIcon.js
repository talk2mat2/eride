import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../helpers/colors";
import { AntDesign } from "@expo/vector-icons";
import { fonts } from "../helpers/constants";
const MyLocIcon = ({ title = "",bg }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.text,
          width: 50,
          alignItems: "center",
          backgroundColor: bg || colors.blue,
        }}
      >
        <Text
          style={{
            color: colors.white,
            paddingTop: 15,
            ...fonts.p,
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </View>
      <AntDesign
        name="caretdown"
        size={24}
        color={colors.blue}
        style={{ marginTop: -11 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: { borderRadius: 40, height: 50 },

  container: { alignItems: "center", justifyContent: "center" },
});
export default MyLocIcon;
