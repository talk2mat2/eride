import React from "react";
import { Text, View, StyleSheet, Keyboard,Linking } from "react-native";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import Header from "../components/header";
import { Formik } from "formik";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { appToast, AsyncSave } from "../helpers";
import { fonts } from "../helpers/constants";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Button, Divider } from "react-native-paper";
import WithSpinner from "../components/withspinner";
import { useMutations } from "../services/api";

const DriverRegisterSuccess = ({ navigation, setLoading, route, loading }) => {
  const { mutate } = useMutations();

  const { show } = appToast();
  const subMitdata = (datas) => {
    Keyboard.dismiss();
    console.log(datas);
    mutate(
      {
        key: "store-rider",
        method: "post",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          console.log(response);
          if (response?.success) {
            show(response?.success, {
              type: "normal",
            });
            setTimeout(() => {
              return navigation.navigate("successregister", {
                user_id: response.user_id,
                otp: response.otp,
              });
            }, 2000);
          }
          if (response?.created == 0) {
            show("Account already exist but it has not been verified", {
              type: "normal",
            });
            setTimeout(() => {
              return navigation.navigate("otpView", {
                user_id: response.user_id,
                otp: response.otp,
              });
            }, 2000);
          }
          if (response?.created == 1) {
            show("Account already exist and verified", {
              type: "normal",
            });
            setTimeout(() => {
              return navigation.navigate("login", {
                user_id: response.user_id,
                otp: response.otp,
              });
            }, 2000);
          }
          // if (response?.error) {
          //   return show(response?.error, {
          //     type: "normal",
          //   });
          // }
          // console.log(response);
          // if (response?.user || response?.access_token) {
          //   // used to check if login successfu0l
          //   var user_details = response.user;
          //   var access_token = response.access_token;
          //   dispatch(logIn({ token: access_token, userData: user_details }));
          //   AsyncSave("token", access_token);
          // }
        },
        onError: (error) => {
          setLoading(false);
          show(error?.statusText || "an error occured");
        },
      }
    );
  };

  return (
    <View style={{ ...styles.container }}>
      {/* <Header
        textStyle={{ fontSize: 25 }}
        iconColor={colors.black}
        navigation={navigation}
        title="Register"
        bgColor={colors.white}
      /> */}
      <Text
        style={{
          ...fonts.h1,
          color: colors.primary,
          textAlign: "center",
        }}
      >
        Driver Register
      </Text>
      <View style={{ marginTop:"20%",paddingHorizontal:20 }}>
        <Text style={{ ...fonts.p,color:colors.grey2,textAlign:"center" }}>
          Registration was successfull , however you need to visit the portal to
          validate your accout , we would contact you soon
        </Text>
      </View>
      <View style={{ alignItems:"center",marginTop:"15%" }}><Buttons onPress={()=>Linking.openURL("https://eride.essentialdirect.ng/sign-in")} title="Visit Portal"/></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop:"30%"
  },
});
export default WithSpinner(DriverRegisterSuccess);
