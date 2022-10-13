import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/header";
import TransferItem from "../components/transferItems";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
const Wallet = ({navigation}) => {
  return (
    <View style={styles.container}>
   
      <View style={{ marginBottom: 10 }}>
        <View style={styles.HeaderItem}>
          <Text style={{ ...fonts.h2,fontSize:40 }}># 40345.00</Text>
          <Text style={{ ...fonts.h2,fontSize:20,color:colors.grey2 }}>Total balance</Text>
        </View>
      </View>
      <View style={{}}>
        <View style={{ paddingHorizontal: 10 }}>
          <Text>Payment History</Text>
        </View>
        <View style={{ height: "80%", marginTop: 10 }}>
          <ScrollView>
            <TransferItem />
            <TransferItem />
            <TransferItem />
            <TransferItem />
            <TransferItem />
            <TransferItem />
            <TransferItem />
            <TransferItem />
            <TransferItem />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderItem: {
    height: 120,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: colors.grey1,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopWidth:1,
    borderColor:colors.grey2,
    marginTop:10
  },
  container: {
    backgroundColor:colors.white,
    flex:1
  },
});
export default Wallet;
