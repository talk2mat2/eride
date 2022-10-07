import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import Header from "../components/header";
import InputGroup from "../components/InputGroup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import AutoCompleteList from "../components/autocompleteList";
const EnterPickUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        animate={true}
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
        <InputGroup />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 4 }}>
        <InputGroup autoFocus={true} />
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
