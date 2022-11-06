import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const CardListrItems = ({ name = "" ,onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress} >
      <View style={styles.container}>
        <Avatar.Image style={{ backgroundColor: colors.primary }} size={45} />
        <Text style={{ ...fonts.p, marginLeft: 20 }}>{name}</Text>
        <View
          style={{
            marginLeft: "auto",
           
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* <Text style={{ ...fonts.p }}>VISA</Text> */}
          <FontAwesome5 name="chevron-right" size={24} color={colors.grey2} />
        </View>
        <Divider style={{ ...styles.hr }} />
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

{
  /* <TouchableNativeFeedback>
<View style={styles.container}>
  <Avatar.Image style={{ backgroundColor: colors.primary }} size={31} />
  <View style={{ marginLeft: 10, width: "80%" }}>
    <Text style={{ ...fonts.p }}>************5743</Text>
    <Text style={{ ...fonts.p }}>VISA</Text>
    <Divider style={{ ...styles.hr }} />
  </View>
</View>
</TouchableNativeFeedback> */
}
