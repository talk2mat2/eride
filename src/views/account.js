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
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const Account = ({ navigation }) => {
  const handleNavigation = (location) => {
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require("../../assets/Ellipse.png")}
          resizeMode="contain"
          style={styles.image}
        >
          <Text
            style={{ ...fonts.h1, fontSize: 30, lineHeight: 29, marginTop: 60 }}
          >
            Emmanuel{"\n"}Odejinmi
          </Text>
          <Avatar.Image
            style={{ position: "absolute", bottom: -30 }}
            size={100}
          />
        </ImageBackground>
      </View>

      <View style={{ marginTop: 40 }}>
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
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Helps
            </Text>
          </View>
        </TouchableNativeFeedback>
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
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Fund Wallet
            </Text>
          </View>
        </TouchableNativeFeedback>
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
            <Text style={{ ...fonts.h2, marginLeft: 10, fontSize: 19 }}>
              Trips
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{ marginTop: "2%" }}>
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
          <TouchableNativeFeedback onPress={()=> handleNavigation('AccounteSettings')}>
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
          <TouchableNativeFeedback>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 3,
                height: 40,
              }}
            >
              <Image source={require("../../assets/Vector3.png")} />
              <Text style={{ ...fonts.h2, marginLeft: 10 }}>Legal</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.grey1,
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
