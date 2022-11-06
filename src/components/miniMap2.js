import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import MyLocIcon from "./mylocIcon";

const MiniMap = ({ details }) => {
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const [mapNearDrivers, setMapnearDrivers] = React.useState([]);
  const NearbyDrivers = useSelector(
    ({ myLocation }) => myLocation?.nearbyDrivers
  );
  let mapRef = null;
  const startstop = [
    {
      latitude: details?.user_location_lat,
      longitude: details?.user_location_lng,
      _id: 1,
    },
    {
      latitude: details?.user_destination_lat,
      longitude: details?.user_destination_lng,
      _id: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        ref={(ref) => {
          mapRef = ref;
        }}
        onLayout={() =>
          mapRef.fitToCoordinates(
            startstop,

            {
              edgePadding: { top: 80, right: 30, bottom: 50, left: 20 },
              animated: true,
            }
          )
        }
        // ref={mapRef}
        focusable
        provider={PROVIDER_GOOGLE}
        style={{ ...styles.map }}
        // region={
        //   myLocation
        //     ? {
        //         latitude: myLocation?.lat,
        //         longitude: myLocation.lng,
        //         latitudeDelta: 0.0022,
        //         longitudeDelta: 0.0021,
        //       }
        //     : {
        //         latitude: 6.5194683,
        //         longitude: 3.3674491,
        //         latitudeDelta: 0.0022,
        //         longitudeDelta: 0.0021,
        //       }
        // }
        zoomEnabled={true}
        showsUserLocation={true}
      >
        {true ? (
          <Marker
            coordinate={{
              latitude: 6.61286,
              longitude: 3.356957,
            }}
            title={"Start location"}
            description={""}
            pinColor={"green"}
          >
            <MyLocIcon title="Pickup" />
          </Marker>
        ) : null}
        {true ? (
          <Marker
            coordinate={{
              latitude: 6.4983,
              longitude: 3.3486,
            }}
            title={"Start location"}
            description={""}
            pinColor={"green"}
          >
            <MyLocIcon title="End" />
          </Marker>
        ) : null}
        {true && (
          <Polyline
            coordinates={startstop}
            strokeColor={colors.lightblue} // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["#7F0000"]}
            strokeWidth={3}
          />
        )}
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
export default MiniMap;
