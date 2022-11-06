import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { colors } from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "../helpers/constants";
import Buttons from "./buttons";
const RequestItem = ({ navigation, item }) => {

  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("rqdetails", {
          details: item,
        })
      }
    >
      <View style={styles.container}>
        <Ionicons
          name="person-circle-outline"
          size={50}
          color={colors.primary}
        />
        <View style={{ marginRight: "auto", marginLeft: 5 }}>
          <Text style={fonts.h2}>{item?.username || "request"}</Text>
          <Text style={{ ...fonts.p, color: colors.grey2 }}>
            {item?.request_time?.split(" ")?.[1]}
          </Text>
        </View>
        <Buttons
          onPress={() =>
            navigation.navigate("rqdetails", {
              details: item,
            })
          }
          btnStyles={{ height: 20, width: 80 }}
          textStyles={{ fontSize: 12 }}
          title="View"
        />
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",

    alignItems: "center",
    marginVertical: 2,
  },
});
export default RequestItem;
