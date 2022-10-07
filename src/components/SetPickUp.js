import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const SetPickUp = ({ navigation }) => {
  return (
    <TouchableNativeFeedback onPress={()=>navigation?.navigate("EnterPickup")}>
      <View style={styles.container}>
        <AntDesign name="search1" size={24} color="black" />
        <Text style={{ ...fonts.h2, color: colors.grey2, marginLeft: 10 }}>
          Enter Pick UpPoint
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: colors.grey1,
    borderRadius: 10,
    marginVertical: 3,
  },
});
export default SetPickUp;
