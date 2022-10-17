import React, { Children } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { FontAwesome5 } from "@expo/vector-icons";
const Header = ({
  title = "",
  textStyle = {},
  children,
  bgColor="",
  showNav = true,
  navigation,
  animate = false,
  iconColor=""
}) => {
  const Intro = new Animated.ValueXY({
    x: 0,
    y: -60,
  });
  const BoxAnim = () => {
    Animated.timing(Intro, {
      toValue: { x: 0, y: 0 },
      bounciness: 3,
      speed: 20,
      delay: 1,

      useNativeDriver: true,
      duration: 500,
    }).start(() => {});
  };
  React.useEffect(() => {
    if (animate) BoxAnim();
  }, []);
  const handleBack = () => {
    if (navigation) {
      navigation.goBack();
    }
  };
  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: animate ? [{ translateY: Intro.y }] : [], backgroundColor:bgColor||colors.primary
      }}
    >
      {showNav && (
        <TouchableOpacity style={{ paddingRight:20 }} onPress={handleBack}>
          <FontAwesome5 name="arrow-left" size={25} color={iconColor||colors.white} />
        </TouchableOpacity>
      )}
      <Text style={{ ...fonts.h1, marginLeft: 30, fontSize: 30, ...textStyle }}>
        {title}
      </Text>
      <View
        style={{
          marginLeft: "auto",
          paddingHorizontal: 20,
          height: "100%",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    padding: 3,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Header;
