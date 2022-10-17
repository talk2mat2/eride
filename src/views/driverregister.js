import React from "react";
import { Text, View, StyleSheet, Keyboard } from "react-native";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import Header from "../components/header";
import { Formik } from "formik";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { appToast, AsyncSave } from "../helpers";
import { fonts } from "../helpers/constants";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Divider } from "react-native-paper";
import WithSpinner from "../components/withspinner";
import { useMutations } from "../services/api";

const DriverRegister = ({ navigation, setLoading, route, loading }) => {
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
      <Header
        textStyle={{ fontSize: 25 }}
        iconColor={colors.black}
        navigation={navigation}
        title="Register"
        bgColor={colors.white}
      />
      <Formik
        initialValues={{
          username: "",
          password: "",
          first_name: "",
          email: "",
          last_name: "",
          country: "",
          phone: "",
          password2: "",
          prodfile_picture:"",
          subject: "eride",
        }}
        onSubmit={(values) => {
          setLoading(true);
          if (values.password2) {
            delete values.password2;
          }
          subMitdata(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ marginTop: "5%" }}>
            <Text
              style={{
                ...fonts.h1,
                color: colors.primary,
                textAlign: "center",
              }}
            >
              Driver Register
            </Text>
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
                onChangeText={handleChange("first_name")}
                onBlur={handleBlur("first_name")}
                value={values.first_name}
              />
              <TextInputs
                secureTextEntry={false}
                placeholder="Last Name"
                inputStyles={{ width: "40%", marginLeft: "10%" }}
                onChangeText={handleChange("last_name")}
                onBlur={handleBlur("last_name")}
                value={values.last_name}
              />
            </View>
            <View
              style={{
                marginTop: 15,
                marginHorizontal: 10,
                paddingHorizontal: 10,
              }}
            >
              <TextInputs
                placeholder="Email"
                inputStyles={{}}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                paddingHorizontal: 20,
              }}
            >
              <TextInputs
                placeholder="Country"
                inputStyles={{ width: "40%" }}
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
                value={values.country}
              />
              <TextInputs
                placeholder="Phone Number"
                inputStyles={{ width: "40%", marginLeft: "10%" }}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                paddingHorizontal: 20,
              }}
            >
              <TextInputs
                secureTextEntry={true}
                placeholder="Password"
                inputStyles={{ width: "40%" }}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TextInputs
                secureTextEntry={true}
                placeholder="Confirm Password"
                inputStyles={{ width: "40%", marginLeft: "10%" }}
                onChangeText={handleChange("password2")}
                onBlur={handleBlur("password2")}
                value={values.password2}
              />
            </View>
            <View
              style={{
                marginTop: "20%",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
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
              <Avatar.Text
                label="OR"
                size={30}
                style={{ backgroundColor: colors.grey1 }}
              />
              <Divider
                style={{
                  backgroundColor: colors.grey1,
                  height: 3,
                  width: "35%",
                }}
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
                btnStyles={{
                  height: 28,
                  width: 132,
                  height: 28,
                  marginRight: 20,
                }}
              >
                <Ionicons name="logo-facebook" size={20} color={colors.white} />
              </Buttons2>
              <Buttons2
                onPress={handleSubmit}
                btnStyles={{ height: 28, width: 132, height: 28 }}
              />
            </View>

            <View style={{ alignItems: "center", marginTop: "16%" }}>
              <Buttons disabled={loading} onPress={handleSubmit} title="Next" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
export default WithSpinner(DriverRegister);
