import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const MapViews = ({ animedone }) => {
  let mapRef = null;

  return (
    <View style={{ ...styles.container, marginBottom: animedone ? 176 : 0 }}>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
export default MapViews;
