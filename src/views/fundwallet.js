import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/header";
import TransferItem from "../components/transferItems";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { Avatar } from "react-native-paper";
import { fonts } from "../helpers/constants";
import CardListrItems from "../components/cardslistItem";
const FundWallet = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <View style={{ marginBottom: 10, paddingHorizontal: 8, marginTop: 10 }}>
        <View
          style={{
            ...styles.floatBtn,
          }}
        >
          <Avatar.Image style={{ backgroundColor: colors.primary }} size={44} />
          <Text style={{ ...fonts.p, fontSize: 15 }}>AddNew Card</Text>
          <FontAwesome5 name="chevron-right" size={24} color={colors.grey2} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: "13%" }}>
        <View style={{ ...styles.card }}>
          <Text style={{ ...fonts.h2, alignSelf: "flex-start" }}>
            CREDIT CARDS
          </Text>
          <View style={{ ...styles.cardbody }}>
            <ScrollView>
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
              <CardListrItems />
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
export default FundWallet;
