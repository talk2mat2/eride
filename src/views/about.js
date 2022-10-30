import React from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  Text,
} from "react-native";
import Header from "../components/header";
import { fonts } from "../helpers/constants";

const About = ({ navigation }) => {
  const handleNavigation = (location) => {
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <Header
        textStyle={{ fontSize: 20 }}
        animate={true}
        navigation={navigation}
        title="About"
      />
      <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
        <TouchableNativeFeedback onPress={() => handleNavigation("terms")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              height: 40,
            }}
          >
            <Image source={require("../../assets/Vector.png")} />
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Terms and Condition
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => handleNavigation("privacy")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              height: 40,
            }}
          >
            <Image source={require("../../assets/Vector.png")} />
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Privacy Policy
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => handleNavigation("abouteride")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              height: 40,
            }}
          >
            <Image source={require("../../assets/Vector.png")} />
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              About e-ride̦
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
export default About;
