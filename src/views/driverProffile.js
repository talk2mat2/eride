import React from "react";
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
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

const DriverProfile = ({navigation}) => {
  return (
    <View>
      <Header na
        textStyle={{ fontSize: 25 }}
        navigation={navigation}
        title="Driver Profile"
      />
      <View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.white,
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Avatar.Image size={120} source={require("../../assets/woman.jpg")} />
        </View>
        <ScrollView>
          <View
            style={{
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity style={{ marginTop: 20, width: "100%" }}>
              <View>
                <Text style={{ ...fonts.h2, color: colors.grey2 }}>Name</Text>
                <Text style={{ ...fonts.h2, fontWeight: "bold", fontSize: 20 }}>
                  Racheal Dave
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity style={{ marginTop: 20, width: "100%" }}>
              <View>
                <Text style={{ ...fonts.h2, color: colors.grey2 }}>Email</Text>
                <Text style={{ ...fonts.h2, fontWeight: "bold", fontSize: 20 }}>
                  RachealDave@gmail.com
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 15,
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity style={{ marginTop: 20, width: "100%" }}>
              <View>
                <Text style={{ ...fonts.h2, color: colors.grey2 }}>Phone</Text>
                <Text style={{ ...fonts.h2, fontWeight: "bold", fontSize: 20 }}>
                  08168192858
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 90, alignItems: "center" }}>
            <Buttons
              textStyles={{ fontSize: 20 }}
              btnStyles={{ height: 30, width: 180 }}
              title="Call"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DriverProfile;
