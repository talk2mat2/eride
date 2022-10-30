import React from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  Text,
  Linking,
} from "react-native";
import Header from "../components/header";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const Abouteride = ({ navigation }) => {
  const handleNavigation = (location) => {
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <Header
        textStyle={{ fontSize: 20 }}
        animate={true}
        navigation={navigation}
        title="About Eride"
      />
      <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          <Text style={{ ...fonts.h2, fontSize: 30 }}>Eride</Text>
          <Text style={{ ...fonts.p, color: colors.grey2 }}>
            Version 1.100.1
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: "20%" }}>
          <Text style={{ ...fonts.h2, textAlign: "center" }}>
            Copyright 2010-2022 essetials.ng,{"\n"} all right reserved
          </Text>
          <Text style={{ ...fonts.p, color: colors.grey2 ,marginTop:"30%"}}>
            for more details visit{" "}
            <TouchableNativeFeedback
              onPress={() =>
                Linking.openURL("https://eride.essentialdirect.ng/sign-in")
              }
            >
              <Text style={{ ...fonts.p, color: colors.blue }}>Essentials</Text>
            </TouchableNativeFeedback>
          </Text>
        </View>
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
export default Abouteride;
