import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const SlideItem1 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ ...fonts.h1, fontSize: 20 }}>
          Quick, in-town delivery
        </Text>
        <Text style={{ ...fonts.h1, fontSize: 14 }}>Send a package</Text>
      </View>
      <Image source={require("../../assets/gift.png")} />
    </View>
  );
};
const SlideItem2 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ ...fonts.h1, fontSize: 20 }}>Got favorite drivers?</Text>
        <Text style={{ ...fonts.h1, fontSize: 14 }}>Book Reserve</Text>
      </View>
      <Image source={require("../../assets/Rectangle-38.png")} />
    </View>
  );
};
const SlideItem3 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ ...fonts.h1, fontSize: 20 }}>
          Leave something at home?
        </Text>
        <Text style={{ ...fonts.h1, fontSize: 14 }}>Send a package</Text>
      </View>
      <Image source={require("../../assets/Rectangle-40.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 125,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 3,
  },
});
export { SlideItem1, SlideItem2, SlideItem3 };
