import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useSelector } from "react-redux";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const Account = ({ navigation }) => {
  const user = useSelector(({ user }) => user?.data);
  const handleNavigation = (location) => {
    navigation.navigate(location);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require("../../assets/Ellipse.png")}
          resizeMode="stretch"
          style={styles.image}
          //   imageStyle={{
          //     resizeMode: "stretch",
          //     alignSelf: "flex-start"
          //   }}
        >
          <Text
            style={{ ...fonts.h1, fontSize: 30, lineHeight: 29, marginTop: 60,textAlign:"center" }}
          >
            {user?.userData?.first_name}
            {"\n"}
            {user?.userData?.last_name}
          </Text>
          <Avatar.Image
            style={{
              position: "absolute",
              bottom: -30,
              backgroundColor: colors.grey1,
            }}
            size={100}
          />
        </ImageBackground>
      </View>

      <View style={{ marginTop: "20%", paddingHorizontal: 20 }}>
        <TouchableNativeFeedback onPress={() => handleNavigation("help")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              height: 40,
            }}
          >
            <Image source={require("../../assets/Vector.png")} />
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Helps
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => handleNavigation("Wallet")}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              height: 40,
            }}
          >
            <Image source={require("../../assets/Vector.png")} />
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Wallet
            </Text>
          </View>
        </TouchableNativeFeedback>
        {/* <TouchableNativeFeedback>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              height: 40,
            }}
          >
            <Image source={require("../../assets/Vector.png")} />
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Trips
            </Text>
          </View>
        </TouchableNativeFeedback> */}
      </View>
      <View style={{ marginTop: "2%", paddingHorizontal: 20 }}>
        <Divider style={{ backgroundColor: colors.primary }} />
        <View style={{ marginTop: "2%" }}>
          <TouchableNativeFeedback>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 3,
                height: 40,
              }}
            >
              <Image source={require("../../assets/Vector.png")} />
              <Text style={{ ...fonts.h2, marginLeft: 10 }}>Messages</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => handleNavigation("AccounteSettings")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 3,
                height: 40,
              }}
            >
              <Image source={require("../../assets/Vector2.png")} />
              <Text style={{ ...fonts.h2, marginLeft: 10 }}>Settings</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => handleNavigation("about")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 3,
                height: 40,
              }}
            >
              <Image source={require("../../assets/Vector3.png")} />
              <Text style={{ ...fonts.h2, marginLeft: 10 }}>About</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ alignItems: "center", marginTop: "10%" }}>
          <Text style={{ ...fonts.h2, fontSize: 30 }}>Eride</Text>
          <Text style={{ ...fonts.p, color: colors.grey2 }}>
            Version 1.100.1
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  imgContainer: {
    height: 200,
  },
});
export default Account;
