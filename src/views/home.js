import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Buttons from "../components/buttons";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import HomeCards from "../components/HomeCards";

import SlideItems from "../components/sliderItem";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import SetPickUp from "../components/SetPickUp";
import MiniMap from "../components/miniMap";
import Slider from "../components/slider";
import HomeNav from "../components/HomeNav";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View
          style={{
            marginTop: "20%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <HomeCards />
          <HomeCards />
          <HomeCards />
        </View> */}
        <View
          style={{
            marginTop: "4%",
            alignItems: "center",
            height: 300,
            backgroundColor: "cyan",
          }}
        >
          <MiniMap />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Slider />
        </View>
        <View style={{ marginTop: "1%" }}>
          <SetPickUp navigation={navigation} />
        </View>

        <View style={{ height: 140 }}>
          <HomeNav title="Saved Locations" />
          <HomeNav title="History" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
});
export default Home;
