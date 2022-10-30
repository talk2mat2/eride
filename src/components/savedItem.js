import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { deleteDestination } from "../redux/reducers/history";
import { useDispatch } from "react-redux";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const SavedItem = ({ places, handleplaces }) => {
  const dispatch = useDispatch();
  const dlete = () => {
    dispatch(deleteDestination(places));
  };
  return (
    <TouchableNativeFeedback
      onPress={() =>
        handleplaces({
          placesid: places?.place_id,
          address: places?.description,
        })
      }
    >
      <View style={styles.container}>
        <Ionicons name="location-outline" size={24} color={colors.grey2} />
        <Text
          style={{
            ...fonts.p,
            marginRight: "auto",
            marginLeft: 20,
            maxWidth: "80%",
          }}
        >
          {places?.address}
        </Text>
        <TouchableNativeFeedback onPress={dlete}>
          <AntDesign name="delete" size={17} color={colors.grey2} />
        </TouchableNativeFeedback>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-flex-start",
    paddingHorizontal: 20,
  },
});
export default SavedItem;
