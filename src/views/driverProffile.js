import React from "react";
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View, Linking,
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
import { appToast } from "../helpers";

const DriverProfile = ({ navigation, route }) => {
  const { show } = appToast();
  return (
    <View style={{ flex:1,backgroundColor:colors.white }}>
      <Header
        na
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
          <Avatar.Image backgroundColor="#f2f2f2"
            size={120}
            // source={require("../../assets/woman.jpg")}
            source={(route.params?.profile_pictured) | ""}
          />
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
                  {route.params?.first_name} {route.params?.last_name}
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
                  {route.params?.email}
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
                  {route.params?.phone}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 90, alignItems: "center" }}>
            <Buttons onPress={()=>{
              if(route.params?.phone){
                Linking.openURL(`tel:${route.params?.phone}`)
              }
              else{
                return show("This driver has not sset phone number", {
                  type: "normal",
                });
              }
            }}
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
