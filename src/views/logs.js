import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "../components/header";
import LogsItem from "../components/logsItem";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const Logs = () => {
  return (
    <View style={styles.container}>
      <Header animate={true} showNav={false} title="Logs" />
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ marginTop: 20,paddingLeft:10 }}>
          <Text style={{ ...fonts.h2 ,fontSize:24}}>Past</Text>
        </View>
        <View style={{ height: "100%" ,marginTop:10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
            <LogsItem />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.white
  },
});
export default Logs;
