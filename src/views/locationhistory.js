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
import HistoryItem from "../components/HistoryItem";
const LocationHistory = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        animate={true}
        navigation={navigation}
        textStyle={{ fontSize: 25 }}
        title="Location history"
      />

      <View style={{ marginTop:"10%"}}>
 <HistoryItem/>
 <HistoryItem/>
 <HistoryItem/>
 <HistoryItem/>
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
export default LocationHistory;
