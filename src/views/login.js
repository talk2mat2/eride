import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Keyboard,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import Buttons from "../components/buttons";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { Formik } from "formik";
import WithSpinner from "../components/withspinner";
import { appToast, AsyncSave } from "../helpers";
import { useDispatch } from "react-redux";
import { useMutations } from "../services/api";
import { logIn } from "../redux/reducers/usersSlice";

const Login = ({ navigation, setLoading, loading }) => {
  const { mutate } = useMutations();

  const { show } = appToast();

  const dispatch = useDispatch();
  const subMitdata = (datas) => {
    Keyboard.dismiss();
    // console.log(datas);
    mutate(
      {
        key: "login",
        method: "post",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);

          if (response?.error) {
            return show(response?.error, {
              type: "normal",
            });
          }
          // console.log(response);
          if (response?.user || response?.access_token) {
            // used to check if login successfu0l
            var user_details = response.user;
            var access_token = response.access_token;
            dispatch(logIn({ token: access_token, userData: user_details }));
            AsyncSave("token", access_token);
          }
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
      {/* <Header title="Login" /> */}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          if (!values.password || !values.password) {
            return Alert.alert("All fields are required");
          }
          setLoading(true);
          subMitdata(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ marginTop: "15%" }}>
            <View style={{ alignItems: "center", marginBottom: "25%" }}>
              <Image source={require("../../assets/logo1.png")} />
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>RIDE ON</Text>
            </View>

            <Text
              style={{
                ...fonts.h1,
                color: colors.primary,
                textAlign: "center",
              }}
            >
              Login
            </Text>

            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
              <TextInputs
                placeholder="Username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <TextInputs
                secureTextEntry={true}
                placeholder="Password"
                inputStyles={{ marginTop: 30 }}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View style={{ alignItems: "center", marginTop: "20%" }}>
              <Buttons
                disabled={loading}
                onPress={handleSubmit}
                title="Login"
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: "20%",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "76%",
                alignSelf: "center",
              }}
            >
              <TouchableNativeFeedback
                onPress={() => navigation.navigate("resetpass")}
              >
                <Text style={{ ...fonts.p, color: colors.grey2 }}>
                  Forget Password?
                </Text>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() => navigation.navigate("register")}
              >
                <Text style={{ ...fonts.p, color: colors.grey2 }}>
                  Create account
                </Text>
              </TouchableNativeFeedback>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: "3%",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "76%",
                alignSelf: "center",
              }}
            >
              <TouchableNativeFeedback
                onPress={() => navigation.navigate("driverlogin")}
              >
                <Text style={{ ...fonts.p, color: colors.grey2 }}>
                  Drivers section
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1
  },
});
export default WithSpinner(Login);
