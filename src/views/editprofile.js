import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
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

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header  textStyle={{ fontSize: 25 }} navigation={navigation} title="Edit Profile" />
      <View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.white,
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Avatar.Image size={104} source={require("../../assets/woman.jpg")} />
        </View>
        <ScrollView>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              paddingHorizontal: 20,
            }}
          >
            <TextInputs
              placeholder="First Name"
              inputStyles={{ width: "40%" }}
            />
            <TextInputs
              secureTextEntry={true}
              placeholder="Last Name"
              inputStyles={{ width: "40%", marginLeft: "10%" }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              marginHorizontal: 10,
              paddingHorizontal: 10,
            }}
          >
            <TextInputs placeholder="Email" inputStyles={{}} />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              paddingHorizontal: 20,
            }}
          >
            <TextInputs placeholder="Country" inputStyles={{ width: "40%" }} />
            <TextInputs
              secureTextEntry={true}
              placeholder="Phone Number"
              inputStyles={{ width: "40%", marginLeft: "10%" }}
            />
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <Text style={fonts.h2}>Place</Text>
            <Divider
              style={{
                marginTop: 10,
                backgroundColor: colors.primary,
                height: 2,
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="home-sharp" size={24} color="black" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ ...fonts.h2, fontSize: 15 }}>
                    24 Iyalla street
                  </Text>
                  <Text style={{ ...fonts.p, color: colors.grey2 }}>
                    add home
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={{ paddingLeft: 30 }}>
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Divider
              style={{
                marginTop: 10,
                backgroundColor: colors.grey1,
                height: 2,
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="home-sharp" size={24} color="black" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ ...fonts.h2, fontSize: 15 }}>
                    24 Keffi street
                  </Text>
                  <Text style={{ ...fonts.p, color: colors.grey2 }}>
                    add home
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={{ paddingLeft: 30 }}>
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Divider
              style={{
                marginTop: 10,
                backgroundColor: colors.grey1,
                height: 2,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
export default EditProfile;
