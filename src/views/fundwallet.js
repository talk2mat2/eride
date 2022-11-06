import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/header";
import PayStack from "../components/paystack";
import TransferItem from "../components/transferItems";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { Avatar } from "react-native-paper";
import { fonts } from "../helpers/constants";
import CardListrItems from "../components/cardslistItem";
import TextInputs from "../components/Textinput";
import { useMutations } from "../services/api";
import { useSelector } from "react-redux";
import WithSpinner from "../components/withspinner";
import { appToast } from "../helpers";
const FundWallet = ({ navigation, setLoading ,refetch}) => {
   const { show :shows } = appToast();
  const [show, setShow] = React.useState(false);
  const user = useSelector(({ user }) => user?.data);
  // console.log(user?.userData)
  const [amount, setAmount] = React.useState(1000);
  const { mutate } = useMutations();
  const subMitdata = (datas) => {
    setLoading(true);
    mutate(
      {
        key: "wallet/" + user?.userData?.id,
        method: "post",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          refetch()
console.log(response)
          if (response?.message) {
            return shows(response?.message, {
              type: "normal",
            });
          } else {
            Alert.alert("Payment was successfull");
          }
        
        },
        onError: (error) => {
          setLoading(false);
          shows(error?.statusText || "an error occured");
        },
      }
    );
  };
  return show ? (
    <PayStack subMitdata={subMitdata} amount={amount} setShow={setShow} />
  ) : (
    <View style={styles.container}>
      <View style={{ marginBottom: 10, paddingHorizontal: 8, marginTop: 10 }}>
        {/* <View
          style={{
            ...styles.floatBtn,
          }}
        >
          <Avatar.Image style={{ backgroundColor: colors.primary }} size={44} />
          <Text style={{ ...fonts.p, fontSize: 15 }}>AddNew Card</Text>
          <FontAwesome5 name="chevron-right" size={24} color={colors.grey2} />
        </View> */}
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TextInputs
          value={amount?.toString()}
          onChangeText={(text) => setAmount(text)}
          keyboardType="number-pad"
          placeholder="Enter A amount (  NAIRA)"
          // onChangeText={handleChange("username")}
          // onBlur={handleBlur("username")}
          // value={values.username}
        />
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: "20%" }}>
        <View style={{ ...styles.card }}>
          <Text style={{ ...fonts.h2, alignSelf: "flex-start" }}>
            Choose Method
          </Text>
          <View style={{ ...styles.cardbody }}>
            <ScrollView>
              <CardListrItems
                onPress={() => {
                  if (!amount) {
                    return Alert.alert("Amount not set");
                  }
                  setShow(true);
                }}
                name="Paystack"
              />
              <CardListrItems name="Flutterwave" />
            </ScrollView>
          </View>
        </View>
      </View>
      {/* <View style={{}}>
        <View style={{ paddingHorizontal: 10 }}>
          <Text>Payment History</Text>
        </View>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderItem: {
    height: 120,
    backgroundColor: colors.white,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopWidth: 1,
    borderColor: colors.grey2,
    marginTop: 10,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  card: {
    height: "80%",
    padding: 10,
    backgroundColor: colors.white,
    shadowColor: "rgba(0, 0, 0, 0.25",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    borderColor: colors.grey2,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  cardbody: {
    marginTop: "auto",
    paddingTop: 20,
    width: "99%",
    height: "90%",
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  floatBtn: {
    shadowColor: "rgba(0, 0, 0, 0.25",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    borderColor: colors.grey2,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    backgroundColor: colors.grey1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center",
    borderRadius: 7,
    paddingRight: 20,
    paddingLeft: 10,
  },
});
export default WithSpinner(FundWallet);
