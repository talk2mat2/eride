import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/header";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
const RequestDetails = ({ navigation }) => {
  const [accepted, setAccepted] = React.useState(true);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        textStyle={{ fontSize: 19 }}
        title="Details"
        showNav={true}
      />
      <View
        style={{
          height: "50%",
          alignItems: "center",
          marginTop: "7%",
          paddingHorizontal: 10,
        }}
      >
        <Ionicons
          name="person-circle-outline"
          size={90}
          color={colors.primary}
        />
        <View style={{ marginTop: 30 }}>
          <Text style={{ ...fonts.p, textAlign: "center" }}>
            if you Accept you are to pick the client{"\n"} as fast you can{" "}
          </Text>
        </View>
        {true ? (
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 30,
            }}
          >
            <Buttons
              textStyles={{ fontSize: 17 }}
              btnStyles={{ height: 28, width: 79 }}
              title="Accept"
            />
            <Buttons2
              textStyles={{ fontSize: 17 }}
              btnStyles={{ height: 28, width: 79 }}
              title="Reject"
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 30,
            }}
          >
            <Buttons
              textStyles={{ fontSize: 17 }}
              btnStyles={{ height: 28, width: 79 }}
              title="Start Journey"
            />
            <Buttons2
              textStyles={{ fontSize: 17 }}
              btnStyles={{ height: 28, width: 79 }}
              title="Reject"
            />
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff", flex: 1 },
});
export default RequestDetails;
