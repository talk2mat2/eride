import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import MyLocIcon from "./mylocIcon";

const SlideItems = () => {
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const [mapNearDrivers, setMapnearDrivers] = React.useState([]);
  const NearbyDrivers = useSelector(
    ({ myLocation }) => myLocation?.nearbyDrivers
  );
  let mapRef = null;
  React.useEffect(() => {
    if (NearbyDrivers?.length) {
      let updated = NearbyDrivers?.map((item, index) => {
        return {
          longitude: item.longitude,
          latitude: item?.latitude,
          _id: String(index),
        };
      });
      setMapnearDrivers(updated);
    }
  }, [NearbyDrivers]);
  return (
    <View style={styles.container}>
      <MapView
        ref={(ref) => {
          mapRef = ref;
        }}
        focusable
        provider={PROVIDER_GOOGLE}
        style={{ ...styles.map }}
        onLayout={() =>
          mapRef.fitToCoordinates(
            NearbyDrivers?.map((item, index) => {
              return {
                longitude: item.longitude,
                latitude: item?.latitude,
                _id: String(item.user_id),
              };
            }),

            {
              edgePadding: { top: 20, right: 30, bottom: 20, left: 20 },
              animated: true,
            }
          )
        }
        region={
          myLocation
            ? {
                latitude: myLocation?.lat,
                longitude: myLocation.lng,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021,
              }
            : {
                latitude: 6.5194683,
                longitude: 3.3674491,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021,
              }
        }
        zoomEnabled={true}
        showsUserLocation={true}
      >
        {/* {mapNearDrivers.map((item, index) => (
          <MapView.Marker key={`${item.user_id}${Date.now()}`} coordinate={item}>
          <Image style={{ width:20 }} resizeMode="contain" source={require("../../assets/cartop.png")} />
          </MapView.Marker>
        ))} */}
        {mapNearDrivers.map((item, index) => (
          <MapView.Marker key={item.user_id} coordinate={item}>
          <Image style={{ width:20 }} resizeMode="contain" source={require("../../assets/cartop.png")} />
          </MapView.Marker>
        ))}
      </MapView>
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
    width: "100%",
    height: "100%",
  },
});
export default SlideItems;
