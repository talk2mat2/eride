import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/header";
import { colors } from "../helpers/colors";
import LogsItem from "../components/logsItem";
import RequestItem from "../components/requestItem";
import { fonts } from "../helpers/constants";
import { useSelector } from "react-redux";
const DriverDash = ({ navigation }) => {
  const user = useSelector(({ user }) => user?.data);
  return (
    <View style={styles.container}>
      <Header
        HeaderIcon={
          <Ionicons name="person-circle-outline" size={24} color="black" />
        }
        textStyle={{ color: colors.grey2, fontSize: 18 }}
        title={`Welcome ${user?.userData?.first_name}`}
        showNav={false}
        bgColor="#ffffff"
      />
      <View style={{ paddingHorizontal: 10, marginTop: "4%" }}>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 300,
            paddingVertical: 10,
          }}
        >
          <Text style={{ ...fonts.h2, fontWeight: "bold" }}> New Request</Text>
          <ScrollView>
            {false ? (
              [1, 1, 2, 3, 4].map((item, index) => (
                <RequestItem navigation={navigation} key={index} />
              ))
            ) : (
              <View style={{ alignItems: "center", marginTop: "20%" }}>
                <Ionicons
                  name="warning-outline"
                  size={30}
                  color={colors.primary}
                />
                <Text style={{ color: colors.grey2 }}>No New Reqiest</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: "4%" }}>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 300,
            paddingVertical: 10,
          }}
        >
          <Text style={{ ...fonts.h2, fontWeight: "bold" }}>
            {" "}
            Request History
          </Text>
          <ScrollView>
            {true ? (
              [1, 1, 2, 3, 4].map((item, index) => (
                <RequestItem navigation={navigation} key={index} />
              ))
            ) : (
              <View style={{ alignItems: "center", marginTop: "20%" }}>
                <Ionicons
                  name="warning-outline"
                  size={30}
                  color={colors.primary}
                />
                <Text style={{ color: colors.grey2 }}>Empty</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default DriverDash;
