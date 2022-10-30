import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const HistoryItem = ({item}) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <Ionicons name="location-outline" size={24} color={colors.grey2} />
        <View>
          <Text
            style={{
              ...fonts.p,
          
              marginLeft: 9,
              fontSize: 20,
            }}
          >
            {item?.bustop}
          </Text>
          <Text
            style={{
              ...fonts.p,
           
              marginLeft: 9,
              color: colors.grey2,
            }}
          >
          {item?.address}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  borderColor:colors.grey1,
  borderBottomWidth:1,
    paddingHorizontal: 10,
  },
});
export default HistoryItem;
