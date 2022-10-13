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
import { useSelector } from "react-redux";
const EnterPickUp = ({ navigation }) => {
  const [pickup, setPickUp] = React.useState("");
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const [focused, setFocused] = React.useState("");
  const myDestination = useSelector(
    ({ myLocation }) => myLocation?.myDestination
  );
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
  const handleAutoSearch = () => {};

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
          onFocus={() => setFocused("myLocation")}
          placeholder="set pickup location"
          value={pickup}
          autoFocus={isLocationSet()}
          isset={isLocationSet()}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 4 }}>
        <InputGroup
          onFocus={() => setFocused("myDestination")}
          autoFocus={isDestinationSet()}
          isset={isDestinationSet()}
        />
      </View>
      <AutoCompleteList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default EnterPickUp;
