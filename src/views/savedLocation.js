import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import corsapi from "../services/corsapi";
import Header from "../components/header";
import InputGroup from "../components/InputGroup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { setDestination, setMylocation } from "../redux/reducers/locationSlice";
import AutoCompleteList from "../components/autocompleteList";
import { fonts } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AutoItem from "../components/autoItem";
import SavedItem from "../components/savedItem";
import WithSpinner from "../components/withspinner";
const SavedLocation = ({ navigation ,setLoading}) => {
  const savedLocation = useSelector(
    ({ historySlice }) => historySlice?.savedLocation
  );
  const dispatch = useDispatch();
  const handleplaces = async (data) => {
    const { placesid } = data;
  
    setLoading(true);
    await corsapi
      .getByPlacesId(placesid)
      .then(async (res) => {
        setLoading(false);
        const lng = res.result.geometry.location.lng;
        const lat = res.result.geometry.location.lat;
        const address = res.result.formatted_address;
        // console.log(lng, lat, address);

        dispatch(
          setMylocation({
            lat: lat,
            lng: lng,
            address: address,
          })
        );
        navigation.navigate("EnterPickup");
        // return await handleToClick(lng, lat, address);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

    // return await handleToClick(lng, lat, address)
  };

  return (
    <View style={styles.container}>
      <Header
        animate={true}
        navigation={navigation}
        textStyle={{ fontSize: 25 }}
        title="Choose a destination "
      />

      <View style={{ alignItems: "center", marginTop: "3%" }}>
        <TouchableNativeFeedback>
          <View style={{ alignItems: "center", padding: 10 }}>
            <TouchableNativeFeedback
              onPress={() => navigation.navigate("savelocation")}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="map-marker-plus-outline"
                  size={26}
                  color={colors.primary}
                />
                <Text style={{ ...fonts.p, marginLeft: 10 }}>
                  Save New Destination
                </Text>
              </View>
            </TouchableNativeFeedback>
            <View
              style={{ marginBottom: "3%", marginTop: "8%", height: "90%" }}
            >
              <ScrollView>
                {[...savedLocation].map((places, index) => (
                  <SavedItem
                    handleplaces={handleplaces}
                    places={places}
                    key={index}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      {/* <AutoCompleteList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default WithSpinner(SavedLocation)
