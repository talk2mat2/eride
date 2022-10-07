import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import Buttons from "./buttons";
const CarsDrwaer = ({ title = "", setAnimedon }) => {
  const [selected, setSelected] = React.useState(1);
  const Intro = new Animated.ValueXY({
    x: 0,
    y: -Dimensions.get("window").height / 2,
  });
  const BoxAnim = () => {
    Animated.timing(Intro, {
      toValue: { x: 0, y: 0 },
      bounciness: 3,
      speed: 20,

      useNativeDriver: true,
      duration: 2000,
    }).start(() => {
      setAnimedon(true);
    });
  };
  React.useEffect(() => {
    setTimeout(() => {
      BoxAnim();
    }, 1000);
  }, []);
  return (
    <Animated.View
      style={{ ...styles.container, transform: [{ translateY: Intro.y }] }}
    >
      <View style={{ alignItems: "center" }}>
        <Buttons
          textStyles={{ fontSize: 14 }}
          btnStyles={{ height: 30 }}
          title="Proceed"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "auto",
          width: "90%",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => setSelected(1)}>
          <View
            style={selected == 1 ? styles.selected : { alignItems: "center" }}
          >
            <Image style={{ width:80 }}  source={require("../../assets/car1.png")} />
            <Text style={{ ...fonts.h2, fontSize: 14 }}>Micro</Text>
            <Text style={{ ...fonts.h2, fontSize: 14 }}>5 Min</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <View
            style={selected == 2 ? styles.selected : { alignItems: "center" }}
          >
            <Image style={{ width:80 }}  source={require("../../assets/car2.png")} />
            <Text style={{ ...fonts.h2, fontSize: 14 }}>Mini</Text>
            <Text style={{ ...fonts.h2, fontSize: 14 }}>5 Min</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(3)}>
          <View
            style={selected == 3 ? styles.selected : { alignItems: "center"}}
          >
            <Image style={{ width:80 }} source={require("../../assets/car3.png")} />
            <Text style={{ ...fonts.h2, fontSize: 14 }}>Saidan</Text>
            <Text style={{ ...fonts.h2, fontSize: 14 }}>5 Min</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 176,
    backgroundColor: colors.white,
    padding: 10,
    width: "100%",
    elevation: 4,
    zIndex: 4,
    bottom: 0,
    position: "absolute",
    right: 0,
    padding: 20,
  },
  selected: {
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
export default CarsDrwaer;
