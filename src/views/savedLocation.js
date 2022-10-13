import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "../components/header";
import InputGroup from "../components/InputGroup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import AutoCompleteList from "../components/autocompleteList";
import { fonts } from "../helpers/constants";
const SavedLocation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        animate={true}
        navigation={navigation}
        textStyle={{ fontSize: 25 }}
        title="Choose a destination "
      />

      <View style={{ alignItems:"center" ,marginTop:"20%"}}>
        <TouchableNativeFeedback>
          <View style={{ flexDirection: "row" ,alignItems:"center",padding:10}}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="map-marker-plus-outline"
                size={26}
                color={colors.primary}
              />
            </TouchableOpacity>
            <Text style={{ ...fonts.p,marginLeft:10 }}>Save New Destination</Text>
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
export default SavedLocation;
