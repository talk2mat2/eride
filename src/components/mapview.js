import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";

const MapViews = ({ animedone }) => {
  let mapRef = null;
  // const mapRef = React.useRef();
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const myDestination = useSelector(
    ({ myLocation }) => myLocation?.myDestination
  );

  const items = () => {
    if (myLocation && myDestination) {
      return [
        { latitude: myLocation.lat, longitude: myLocation.lng, _id: "2" },
        {
          latitude: myDestination.lat,
          longitude: myDestination.lng,
          _id: "1",
        },
      ];
    } else return [];
  };
  // React.useEffect(() => {
  //   if (mapRef.current) {
  //     // list of _id's must same that has been provided to the identifier props of the Marker
  //     mapRef.current.fitToSuppliedMarkers(items().map(({ _id }) => _id),{animated:true});
  //   }
  // }, [myDestination,myLocation]);
  return (
    <View style={{ ...styles.container, marginBottom: animedone ? 176 : 0 }}>
      <MapView
        ref={(ref) => {
          mapRef = ref;
        }}
        onLayout={() =>
          mapRef.fitToCoordinates(
            items(),

            {
              edgePadding: { top: 20, right: 30, bottom: 20, left: 20 },
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
        {myLocation.lat && myDestination.lat && (
          <Polyline
            coordinates={items()}
            strokeColor="grey" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["#7F0000"]}
            strokeWidth={2}
          />
        )}
        {myLocation ? (
          <Marker
            coordinate={{
              latitude: myLocation.lat,
              longitude: myLocation.lng,
            }}
            title={"me"}
            description={"me"}
            pinColor={"green"}
          />
        ) : null}
      </MapView>
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
