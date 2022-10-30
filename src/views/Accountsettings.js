import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import { logOut } from "../redux/reducers/usersSlice";
const AccountSettings = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user?.data);
  const handleLogout = () => {
    dispatch(logOut());
  };
  const handleNav = (nav) => {
    navigation.navigate(nav);
  };
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        animate={true}
        // navigation={navigation}
        textStyle={{ fontSize: 25 }}
        title="Account Settings"
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Avatar.Image size={90} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ ...fonts.p, color: colors.grey2 }}>
            {user?.userData?.first_name} {user?.userData?.last_name}
          </Text>
          <Text style={{ ...fonts.p, color: colors.grey2 }}>
            {user?.userData?.phone}
          </Text>
          <Text style={{ ...fonts.p, color: colors.grey2 }}>
            {user?.userData?.email}
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
        <Divider style={{ ...styles.hr, marginTop: 14, marginBottom: 20 }} />
       
        {/* <TouchableNativeFeedback>
          <View style={{ marginVertical: 4, padding: 9 }}>
            <Text style={{ ...fonts.h2 }}>Manage Trusted Contacts</Text>
            <Text style={{ ...fonts.p, fontSize: 14, color: colors.grey2 }}>
              share your trip status with your loved onve s ina single tap
            </Text>
          </View>
        </TouchableNativeFeedback> */}
        <TouchableNativeFeedback>
          <View style={{ marginVertical: 4, padding: 9 }}>
            <Text style={{ ...fonts.h2 }}>Verify Your Ride</Text>
            <Text style={{ ...fonts.p, fontSize: 14, color: colors.grey2 }}>
              use a PIN to make sure you get right car
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => handleNav("editProfile")}>
          <View style={{ marginVertical: 4, padding: 9 }}>
            <Text style={{ ...fonts.h2 }}>Edit Profile</Text>
            <Text style={{ ...fonts.p, fontSize: 14, color: colors.grey2 }}>
              Edit you profile
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={{ marginVertical: 4, padding: 9 }}>
            <Text style={{ ...fonts.h2 }}>Change Password</Text>
            <Text style={{ ...fonts.p, fontSize: 14, color: colors.grey2 }}>
              change your pin
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={{ marginVertical: 4, padding: 9 }}>
            <Text style={{ ...fonts.h2 }}>Fund Wallet</Text>
            <Text style={{ ...fonts.p, fontSize: 14, color: colors.grey2 }}>
              change your pin
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={handleLogout}>
          <View style={{ marginVertical: 4, padding: 9 }}>
            <Text style={{ ...fonts.h2 }}>Signout</Text>
            <Text style={{ ...fonts.p, fontSize: 14, color: colors.grey2 }}>
              log out
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hr: {
    height: 1,
    backgroundColor: colors.grey2,
    marginVertical: 2,
  },
});
export default AccountSettings;
