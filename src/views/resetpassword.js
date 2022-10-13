import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Buttons from "../components/buttons";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { fonts } from "../helpers/constants";

const ResetPass = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} textStyle={{ fontSize:22 }} title="Reset Password" />
      <View style={{ marginTop: "8%" ,alignItems:"center"}}>
        <SimpleLineIcons name="emotsmile" size={60} color={colors.primary} />
      </View>
      <View style={{ marginTop: "4%" }}>
        <Text style={{ ...fonts.p, textAlign: "center" }}>
          Dont’s Worry! Just Enter Your Email Address Below.{"\n"} And We’ll
          send you the password rest intruction
        </Text>
        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
          <TextInputs placeholder="Phone Number or Email" />
        </View>

        <View style={{ alignItems: "center", marginTop: "50%" }}>
          <Buttons textStyles={{ fontSize:22 }} title="Reset Password" />
        </View>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    backgroundColor:colors.white
  }
})
export default ResetPass;
