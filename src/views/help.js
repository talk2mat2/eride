
import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/header";
const Help = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header textStyle={{ fontSize:19 }} navigation={navigation} title="Help Section" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    flex:1
  },
});
export default Help;
