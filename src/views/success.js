import React from "react";
import { Text, View, StyleSheet, Keyboard, Image } from "react-native";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import Header from "../components/header";
import { Formik } from "formik";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
import { appToast, AsyncSave } from "../helpers";
import { fonts } from "../helpers/constants";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Divider } from "react-native-paper";
import WithSpinner from "../components/withspinner";
import { useMutations } from "../services/api";
const CELL_COUNT = 4;
const OtpView = ({ navigation, setLoading }) => {
  const { mutate } = useMutations();
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const { show } = appToast();
  const subMitdata = (datas) => {
    Keyboard.dismiss();
    console.log(datas);
    mutate(
      {
        key: "store-data",
        method: "post",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          console.log(response);
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
        textStyle={{ fontSize: 22 }}
        navigation={navigation}
        title="Verify PhoneNumber"
      />
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text style={{ ...fonts.p, color: colors.grey2 }}>
          A code has been sent to your phone number
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/phone1.png")} />
        <Text style={{ ...fonts.h2, fontSize: 23, lineHeight: 20 }}>
          Otp Verification
        </Text>
        <Text style={{ ...fonts.p, color: colors.grey2, marginTop: 8 }}>
          enter the OTP sent to 000000000000
        </Text>
      </View>
      <View style={{ marginTop: 2, paddingHorizontal: "20%" }}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 14 }}>
        <Text style={{ ...fonts.p, color: colors.grey2 }}>
          Didn’t receive OTP?{" "}
          <Text style={{ color: colors.primary }}>RESEND</Text>
        </Text>
      </View>
      <View style={{ alignItems:"center",marginTop:22 }}>
        <Buttons textStyles={{ fontSize:16 }} title="VERIFY & CONTINUE" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    // borderWidth: 2,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
export default WithSpinner(OtpView);

// navigation.navigate("CodeScreen", { email: email });
