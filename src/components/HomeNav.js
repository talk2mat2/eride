import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const HomeNav = ({ title = "", onPress = () => {} }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="ios-star-sharp" size={24} color={colors.grey2} />
        <Text
          style={{
            ...fonts.h2,
            fontSize: 24,
            color: colors.grey2,
            marginRight: "auto",
            marginLeft: 20,
          }}
        >
          {title}
        </Text>
        <FontAwesome5 name="chevron-right" size={24} color={colors.grey2} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default HomeNav;
