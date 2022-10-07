import React from "react";
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import Header from "../components/header";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TextInputs from "../components/Textinput";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { Avatar, Divider } from "react-native-paper";
import { fonts } from "../helpers/constants";
import HeaderMenu from "../components/headerMenu";
import CarsDrwaer from "../components/carsdrawer";
import MapViews from "../components/mapview";
import PickDrwaer from "../components/pickupdrawer";
import PickList from "../components/pickupList";

const PickUpWithMap = () => {
  const [open, setOpen] = React.useState(false);
  const [drawer, setDrawer] = React.useState(true);
  const [animedone, setAnimedon] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 9000);
  }, []);
  return (
    <View style={styles.container}>
      <Header title="E-Ride" />
      <MapViews animedone={animedone} />
      {/* {drawer == true && (
        <PickDrwaer setDrawer={setDrawer} setAnimedon={setAnimedon} />
      )} */}
      {<PickList setDrawer={setDrawer} setAnimedon={setAnimedon} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PickUpWithMap;
