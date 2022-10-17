import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../helpers/colors";
import { AntDesign } from "@expo/vector-icons";
const PickIcon = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.text, width: 90, alignItems: "center" }}>
        <Text style={{ color: colors.white, paddingVertical: 5 }}>Pick Up</Text>
      </View>
      <AntDesign
        name="caretdown"
        size={24}
        color={colors.black}
        style={{ marginTop: -9 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: { borderRadius: 20, backgroundColor: colors.black },

  container: { width: 90, alignItems: "center",justifyContent:"center"},
});
export default PickIcon;
