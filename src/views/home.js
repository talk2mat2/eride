import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Buttons from "../components/buttons";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import HomeCards from "../components/HomeCards";

import SlideItems from "../components/sliderItem";
import { colors } from "../helpers/colors";
import { useClientQuery } from "../services/api";
import { fonts } from "../helpers/constants";
import SetPickUp from "../components/SetPickUp";
import MiniMap from "../components/miniMap";
import Slider from "../components/slider";
import HomeNav from "../components/HomeNav";
import { useFocusEffect } from "@react-navigation/native";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import corsapi from "../services/corsapi";
import { setMylocation } from "../redux/reducers/locationSlice";
import WithSpinner from "../components/withspinner";

const Home = ({ navigation, setLoading }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();


  // const { data, isError, isLoading, refetch } = useClientQuery("https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY");

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (!data) {
  //       refetch();
  //     }
  //     console.log(data)
  //   }, [])
  // );
  const handleNav = (location) => {
    navigation.navigate(location);
  };
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
            marginTop: "9%",
            alignItems: "center",
            height: 320,
            backgroundColor: "cyan",
          }}
        >
          <MiniMap />
        </View>
        <View
          style={{
            marginTop: "2%",
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
          <HomeNav
            onPress={() => handleNav("SavedLocation")}
            title="Saved Locations"
          />
          <HomeNav
            title="History"
            onPress={() => handleNav("LocationHistory")}
          />
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
export default WithSpinner(Home);
