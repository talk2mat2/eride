import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  ScrollView,
} from "react-native";
import { colors } from "../helpers/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { fonts } from "../helpers/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import Buttons from "./buttons";
import DriverListItem from "./diverListItem";
const PickList = ({ title = "", setAnimedon, setDrawer }) => {
  const [selected, setSelected] = React.useState(1);
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");
  const outcomePopper = React.useRef(
    new Animated.ValueXY({
      x: 0,
      y: Dimensions.get("window").height,
    })
  ).current;
  const selectedPopper = new Animated.ValueXY({
    x: 0,
    y: 0,
  });
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
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     BoxAnim();
  //   }, 1000);
  // }, []);

  const pan = PanResponder.create({
    //this set the position to the supplied x/y position

    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (e, gestureState) => {
      const MaxDistance = deviceHeight / 2 - 40;
      const MinDistance = 0;

      const dxCapped = Math.min(
        Math.max(parseInt(gestureState.dy), MinDistance),
        MaxDistance
      );
      if (gestureState.dy < MaxDistance && gestureState.dy > MinDistance) {
        // values.dx = gestureState.dx
        // values.dy = gestureState.dy
        outcomePopper.setValue({ x: gestureState.dx, y: gestureState.dy });
        // Animated.spring(outcomePopper, {
        //   toValue: { x: gestureState.dx, y: gestureState.dy },
        //   useNativeDriver: true,
        //   bounciness: 10,

        // }).start();
      } else {
        Animated.spring(outcomePopper, {
          toValue: { x: gestureState.dy, y: dxCapped },
          useNativeDriver: true,
          bounciness: 2,
        }).start();
      }
    },
    // (e, c) => {
    //   // console.log("move", e);
    //   Animated.event([null, { dx: position.x, dy: position.y }]);
    // },
  });
  React.useEffect(() => {
    Animated.spring(outcomePopper, {
      toValue: { x: 0, y: 7 },
      useNativeDriver: true,
      bounciness: 10,
      speed: 20,
    }).start(() => setAnimedon(true));
  }, []);
  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{ translateY: outcomePopper.y }],
      }}
    >
      <Animated.View {...pan.panHandlers} style={{ alignItems: "center" }}>
        <MaterialIcons name="drag-handle" size={30} color={colors.grey2} />
        <View style={{ alignItems: "center", marginTop: 5, paddingBottom: 20 }}>
          <Text style={{ ...fonts.h2, fontSize: 20 }}>Available Pick up</Text>
        </View>
      </Animated.View>

      <View>
        <ScrollView style={{ marginBottom: 80 }}>
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
          <DriverListItem />
        </ScrollView>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: Dimensions.get("window").height - 200,
    backgroundColor: colors.white,
    padding: 10,
    width: "100%",
    elevation: 4,
    zIndex: 4,
    bottom: 0,
    position: "absolute",
    right: 0,
    padding: 20,
    paddingTop: 1,
  },
  selected: {
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
export default PickList;
