import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Keyboard,
} from "react-native";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import Header from "../components/header";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TextInputs from "../components/Textinput";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { Avatar, Divider } from "react-native-paper";
import { fonts } from "../helpers/constants";
import WithSpinner from "../components/withspinner";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { useSelector } from "react-redux";

const subMitdata = (datas) => {
  Keyboard.dismiss();
};

const EditProfile = ({ navigation, loading }) => {
  const [visible, setVisible] = React.useState(false);
  const user = useSelector(({ user }) => user?.data);
  const showHomeModal = () => setVisible(true);
  const hideHomeModal = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Header
        textStyle={{ fontSize: 25 }}
        navigation={navigation}
        title="Edit Profile"
      />
      {/* <Provider>
        <Portal>
          <Modal
          style={{ elevation:100,position:"absolute",""}}
            visible={visible}
            onDismiss={hideHomeModal} 
            
            contentContainerStyle={{ padding: 20,elevation:20,zIndex:10,height:300}}
          >
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
      </Provider> */}
      <Formik
        initialValues={{
          username: "",
          password: "",
          first_name: user?.userData?.first_name,
          email: user?.userData?.email,
          last_name: user?.userData?.last_name,
          country: user?.userData?.country,
          phone: user?.userData?.phone,
          password2: "",
          subject: "eride",
        }}
        onSubmit={(values) => {
          if (!values.password || !values.password) {
            return Alert.alert("All fields are required");
          }
          setLoading(true);
          subMitdata(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: colors.white,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Avatar.Image
                size={104}
                source={require("../../assets/woman.jpg")}
              />
            </View>
            <ScrollView>
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
                  disabled={true}
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

              <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                <Text style={fonts.h2}>Place</Text>
                <Divider
                  style={{
                    marginTop: 10,
                    backgroundColor: colors.primary,
                    height: 2,
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="home-sharp" size={24} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ ...fonts.h2, fontSize: 15 }}>
                        24 Iyalla street
                      </Text>
                      <Text style={{ ...fonts.p, color: colors.grey2 }}>
                        add home
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={showHomeModal}
                    style={{ paddingLeft: 30 }}
                  >
                    <AntDesign name="edit" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <Divider
                  style={{
                    marginTop: 10,
                    backgroundColor: colors.grey1,
                    height: 2,
                  }}
                />
              </View>
              <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Ionicons name="home-sharp" size={24} color="black" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ ...fonts.h2, fontSize: 15 }}>
                        24 Keffi street
                      </Text>
                      <Text style={{ ...fonts.p, color: colors.grey2 }}>
                        add home
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={{ paddingLeft: 30 }}>
                    <AntDesign name="edit" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <Divider
                  style={{
                    marginTop: 10,
                    backgroundColor: colors.grey1,
                    height: 2,
                  }}
                />
              </View>
            </ScrollView>
            <View style={{ alignItems: "center", marginTop: "16%" }}>
              <Buttons2
                disabled={loading}
                onPress={handleSubmit}
                title="Update"
              />
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
  },
});
export default WithSpinner(EditProfile);
