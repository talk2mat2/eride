import React from "react";
import { Text, View } from "react-native";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Divider } from "react-native-paper";

const Register = () => {
  return (
    <View>
      <Header title="Register" />
      <View style={{ marginTop: "5%" }}>
        <View
          style={{ marginTop: 15, flexDirection: "row", paddingHorizontal: 20 }}
        >
          <TextInputs placeholder="First Name" inputStyles={{ width: "40%" }} />
          <TextInputs
            secureTextEntry={true}
            placeholder="Last Name"
            inputStyles={{ width: "40%", marginLeft: "10%" }}
          />
        </View>
        <View
          style={{ marginTop: 15, marginHorizontal: 10, paddingHorizontal: 10 }}
        >
          <TextInputs placeholder="Email" inputStyles={{}} />
        </View>
        <View
          style={{ marginTop: 15, flexDirection: "row", paddingHorizontal: 20 }}
        >
          <TextInputs placeholder="Country" inputStyles={{ width: "40%" }} />
          <TextInputs
            secureTextEntry={true}
            placeholder="Phone Number"
            inputStyles={{ width: "40%", marginLeft: "10%" }}
          />
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", paddingHorizontal: 20 }}
        >
          <TextInputs
            secureTextEntry={true}
            placeholder="Password"
            inputStyles={{ width: "40%" }}
          />
          <TextInputs
            secureTextEntry={true}
            placeholder="Confirm Password"
            inputStyles={{ width: "40%", marginLeft: "10%" }}
          />
        </View>
        <View
          style={{
            marginTop: "20%",
            flexDirection: "row",
            alignItems: "center",
            alignSelf:"center"
          }}
        >
          <Divider
            style={{
              backgroundColor: colors.grey1,
              height: 3,
              width: "35%",
              alignItems: "center",
            }}
          />
          <Avatar.Text label="OR" size={30} style={{ backgroundColor:colors.grey1 }} />
          <Divider 
            style={{ backgroundColor: colors.grey1, height: 3, width: "35%" }}
          />
        </View>
        <View
          style={{
            marginTop: "6%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Buttons2
            btnStyles={{ height: 28, width: 132, height: 28, marginRight: 20 }}
          >
            <Ionicons name="logo-facebook" size={20} color={colors.white} />
          </Buttons2>
          <Buttons2 btnStyles={{ height: 28, width: 132, height: 28 }} />
        </View>

        <View style={{ alignItems: "center", marginTop: "16%" }}>
          <Buttons title="Next" />
        </View>
      </View>
    </View>
  );
};

export default Register;
