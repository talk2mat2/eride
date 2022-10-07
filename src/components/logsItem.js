import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const LogsItem = () => {
  return (
    <View style={styles.container}>
      <Image style={{ height:50, }} resizeMode="contain" source={require("../../assets/profile.png")} />
      <View style={{ marginRight:"auto" ,marginLeft:5}}>
        <Text style={fonts.h2}>Samuel Wale</Text>
        <Text style={{...fonts.p,color:colors.grey2}}>#484848</Text>
      </View>
      <Text>#24,989</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height:60,
    justifyContent:"space-between",
 
    alignItems:"center",
    marginVertical:2
  },
});
export default LogsItem;
