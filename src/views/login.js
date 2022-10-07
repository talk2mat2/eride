import React from "react";
import { Text, View } from "react-native";
import Buttons from "../components/buttons";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const Login = () => {
  return (
    <View>
      <Header title="Login" />
      <View style={{ marginTop: "25%" }}>
        <Text
          style={{ ...fonts.h1, color: colors.primary, textAlign: "center" }}
        >
          Login
        </Text>
        <View style={{ marginTop: 10 ,paddingHorizontal:20}}>
          <TextInputs placeholder="Email" />
          <TextInputs secureTextEntry={true} placeholder="Password" inputStyles={{ marginTop: 30 }} />
        </View>

        <View style={{ alignItems:"center",marginTop:"50%" }}>
          <Buttons title="Next" />
        </View>
      </View>
    </View>
  );
};

export default Login;
