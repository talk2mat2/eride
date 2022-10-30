import React from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Header from "../components/header";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";

const Privacy = ({ navigation }) => {
  const handleNavigation = (location) => {
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <Header
        textStyle={{ fontSize: 20 }}
        animate={true}
        navigation={navigation}
        title="Privacy"
      />
      <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
        <Text style={{ ...fonts.h2, textAlign: "center" }}>
          Eride privacy policy
        </Text>
        <ScrollView>
          <Text style={{ ...fonts.p, color: colors.grey2, marginTop: "6%" }}>
            this section explains eride Eride Termsn and Conditionthis section
            explains eride this section explains eride explains eride this
            section explains eride privacy poly statement this section explains
            eride Eride Termsn and Conditionthis section explains eride this
            section explains eride explains eride this section explains eride
            privacy poly statement this section explains eride Eride Termsn and
            Conditionthis section explains eride this section explains eride
            explains eride this section explains eride privacy poly statement
            this section explains eride Eride Termsn and Conditionthis section
            explains eride this section explains eride explains eride this
            section explains eride privacy poly statement this section explains
            eride Eride Termsn and Conditionthis section explains eride this
            section explains eride explains eride this section explains eride
            privacy poly statement
          </Text>
          <Text style={{ ...fonts.h2, textAlign: "center" ,marginTop:"9%"}}>the summary</Text>
          <Text style={{ ...fonts.p, color: colors.grey2, marginTop: "3%" }}>
            this section explains eride Eride Termsn and Conditionthis section
            explains eride this section explains eride explains eride this
            section explains eride privacy poly statement this section explains
            eride Eride Termsn and Conditionthis section explains eride this
            section explains eride explains eride this section explains eride
            privacy poly statement this section explains eride Eride Termsn and
            Conditionthis section explains eride this section explains eride
            explains eride this section explains eride privacy poly statement
            this section explains eride Eride Termsn and Conditionthis section
            explains eride this section explains eride explains eride this
            section explains eride privacy poly statement this section explains
            eride Eride Termsn and Conditionthis section explains eride this
            section explains eride explains eride this section explains eride
            privacy poly statement
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
});
export default Privacy;
