import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import Header from "../components/header";
import InputGroup from "../components/InputGroup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../helpers/colors";
import AutoCompleteList from "../components/autocompleteList";
import { useSelector, useDispatch } from "react-redux";
import corsapi from "../services/corsapi";
import WithSpinner from "../components/withspinner";
import { setDestination, setMylocation } from "../redux/reducers/locationSlice";
const EnterPickUp = ({ navigation, setLoading }) => {
  const [pickup, setPickUp] = React.useState("");
  const [destin, setDestin] = React.useState("");
  const [predictions, setPredictions] = React.useState([]);
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const [focused, setFocused] = React.useState("");
  const myDestination = useSelector(
    ({ myLocation }) => myLocation?.myDestination
  );
  const dispatch = useDispatch();
  const isLocationSet = () => {
    if (myLocation) {
      return false;
    } else {
      return true;
    }
  };
  const isDestinationSet = () => {
    if (myDestination) {
      return false;
    } else {
      return true;
    }
  };
  const handleAutoSearch = async (text) => {
    if (focused == "myLocation") {
      setPickUp(text);
    }
    if (focused == "myDestination") {
      setDestin(text);
    }
    await corsapi
      .getAutoComplete(text)
      .then((res) => {
        setPredictions(res?.predictions);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        if (focused === "myLocation") {
          setPredictions([]);
          setPickUp(address);
          dispatch(
            setMylocation({
              lat: lat,
              lng: lng,
              address: address,
            })
          );
        }
        if (focused === "myDestination") {
          setPredictions([]);
          setDestin(address);
          dispatch(
            setDestination({
              lat: lat,
              lng: lng,
              address: address,
            })
          );
          navigation.navigate("withmap");
        }
        // return await handleToClick(lng, lat, address);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

    // return await handleToClick(lng, lat, address)
  };
  useFocusEffect(
    React.useCallback(() => {
      if (myLocation?.address) {
        setPickUp(myLocation?.address);
      }
    }, [])
  );
  return (
    <View style={styles.container}>
      <Header
        animate={false}
        navigation={navigation}
        textStyle={{ fontSize: 25 }}
        title="Locations"
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="map-marker-plus-outline"
            size={26}
            color={colors.white}
          />
        </TouchableOpacity>
      </Header>
      <View style={{ paddingHorizontal: 20, marginTop: 9 }}>
        <InputGroup
          onChangeText={handleAutoSearch}
          onFocus={() => setFocused("myLocation")}
          placeholder="set pickup location"
          value={pickup}
          autoFocus={isLocationSet()}
          isset={isLocationSet()}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 4 }}>
        <InputGroup
          value={destin}
          onChangeText={handleAutoSearch}
          onFocus={() => setFocused("myDestination")}
          autoFocus={isDestinationSet()}
          isset={isDestinationSet()}
        />
      </View>
      <AutoCompleteList handleplaces={handleplaces} predictions={predictions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default WithSpinner(EnterPickUp);
