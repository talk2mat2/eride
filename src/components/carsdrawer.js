import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { FontAwesome5 } from "@expo/vector-icons";
import Buttons from "./buttons";
import { useClientQuery } from "../services/api";
const CarsDrwaer = ({ title = "", setAnimedon, handleProceed }) => {
  const { data, isError, isLoading, refetch } = useClientQuery("cars");
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
          onPress={handleProceed}
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
        {isLoading ? (
          <View>
            <Text>Loading.....</Text>
          </View>
        ) : (
          <ScrollView horizontal>
            {data?.length ? (
              data?.map((item,index) => (
                <TouchableOpacity onPress={() => setSelected(index)}>
                  <View
                    style={
                      selected == index
                        ? styles.selected
                        : { alignItems: "center", marginHorizontal: 10 }
                    }
                  >
                    <Image
                      style={{ width: 80 }}
                      source={require("../../assets/car1.png")}
                    />
                    <Text style={{ ...fonts.h2, fontSize: 14 }}>
                      {item?.category}
                    </Text>
                    <Text style={{ ...fonts.h2, fontSize: 12 }}>
                      {item?.rate}/{item?.pay_type}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <>
                <TouchableOpacity onPress={() => setSelected(1)}>
                  <View
                    style={
                      selected == 1
                        ? styles.selected
                        : { alignItems: "center", marginHorizontal: 10 }
                    }
                  >
                    <Image
                      style={{ width: 80 }}
                      source={require("../../assets/car1.png")}
                    />
                    <Text style={{ ...fonts.h2, fontSize: 14 }}>Micro</Text>
                    <Text style={{ ...fonts.h2, fontSize: 14 }}>5 Min</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelected(2)}>
                  <View
                    style={
                      selected == 2 ? styles.selected : { alignItems: "center" }
                    }
                  >
                    <Image
                      style={{ width: 80 }}
                      source={require("../../assets/car2.png")}
                    />
                    <Text style={{ ...fonts.h2, fontSize: 14 }}>Mini</Text>
                    <Text style={{ ...fonts.h2, fontSize: 14 }}>5 Min</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </ScrollView>
        )}
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
    marginHorizontal: 10,

    borderWidth: 1,
    borderColor: colors.primary,
  },
});
export default CarsDrwaer;
