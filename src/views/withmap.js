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

const WithMap = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  const [animedone, setAnimedon] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 9000);
  }, []);
  return (
    <View style={styles.container}>
      <Header animate={false}
        textStyle={{ fontSize: 25 }}
        navigation={navigation}
        title="Eride"
      />
      <MapViews animedone={animedone} />
      <CarsDrwaer setAnimedon={setAnimedon} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WithMap;
