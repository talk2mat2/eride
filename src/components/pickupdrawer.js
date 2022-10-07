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
const PickDrwaer = ({ title = "", setAnimedon, setDrawer }) => {
  const [selected, setSelected] = React.useState(1);
  const Intro = new Animated.ValueXY({
    x: 0,
    y: Dimensions.get("window").height,
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

  const HandlePress = () => {
    setAnimedon(false);
    setDrawer(false);
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
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Buttons
          onPress={HandlePress}
          textStyles={{ fontSize: 16 }}
          btnStyles={{ height: 40 }}
          title="Available Pick Up"
        />
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
export default PickDrwaer;
