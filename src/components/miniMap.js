import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const SlideItems = () => {
  let mapRef = null;

  return (
    <View style={styles.container}>
      <MapView
        ref={(ref) => {
          mapRef = ref;
        }}
        focusable
        provider={PROVIDER_GOOGLE}
        style={{ ...styles.map }}
        region={{
          latitude: 6.5194683,
          longitude: 3.3674491,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
        zoomEnabled={true}
        showsUserLocation={true}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    height: "100%",
   
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
 
  },
  map: {
    width:"100%",
    height: "100%",
  },
});
export default SlideItems;
