import React from "react";
import { View, StyleSheet } from "react-native";
import Buttons from "../components/buttons";
import Header from "../components/header";
import TextInputs from "../components/Textinput";
import { colors } from "../helpers/colors";
const ChangePass = () => {
  return (
    <View style={styles.container}>
      <Header title="Change Password" />
      <View style={{ marginTop:"20%",paddingHorizontal:20 }}>
        <View>
          <TextInputs inputStyles={{backgroundColor:colors.grey1 }} placeholder="Old Password" />
        </View>
        <View>
          <TextInputs placeholder="New Password" />
        </View>
        <View>
          <TextInputs placeholder="Confirm New Password" />
        </View>
      </View>
      <View style={{ alignItems:"center" ,marginTop:"30%"}}>
        <Buttons title="Change"/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  
  },
});
export default ChangePass;
